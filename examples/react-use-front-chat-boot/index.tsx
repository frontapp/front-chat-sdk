import {useEffect, useState} from 'react';

import {useFrontChatBoot} from '../../lib/hooks/use-front-chat-boot';
import {FrontChatCmdType} from '../../lib/types/front-chat-types';

/*
 * Constants.
 */

const chatId = '<CHAT_ID_REQUIRED>';

/*
 * Component.
 */

export function App() {
  const {frontChat, initialize, isInitialized} = useFrontChatBoot(document.body);

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

    frontChat(FrontChatCmdType.Show);
    setIsWindowVisible;
  }, [frontChat, isInitialized, isWindowVisible]);

  return <div>isInitialized: {isInitialized}</div>;
}
