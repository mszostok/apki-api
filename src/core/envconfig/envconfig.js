// @flow

import nodeenvconfiguration from 'node-env-configuration';
import type { Options } from './typedefs';
import * as validator from './validator';

/**
 * initWithOptions returns given defaults object initialized with environment variables.
 *
 * @throws {ValidatorError} when allOptional is false and after initialization
 * object with environment variables the object still contains
 * fields which are undefined or null.
 */
function initWithOptions(defaults: any, opts: Options): any {
  const cfg = nodeenvconfiguration({
    defaults,
    prefix: opts.prefix,
  });

  if (!opts.allOptional) {
    validator.validateNotSetField(cfg);
  }

  return cfg;
}

export { initWithOptions };
