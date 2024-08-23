import {useEffect, useState} from 'react';

import {useFrontChatBoot} from '../../lib/hooks/use-front-chat-boot';

/*
 * Constants.
 */

const chatId = '<CHAT_ID_REQUIRED>';

// Usually this will be an email for a verified user.
const userId = '<USER_ID_REQUIRED>';

// This is a hash generated from the userId using the identity secret.
// Follow the instructions here to generate the user hash: https://dev.frontapp.com/docs/identify-users#computing-the-user-hash
// NOTE: This should only ever be generated server-side. Do not generate this value client-side.
const userHash = '<USER_HASH_REQUIRED>';

/*
 * Component.
 */

function App() {
  const {frontChat, initialize, isInitialized} = useFrontChatBoot(document.body);

  const [isWindowVisible, setIsWindowVisible] = useState(false);

  // Example of using useFrontChat to initialize the chat widget when a component mounts.
  useEffect(() => {
    if (!initialize || isInitialized) {
      return;
    }

    // When initializing for a verified user, you must provide the `userId` and `userHash` options.
    initialize({chatId, userId, userHash});
  }, [isInitialized, initialize]);

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
