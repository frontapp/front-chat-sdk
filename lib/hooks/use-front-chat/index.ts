import {useEffect} from 'react';

import {useFrontChatBoot} from '../use-front-chat-boot';

/*
 * Hook.
 */

export function useFrontChat(chatId: string, element?: HTMLElement) {
  const {isInitialized, initialize} = useFrontChatBoot(element);

  useEffect(() => {
    if (isInitialized || !initialize || !chatId) {
      return;
    }

    initialize({chatId});
  }, [chatId, isInitialized, initialize]);
}
