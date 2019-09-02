// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/TUTORIAL_DATABASE'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
