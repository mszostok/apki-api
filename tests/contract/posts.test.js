const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const client = new Lokka({
  transport: new Transport('http://localhost:9778/graphql'),
});

describe('Query', () => {
  describe('allPosts', () => {
    it('no variables', async () => {
      const result = await client.query(`
        {
          allPosts {
            id
            author
            title
            content
          }
        }
      `);
      expect(result).toMatchSnapshot();
    });
    describe('with variables', () => {
      it('limit', async () => {
        const result = await client.query(`
          {
            allPosts(limit: 2) {
              id
              author
              title
              content
            }
          }
        `);
        expect(result).toMatchSnapshot();
      });
    });
  });
});
