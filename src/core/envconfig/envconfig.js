// @flow

import nodeenvconfiguration from 'node-env-configuration';
import type { Options } from './typedefs';
import { CfgValidator } from './validator';


function InitWithOptions(defaults: any, opts: Options = {}) {
  const cfg = nodeenvconfiguration({
    defaults,
    prefix: opts.prefix,
  });

  if (!opts.allOptional) {
    const cfgValidator = new CfgValidator();
    cfgValidator.validate(cfg);
  }

  return cfg;
}

export { InitWithOptions };
