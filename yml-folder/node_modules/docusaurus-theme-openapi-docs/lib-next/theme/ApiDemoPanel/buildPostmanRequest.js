/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */
import sdk from "@paloaltonetworks/postman-collection";
import cloneDeep from "lodash/cloneDeep";
import cryptoJsMin from "./crypto-js.min";

function setQueryParams(postman, queryParams) {
  postman.url.query.clear();
  const qp = queryParams
    .map((param) => {
      if (!param.value) {
        return undefined;
      }

      if (Array.isArray(param.value)) {
        return new sdk.QueryParam({
          key: param.name,
          value: param.value.join(","),
        });
      } // Parameter allows empty value: "/hello?extended"

      if (param.allowEmptyValue) {
        if (param.value === "true") {
          return new sdk.QueryParam({
            key: param.name,
            value: null,
          });
        }

        return undefined;
      }

      return new sdk.QueryParam({
        key: param.name,
        value: param.value,
      });
    })
    .filter((item) => item !== undefined);

  if (qp.length > 0) {
    postman.addQueryParams(qp);
  }
}

// function setPathParams(postman, queryParams) {
//   const source = queryParams.map((param) => {
//     return new sdk.Variable({
//       key: param.name,
//       value: param.value || `:${param.name}`,
//     });
//   });
//   postman.url.variables.assimilate(source, false);
// }

function buildCookie(cookieParams) {
  const cookies = cookieParams
    .map((param) => {
      if (param.value && !Array.isArray(param.value)) {
        return new sdk.Cookie({
          // TODO: Is this right?
          path: "",
          domain: "",
          key: param.name,
          value: param.value,
        });
      }

      return undefined;
    })
    .filter((item) => item !== undefined);
  const list = new sdk.CookieList(null, cookies);
  return list.toString();
}

function setHeaders(postman, contentType, accept, cookie, headerParams, body, other) {
  postman.headers.clear();
  /**
   * add bybit private request encryption logic
   * @type {string}
   */
  if (headerParams.length != 0) {
    var apiKey = "CFEJUGQEQPPHGOHGHM";
    if (headerParams[0].hasOwnProperty("value")) {
      apiKey = headerParams[0]["value"];
    }

    var secret = "VDFZSSPUTKRJMXAVMJXBHEXIPZNZJIZUBVRQ";
    if (headerParams[1].hasOwnProperty("value")) {
      secret = headerParams[1]["value"];
    }

    var ts = Date.now().toString();
    var recvWindow = "20000";
    var queryString = "";
    var sign = "";

    if (postman["method"] == "GET") {
      queryString = ts + apiKey + recvWindow + postman.url.query;
      sign = cryptoJsMin.HmacSHA256(queryString, secret).toString();
    } else {
      postman.body.raw = body.content?.value ?? ""
      queryString = ts + apiKey + recvWindow + postman.body.raw;
      sign = cryptoJsMin.HmacSHA256(queryString, secret).toString();
    }

    postman.addHeader({
      key: "X-BAPI-API-KEY",
      value: apiKey,
    });
    postman.addHeader({
      key: "X-BAPI-TIMESTAMP",
      value: ts,
    });
    postman.addHeader({
      key: "X-BAPI-RECV-WINDOW",
      value: recvWindow,
    });
    postman.addHeader({
      key: "X-BAPI-SIGN",
      value: sign,
    });
  }

} // TODO: this is all a bit hacky

