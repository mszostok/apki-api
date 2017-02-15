// @flow

import nodeenvconfiguration from 'node-env-configuration';
import type { Options } from './typedefs';
import { NotSetFieldValidator } from './validator';


function InitWithOptions(defaults: any, opts: Options = {}) {
  const cfg = nodeenvconfiguration({
    defaults,
    prefix: opts.prefix,
  });

  if (!opts.allOptional) {
    const validator = new NotSetFieldValidator(opts.invalidFinalTypeof);
    validator.validate(cfg);
  }

  return cfg;
}

export { InitWithOptions };
