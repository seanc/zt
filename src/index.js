'use strict';

import chalk from 'chalk';

class Zt {
  
  /** Log normally */
  log(str) {
    console.log(chalk.green('[log] ') + str);
  }
  
  /** Log warning */
  warn(str) {
    console.log(chalk.yellow('[warn] ') + str);
  }
  
  /** Log error */
  error(err) {
    console.log(chalk.red('[error] ') + err);
  }
  
}

export default new Zt();