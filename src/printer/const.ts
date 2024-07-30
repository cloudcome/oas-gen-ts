// @ref https://github.com/microsoft/TypeScript/issues/2536
export const KEYWORD_NAMES = [
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
export const AXIOS_QUEST_CONFIG_TYPE_NAME = 'AxiosRequestConfig';
export const AXIOS_PROMISE_TYPE_NAME = 'AxiosPromise';
export const INTERNAL_NAMES = [
    // native
    'Blob',
    'Array',
    'Object',
    // printer helpers
    'OneOf',
    'AllOf',
    'AnyOf',
    'AnyObject',
    'AnyArray',
    'URL',
    'resolveURL',
    // config
    AXIOS_IMPORT_NAME,
    AXIOS_QUEST_CONFIG_TYPE_NAME,
    AXIOS_PROMISE_TYPE_NAME,
];
