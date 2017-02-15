import { initWithOptions } from './envconfig';

describe('TestInitWithOptions', () => {
  describe('Success', () => {
    let env;
    beforeEach(() => {
      env = process.env;
      process.env = { APP_HOST: 'app_env_host', HOST: 'env_host' };
    });

    afterEach(() => {
      process.env = env;
    });

    it('should init config with env variable with given prefix', () => {
      // given: APP_PORT env variable is set
      const cfgStructure = {
        host: undefined,
      };
      const expectedInitCfg = {
        host: 'app_env_host',
      };

      // when
      const initedCfg = initWithOptions(cfgStructure, { prefix: 'app' });

      // then
      expect(initedCfg).toMatchObject(expectedInitCfg);
    });

    it('should override default values with env variable', () => {
      // given: APP_PORT env variable is set
      const cfgStructure = {
        host: 'default_host',
      };
      const expectedInitCfg = {
        host: 'app_env_host',
      };

      // when
      const initedCfg = initWithOptions(cfgStructure, { prefix: 'app' });

      // then
      expect(initedCfg).toMatchObject(expectedInitCfg);
    });

    it('should not throw error when field is not set and allOptional is enabled', () => {
      // given
      const cfgStructure = {
        notSetField: undefined,
      };
      const expectedInitCfg = {
        notSetField: undefined,
      };

      // when
      const initedCfg = initWithOptions(cfgStructure, { prefix: 'app', allOptional: true });

      // then
      expect(initedCfg).toMatchObject(expectedInitCfg);
    });
  });

  describe('Failure', () => {
    it('should throw error when field was not initialized', () => {
      // given
      const cfgStructure = {
        host: undefined,
      };

      // when
      let gotErr;
      try {
        initWithOptions(cfgStructure, { prefix: 'app' });
      } catch (err) {
        gotErr = err;
      }

      // then
      expect(gotErr.message).toBe('Field "host" was not set');
    });
  });
});
