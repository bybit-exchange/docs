"use strict";
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleRequestFromSchema = void 0;
const chalk_1 = __importDefault(require("chalk"));
const createRequestSchema_1 = require("../markdown/createRequestSchema");
const primitives = {
    string: {
        default: () => "string",
        email: () => "user@example.com",
        date: () => new Date().toISOString().substring(0, 10),
        "date-time": () => new Date().toISOString().substring(0, 10),
        uuid: () => "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        hostname: () => "example.com",
        ipv4: () => "198.51.100.42",
        ipv6: () => "2001:0db8:5b96:0000:0000:426f:8e17:642a",
    },
    number: {
        default: () => 0,
        float: () => 0.0,
    },
    integer: {
        default: () => 0,
    },
    boolean: {
        default: (schema) => typeof schema.default === "boolean" ? schema.default : true,
    },
    object: {},
    array: {},
};
function sampleRequestFromProp(name, prop, obj) {
    // Handle resolved circular props
    if (typeof prop === "object" && Object.keys(prop).length === 0) {
        obj[name] = prop;
        return obj;
    }
    // TODO: handle discriminators
    if (prop.oneOf) {
        obj[name] = (0, exports.sampleRequestFromSchema)(prop.oneOf[0]);
    }
    else if (prop.anyOf) {
        obj[name] = (0, exports.sampleRequestFromSchema)(prop.anyOf[0]);
    }
    else if (prop.allOf) {
        const { mergedSchemas } = (0, createRequestSchema_1.mergeAllOf)(prop.allOf);
        sampleRequestFromProp(name, mergedSchemas, obj);
    }
    else {
        obj[name] = (0, exports.sampleRequestFromSchema)(prop);
    }
    return obj;
}
const sampleRequestFromSchema = (schema = {}) => {
    try {
        let { type, example, allOf, properties, items, oneOf, anyOf } = schema;
        if (example !== undefined) {
            return example;
        }
        if (oneOf) {
            // Just go with first schema
            return (0, exports.sampleRequestFromSchema)(oneOf[0]);
        }
        if (anyOf) {
            // Just go with first schema
            return (0, exports.sampleRequestFromSchema)(anyOf[0]);
        }
        if (allOf) {
            const { mergedSchemas } = (0, createRequestSchema_1.mergeAllOf)(allOf);
            if (mergedSchemas.properties) {
                for (const [key, value] of Object.entries(mergedSchemas.properties)) {
                    if (value.readOnly && value.readOnly === true) {
                        delete mergedSchemas.properties[key];
                    }
                }
            }
            return (0, exports.sampleRequestFromSchema)(mergedSchemas);
        }
        if (!type) {
            if (properties) {
                type = "object";
            }
            else if (items) {
                type = "array";
            }
            else {
                return;
            }
        }
        if (type === "object") {
            let obj = {};
            for (let [name, prop] of Object.entries(properties !== null && properties !== void 0 ? properties : {})) {
                if (prop.properties) {
                    for (const [key, value] of Object.entries(prop.properties)) {
                        if (value.readOnly && value.readOnly === true) {
                            delete prop.properties[key];
                        }
                    }
                }
                if (prop.items && prop.items.properties) {
                    for (const [key, value] of Object.entries(prop.items.properties)) {
                        if (value.readOnly && value.readOnly === true) {
                            delete prop.items.properties[key];
                        }
                    }
                }
                if (prop.deprecated) {
                    continue;
                }
                // Resolve schema from prop recursively
                obj = sampleRequestFromProp(name, prop, obj);
            }
            return obj;
        }
        if (type === "array") {
            if (Array.isArray(items === null || items === void 0 ? void 0 : items.anyOf)) {
                return items === null || items === void 0 ? void 0 : items.anyOf.map((item) => (0, exports.sampleRequestFromSchema)(item));
            }
            if (Array.isArray(items === null || items === void 0 ? void 0 : items.oneOf)) {
                return items === null || items === void 0 ? void 0 : items.oneOf.map((item) => (0, exports.sampleRequestFromSchema)(item));
            }
            return [(0, exports.sampleRequestFromSchema)(items)];
        }
        if (schema.enum) {
            if (schema.default) {
                return schema.default;
            }
            return normalizeArray(schema.enum)[0];
        }
        if (schema.readOnly && schema.readOnly === true) {
            return undefined;
        }
        return primitive(schema);
    }
    catch (err) {
        console.error(chalk_1.default.yellow("WARNING: failed to create example from schema object:", err));
        return;
    }
};
exports.sampleRequestFromSchema = sampleRequestFromSchema;
function primitive(schema = {}) {
    let { type, format } = schema;
    if (type === undefined) {
        return;
    }
    let fn = schema.default ? () => schema.default : primitives[type].default;
    if (format !== undefined) {
        fn = primitives[type][format] || fn;
    }
    if (fn) {
        return fn(schema);
    }
    return "Unknown Type: " + schema.type;
}
function normalizeArray(arr) {
    if (Array.isArray(arr)) {
        return arr;
    }
    return [arr];
}
