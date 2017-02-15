// @flow

function ValidatorError(message?: string) {
  this.name = 'CfgValidatorError';
  this.message = message;
}
ValidatorError.prototype = Object.create(Error.prototype);

// BE CAREFUL when using this method, because it will check given
// object by recursive calling for each nested field, so for example
// when object will have a pointer to it self set as field, then
// it will looped on checking it and then stack overflow exception will occur.
function validateNotSetField(cfg: any) {
  if (!cfg) {
    throw new ValidatorError('Given object is undefined');
  }
  Object.keys(cfg).forEach((property) => {
    if (Object.prototype.hasOwnProperty.call(cfg, property)) {
      if (cfg[property] && typeof cfg[property] === 'object') {
        validateNotSetField(cfg[property]);
      }

      if (cfg[property] == null || typeof cfg[property] === 'undefined') {
        throw new ValidatorError(`Field "${property}" was not set`);
      }
    }
  });
}

export {
    validateNotSetField,
    ValidatorError,
};
