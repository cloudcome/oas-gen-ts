import { TypeAlias, TypeItem } from '../readers/types';
import { StrictWriterOptions, WriterOptions } from './types';
import prettier from 'prettier';

export class BaseWriter {
  static defaults: WriterOptions = {
    document: { components: [], paths: [] },
    prettier: {
      singleQuote: true,
    },
    requestPathArgName: 'path',
    requestQueryArgName: 'params',
    requestBodyArgName: 'data',
    responseTypeName: 'AxiosPromise',
  };

  options: StrictWriterOptions;
  constructor(options: WriterOptions) {
    this.options = Object.assign({}, BaseWriter.defaults, options) as StrictWriterOptions;
  }

  protected isTypeAlias(type: TypeItem): type is TypeAlias {
    return type.kind === 'alias';
  }

  protected format(text: string) {
    return prettier.format(text, {
      ...this.options.prettier,
      parser: 'typescript',
    });
  }
}
