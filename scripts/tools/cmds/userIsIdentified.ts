/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {userIsIdentified} = require('../lib/identity');

module.exports.command = 'identity:user-is-identified <secret> <userHash> <userId>';

module.exports.describe =
  "Return a boolean. It's true if the <userHash> verify the <userId> with the <secret>.";

module.exports.builder = (yargs: any) =>
  yargs
    .usage('Usage: npm run cmd:tool identity:user-is-identified <secret> <userHash> <userId>')
    .positional('secret', {
      describe: 'The secret to verify the identification',
      type: 'string'
    })
    .positional('userHash', {
      describe: 'The userHash (hex) to verify the identification',
      type: 'string'
    })
    .positional('userId', {
      describe: 'The userId to verify the identification',
      type: 'string'
    });

module.exports.handler = (argv: any) => {
  console.log(userIsIdentified(argv.secret, argv.userHash, argv.userId));
};
