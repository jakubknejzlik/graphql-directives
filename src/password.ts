import { GraphQLScalarType, ValueNode, Kind } from 'graphql';
import { sha512 } from 'js-sha512';

export const GraphQLPasswordHash = new GraphQLScalarType({
  name: 'PasswordHash',
  description: 'adsfgsdthsdh',
  serialize: (value: string) => {
    return value;
  },
  parseValue: (value: string) => {
    return sha512(value);
  },
  parseLiteral: (valueNode: ValueNode) => {
    if (valueNode.kind !== Kind.STRING) {
      throw new TypeError(`PasswordHash cannot represent non string type`);
    } else {
      return sha512(valueNode.value);
    }
  }
});
