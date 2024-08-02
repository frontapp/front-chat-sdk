import {createHmac} from 'crypto';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {isEqual} = require('lodash');

const hmac = (secret: string) => createHmac('sha256', secret);

const generateUserHashHelper = (module.exports.generateUserHash = (secret: string, userId: string) =>
  hmac(secret).update(userId).digest('hex'));

module.exports.userIsIdentified = (secret: string, userHash: string, userId: string) =>
  isEqual(generateUserHashHelper(secret, userId), userHash);
