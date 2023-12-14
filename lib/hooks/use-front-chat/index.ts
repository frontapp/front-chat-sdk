import {useEffect} from 'react';

import {type UseFrontChatBootReturn, useFrontChatBoot} from '../use-front-chat-boot';

/*
 * Hook.
 */

export function useFrontChat(chatId: string, element?: HTMLElement): UseFrontChatBootReturn {
  const {frontChat, isInitialized, initialize} = useFrontChatBoot(element);

  useEffect(() => {
    if (isInitialized || !initialize || !chatId) {
      return;
    }

    initialize({chatId});
  }, [chatId, isInitialized, initialize]);

  return {frontChat, isInitialized, initialize};
}
