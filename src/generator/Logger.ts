/* eslint-disable no-console */
import type { GeneratorEmits } from './types';
import path from 'node:path';
import chalk from 'chalk';

export class Logger {
  pipeStartEvent(...[payload]: GeneratorEmits['start']) {
    console.log(chalk.greenBright('▶'), `即将处理 ${payload.count} 个 openAPI 文档`);
  }

  pipeProcessEvent(...[payload]: GeneratorEmits['process']) {
    const width = payload.count.toString().length;
    const step = (payload.index + 1).toString().padStart(width, '0');

    console.log(
      chalk.cyanBright('▷'),
      chalk.yellowBright(`${step}/${payload.count}`),
      payload.module,
      payload.stage,
      payload.stage === 'generated' ? path.relative(payload.options.cwd, payload.file) : '',
    );
  }

  pipeEndEvent(...[payload]: GeneratorEmits['end']) {
    console.log(chalk.greenBright('■'), '处理完成');
  }

  pipeErrorEvent(...[err]: GeneratorEmits['error']) {
    console.log(chalk.redBright('●'), '处理失败');
    console.log(chalk.redBright(err.message));
  }

  pipeConfigError(err: Error) {
    console.log(chalk.redBright('○'), '配置错误');
    console.log(chalk.redBright(err.message));
  }
}
