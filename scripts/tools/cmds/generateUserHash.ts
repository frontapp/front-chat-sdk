/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {generateUserHash} = require('../lib/identity');

module.exports.command = 'identity:generate-user-hash <secret> <userId>';

module.exports.describe = 'Return the userHash (hex) generated from <secret> and <userId>.';

module.exports.builder = (yargs: any) =>
  yargs
    .usage('Usage: npm run cmd:tool identity:generate-user-hash <secret> <userId>')
    .positional('secret', {
      describe: 'The secret to generate the userHash',
      type: 'string'
    })
    .positional('userId', {
      describe: 'the userId to generate the userHash',
      type: 'string'
    });

module.exports.handler = (argv: any) => {
  console.log(generateUserHash(argv.secret, argv.userId));
};
