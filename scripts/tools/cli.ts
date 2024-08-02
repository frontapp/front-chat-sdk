// @ts-strict-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const yargs = require('yargs');

yargs
  .commandDir('cmds', {extensions: ['ts']})
  .usage('$0 <command> [options]')
  .demandCommand()
  .help()
  .wrap(null).argv;
