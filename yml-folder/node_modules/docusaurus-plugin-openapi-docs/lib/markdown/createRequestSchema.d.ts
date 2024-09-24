import { MediaTypeObject, SchemaObject } from "../openapi/types";
/**
 * Returns a merged representation of allOf array of schemas.
 */
export declare function mergeAllOf(allOf: SchemaObject[]): {
    mergedSchemas: any;
    required: any;
};
interface Props {
    style?: any;
    title: string;
    body: {
        content?: {
            [key: string]: MediaTypeObject;
        };
        description?: string;
        required?: string[] | boolean;
    };
}
export declare function createRequestSchema({ title, body, ...rest }: Props): string | undefined;
export {};
