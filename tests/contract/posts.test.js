const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const client = new Lokka({
  transport: new Transport('http://localhost:9778/graphql'),
});

describe('Queries', () => {

  describe('allPosts', () => {

    // given
    const queries = {
      'without params': `
        {
          allPosts {
            id
            title
            author
            content
          }
        }
      `,
      'with limit': `
        {
          allPosts(limit: 2) {
            id
          }
        }
      `,
    };

    Object.entries(queries).map(async ([name, query]) => {
      it(name, async () => {
        // when
        const result = await client.query(query);
        // then
        expect(result).toMatchSnapshot();
      });
    });

  });

});
