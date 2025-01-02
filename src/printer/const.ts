// @ref https://github.com/microsoft/TypeScript/issues/2536
export const KEYWORD_VARS = [
  // 保留字
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'new',
  'null',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  // 严格保留字
  'as',
  'implements',
  'interface',
  'let',
  'package',
  'private',
  'protected',
  'public',
  'static',
  'yield',
  'namespace',
  'async',
  'await',
  // 上下文关键字
  'any',
  'boolean',
  'constructor',
  'declare',
  'get',
  'module',
  'require',
  'number',
  'set',
  'string',
  'symbol',
  'type',
  'from',
  'of',
];

export const AXIOS_IMPORT_NAME = 'axios';
export const AXIOS_IMPORT_FILE = 'axios';
export const AXIOS_TYPE_IMPORT_FILE = 'axios';
export const AXIOS_QUEST_CONFIG_TYPE_NAME = 'AxiosRequestConfig';
export const AXIOS_PROMISE_TYPE_NAME = 'AxiosPromise';
export const INTERNAL_VARS = [
  // config
  AXIOS_IMPORT_NAME,
];
export const INTERNAL_TYPES = [
  // native
  'Blob',
  'Array',
  'Object',
  // typeScript
  'string',
  'number',
  'boolean',
  'any',
  'unknown',
  'void',
  'never',
  'null',
  'undefined',
  'object',
  'symbol',
  'bigint',
  'Record',
  'NonNullable',
  // printer helpers
  'OneOf',
  'AllOf',
  'AnyOf',
  'UnknownObject',
  'UnknownArray',
  'DeepGet',
  // config
  AXIOS_QUEST_CONFIG_TYPE_NAME,
  AXIOS_PROMISE_TYPE_NAME,
];
