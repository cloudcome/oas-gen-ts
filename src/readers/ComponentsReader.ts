import { OpenAPIV3 } from 'openapi-types';
import { BaseReader } from './BaseReader';
import { Named } from './Named';
import { TypeAlias, TypeList, TypeOrigin, TypeUnit } from './types';

export class ComponentsReader extends BaseReader {
  parseComponents(): TypeList {
    const { components } = this.document;

    if (!components) return [];

    const { schemas } = components;

    if (!schemas) return [];

    const t = Object.entries(schemas)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([name, schema]) => {
        const typeName = this.named.nextTypeName(name, true);
        return this.isReference(schema)
          ? this.parseReference(typeName, schema, true)
          : this.parseSchema(typeName, schema.nullable === false, schema);
      });
    this.named.resolveAlias();
    return t;
  }

  protected parseReference(name: string, reference: OpenAPIV3.ReferenceObject, root = false): TypeAlias {
    return this.named.addAlias({
      kind: 'alias',
      root,
      name,
      ref: reference.$ref,
      target: '',
      origin: '',
      props: [],
    });
  }

  protected parseSchema(name: string, required: boolean, schema: OpenAPIV3.SchemaObject) {
    const { type } = schema;

    switch (type) {
      case 'boolean':
      case 'string':
      case 'number':
      case 'integer': {
        const tsType = type === 'integer' ? 'number' : type;
        return this.parseSchemaPrimitive(name, required, tsType, schema);
      }

      case 'object':
        return this.parseSchemaObject(name, required, schema);

      case 'array':
        return this.parseSchemaArray(name, required, schema);

      default:
        return this.parseSchemaNever(name, true, schema);
    }
  }

  protected parseSchemaPrimitive(
    name: string,
    required: boolean,
    type: TypeUnit,
    schema: OpenAPIV3.SchemaObject
  ): TypeOrigin {
    return {
      ...this.inheritProps(schema),
      name,
      type,
      required,
      kind: 'origin',
    };
  }

  protected parseSchemaObject(name: string, required: boolean, schema: OpenAPIV3.SchemaObject): TypeOrigin {
    const properties = Object.entries(schema.properties || {}).sort((a, b) => a[0].localeCompare(b[0]));
    return {
      ...this.inheritProps(schema),
      name,
      required,
      kind: 'origin',
      type: 'object',
      children: properties.map(([propName, propSchema]) => {
        return this.isReference(propSchema)
          ? this.parseReference(propName, propSchema)
          : this.parseSchema(propName, schema.required?.includes(propName) || false, propSchema);
      }),
    };
  }

  protected parseSchemaArray(name: string, required: boolean, schema: OpenAPIV3.ArraySchemaObject): TypeOrigin {
    return {
      ...this.inheritProps(schema),
      name,
      required,
      kind: 'origin',
      type: 'array',
      children: [schema.items].map((schema) => {
        return this.isReference(schema)
          ? this.parseReference(`${name}[]`, schema)
          : this.parseSchema(`${name}[]`, schema.nullable === false, schema);
      }),
    };
  }

  protected parseSchemaNever(name: string, required: boolean, schema: OpenAPIV3.SchemaObject): TypeOrigin {
    return {
      ...this.inheritProps(schema),
      name,
      required,
      kind: 'origin',
      type: 'never',
    };
  }

  private inheritProps(schema: OpenAPIV3.BaseSchemaObject) {
    return {
      default: schema.default,
      description: schema.description,
      example: schema.example,
      deprecated: schema.deprecated,
      title: schema.title,
      format: schema.format,
      enum: schema.enum,
    };
  }
}
