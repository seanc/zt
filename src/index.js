'use strict';

import { green, yellow, red } from 'chalk';

class Zt {
  
  /** Log normally */
  log(str) {
    console.log(`${green('[log]')} ${str}`);
  }
  
  /** Log warning */
  warn(str) {
    console.log(`${yellow('[warn]')} ${str}`);
  }
  
  /** Log error */
  error(err) {
    if (err instanceof Error) {
      console.log(`${red(`[${err.name || 'Error'}]`)} ${yellow(err.message || 'Unexpected error')}`)
      return;
    }
    
    console.log(`${red('[error]')} ${err}`);
  }
  
}

export default new Zt();
