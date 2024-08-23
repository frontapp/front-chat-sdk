import {createHmac} from 'crypto';
import {useEffect, useState} from 'react';

import {useFrontChatBoot} from '../../lib/hooks/use-front-chat-boot';

/*
 * Constants.
 */

const chatId = '<CHAT_ID_REQUIRED>';

// Usually this will be an email for a verified user.
const userId = '<USER_ID_REQUIRED>';

// This value is used to generate the user hash, and can be found in the Front channel settings.
const identitySecret = '<IDENTITY_SECRET_REQUIRED>';

/*
 * Component.
 */

function App() {
  const {frontChat, initialize, isInitialized} = useFrontChatBoot(document.body);

  const [isWindowVisible, setIsWindowVisible] = useState(false);

  // This is a hash generated from the userId using the identity secret.
  // Follow the instructions here to generate the user hash: https://dev.frontapp.com/docs/identify-users#computing-the-user-hash
  // NOTE: This should only ever be generated server-side, and this is just an example. Do not generate this value client-side in your application.
  const hmac = createHmac('sha256', identitySecret);
  const userHash = hmac.update(userId).digest('hex');

  // Example of using useFrontChat to initialize the chat widget when a component mounts.
  useEffect(() => {
    if (!initialize || isInitialized) {
      return;
    }

    // When initializing for a verified user, you must provide the `userId` and `userHash` options.
    initialize({chatId, userId, userHash});
  }, [isInitialized, initialize, userHash]);

  // NOTE: You can also start the widget with the chat window visible by providing the `shouldShowWindow`
  // option to the 'init' command. The below effect is just an example of waiting for the chat widget to
  // be initialized, before performing another action.
  useEffect(() => {
    if (!frontChat || !isInitialized || isWindowVisible) {
      return;
    }

    frontChat('show');
    setIsWindowVisible;
  }, [frontChat, isInitialized, isWindowVisible]);

  return <div>isInitialized: {isInitialized ? 'True' : 'False'}</div>;
}