function setBody(clonedPostman, body) {
  if (clonedPostman.body === undefined) {
    return;
  }

  if (body.type === "empty") {
    clonedPostman.body = undefined;
    return;
  }

  if (body.type === "raw" && body.content?.type === "file") {
    // treat it like file.
    clonedPostman.body.mode = "file";
    clonedPostman.body.file = {
      src: body.content.value.src,
    };
    return;
  }

  switch (clonedPostman.body.mode) {
    case "raw": {
      // check file even though it should already be set from above
      if (body.type !== "raw" || body.content?.type === "file") {
        clonedPostman.body = undefined;
        return;
      }

      clonedPostman.body.raw = body.content?.value ?? "";
      return;
    }

    case "formdata": {
      clonedPostman.body.formdata?.clear();

      if (body.type !== "form") {
        // treat it like raw.
        clonedPostman.body.mode = "raw";
        clonedPostman.body.raw = `${body.content?.value}`;
        return;
      }

      const params = Object.entries(body.content)
        .filter((entry) => !!entry[1])
        .map(([key, content]) => {
          if (content.type === "file") {
            return new sdk.FormParam({
              key: key,
              ...content,
            });
          }

          return new sdk.FormParam({
            key: key,
            value: content.value,
          });
        });
      clonedPostman.body.formdata?.assimilate(params, false);
      return;
    }

    case "urlencoded": {
      clonedPostman.body.urlencoded?.clear();

      if (body.type !== "form") {
        // treat it like raw.
        clonedPostman.body.mode = "raw";
        clonedPostman.body.raw = `${body.content?.value}`;
        return;
      }

      const params = Object.entries(body.content)
        .filter((entry) => !!entry[1])
        .map(([key, content]) => {
          if (content.type !== "file" && content.value) {
            return new sdk.QueryParam({
              key: key,
              value: content.value,
            });
          }

          return undefined;
        })
        .filter((item) => item !== undefined);
      clonedPostman.body.urlencoded?.assimilate(params, false);
      return;
    }

    default:
      return;
  }
} // TODO: finish these types

function buildPostmanRequest(
  postman,
  {
    queryParams,
    pathParams,
    cookieParams,
    contentType,
    accept,
    headerParams,
    body,
    server,
    auth,
  }
) {
  const clonedPostman = cloneDeep(postman);
  clonedPostman.url.protocol = undefined;
  clonedPostman.url.host = [window.location.origin];

  if (server) {
    let url = server.url.replace(/\/$/, "");
    const variables = server.variables;

    if (variables) {
      Object.keys(variables).forEach((variable) => {
        url = url.replace(`{${variable}}`, variables[variable].default);
      });
    }

    clonedPostman.url.host = [url];
  }

  setQueryParams(clonedPostman, queryParams);
  // setPathParams(clonedPostman, pathParams);
  const cookie = buildCookie(cookieParams);
  let otherHeaders = [];
  let selectedAuth = [];

  if (auth.selected !== undefined) {
    selectedAuth = auth.options[auth.selected];
  }

  // for (const a of selectedAuth) {
  //   // Bearer Auth
  //   if (a.type === "http" && a.scheme === "bearer") {
  //     const { token } = auth.data[a.key];

  //     if (token === undefined) {
  //       otherHeaders.push({
  //         key: "Authorization",
  //         value: "Bearer <TOKEN>",
  //       });
  //       continue;
  //     }

  //     otherHeaders.push({
  //       key: "Authorization",
  //       value: `Bearer ${token}`,
  //     });
  //     continue;
  //   }

  //   if (a.type === "oauth2") {
  //     let token;

  //     if (auth.data[a.key]) {
  //       token = auth.data[a.key].token;
  //     }

  //     if (token === undefined) {
  //       otherHeaders.push({
  //         key: "Authorization",
  //         value: "Bearer <TOKEN>",
  //       });
  //       continue;
  //     }

  //     otherHeaders.push({
  //       key: "Authorization",
  //       value: `Bearer ${token}`,
  //     });
  //     continue;
  //   } // Basic Auth

  //   if (a.type === "http" && a.scheme === "basic") {
  //     const { username, password } = auth.data[a.key];

  //     if (username === undefined || password === undefined) {
  //       continue;
  //     }

  //     otherHeaders.push({
  //       key: "Authorization",
  //       value: `Basic ${window.btoa(`${username}:${password}`)}`,
  //     });
  //     continue;
  //   } // API Key

  //   if (a.type === "apiKey" && a.in === "header") {
  //     const { apiKey } = auth.data[a.key];

  //     if (apiKey === undefined) {
  //       otherHeaders.push({
  //         key: a.name,
  //         value: "<API_KEY_VALUE>",
  //       });
  //       continue;
  //     }

  //     otherHeaders.push({
  //       key: a.name,
  //       value: apiKey,
  //     });
  //     continue;
  //   }
  // }

  setHeaders(
    clonedPostman,
    contentType,
    accept,
    cookie,
    headerParams,
    body,
    otherHeaders
  );
  setBody(clonedPostman, body);
  return clonedPostman;
}

export default buildPostmanRequest;
