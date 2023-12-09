import {useEffect, useState} from 'react';

import {useFrontChat} from '../../lib/hooks/use-front-chat';

/*
 * Constants.
 */

const chatId = '<CHAT_ID_REQUIRED>';

/*
 * Component.
 */

function App() {
  const {frontChat, initialize, isInitialized} = useFrontChat(document.body);

  const [isWindowVisible, setIsWindowVisible] = useState(false);

  // Example of using useFrontChat to initialize the chat widget when a component mounts.
  useEffect(() => {
    if (!initialize || isInitialized) {
      return;
    }

    initialize({chatId});
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
