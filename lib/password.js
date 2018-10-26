"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const js_sha512_1 = require("js-sha512");
exports.GraphQLPasswordHash = new graphql_1.GraphQLScalarType({
    name: 'PasswordHash',
    description: 'adsfgsdthsdh',
    serialize: (value) => {
        return value;
    },
    parseValue: (value) => {
        return js_sha512_1.sha512(value);
    },
    parseLiteral: (valueNode) => {
        if (valueNode.kind !== graphql_1.Kind.STRING) {
            throw new TypeError(`PasswordHash cannot represent non string type`);
        }
        else {
            return js_sha512_1.sha512(valueNode.value);
        }
    }
});
//# sourceMappingURL=password.js.map