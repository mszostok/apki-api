import { validateNotSetField } from './validator';

describe('TestValidateNotSetField', () => {
  describe('Success', () => {
    it("should not throw error when given object doesn't contains undefined or null fields", () => {
      // given
      const allFieldsAreSet = {
        stringField: 'sth',
        numberField: 123,
        embedded: {
          first: '1',
          second: '2',
        },
      };

      // when
      validateNotSetField(allFieldsAreSet);

      // then no error is thrown
    });
  });

  describe('Failure', () => {
    it('should throw error when undefined or null object was passed as argument', () => {
      // given
      const testCases = {
        'test with null': null,
        'test with undefined': undefined,
      };

      for (const k in testCases) {
        try {
          // when
          validateNotSetField(testCases[k]);
        } catch (err) {
          // then
          expect(err.message).toBe('Given object is undefined');
        }
      }
    });

    it('should throw error when given object contains undefined or null fields', () => {
      // given
      const testCases = [
        // Undefined field on first level
        {
          expectErrMsg: 'Field "stringField" was not set',
          testObj: {
            stringField: undefined,
            numberField: 1,
            embedded: {
              second: '2',
            },
          },
        },

        // Null field on first level
        {
          expectErrMsg: 'Field "numberField" was not set',
          testObj: {
            stringField: 'sth',
            numberField: null,
            embedded: {
              second: '2',
            },
          },
        },

        // Undefined field on embedded object
        {
          expectErrMsg: 'Field "second" was not set',
          testObj: {
            stringField: 'sth',
            embedded: {
              second: undefined,
            },
          },
        },
      ];

      testCases.forEach((testCase) => {
        try {
          // when
          validateNotSetField(testCase.testObj);
        } catch (err) {
          // then
          expect(err.message).toBe(testCase.expectErrMsg);
        }
      });
    });
  });
});
