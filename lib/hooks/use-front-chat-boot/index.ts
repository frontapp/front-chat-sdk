import {useEffect, useRef, useState} from 'react';

import {boot} from '../../helpers/boot';
import {
  type FrontChat,
  FrontChatCmdType,
  type FrontChatOptions,
  type FrontChatParams
} from '../../types/front-chat-types';

/*
 * Types.
 */

type Initialize = (params?: FrontChatParams) => void;

export interface UseFrontChatBootReturn {
  frontChat: FrontChat | undefined;
  isInitialized: boolean;
  initialize: Initialize | undefined;
}

enum FrontChatStatusesEnum {
  IDLE = 'idle',
  READY = 'ready',
  INITIALIZED = 'initialized'
}

/*
 * Hook.
 */

export function useFrontChatBoot(element?: HTMLElement, options?: FrontChatOptions): UseFrontChatBootReturn {
  const scriptTagAppended = useRef(false);

  const [status, setStatus] = useState<FrontChatStatusesEnum>(FrontChatStatusesEnum.IDLE);

  useEffect(() => {
    (async () => {
      if (scriptTagAppended.current) {
        return;
      }
      scriptTagAppended.current = true;

      await boot(element, options);

      setStatus(FrontChatStatusesEnum.READY);
    })().catch(console.error);
  }, [element, options]);

  if (status === FrontChatStatusesEnum.IDLE) {
    return {frontChat: undefined, isInitialized: false, initialize: undefined};
  }

  const frontChat: FrontChat = (cmdType, params) => {
    if (!window.FrontChat) {
      console.error('[front-chat-sdk] Have not finished setting up window.FrontChat');
      return;
    }

    if (cmdType === FrontChatCmdType.Init) {
      const onInitCompleted = () => {
        setStatus(FrontChatStatusesEnum.INITIALIZED);
      };

      return window.FrontChat(cmdType, {...params, onInitCompleted});
    }

    if (cmdType === FrontChatCmdType.Shutdown) {
      setStatus(FrontChatStatusesEnum.READY);
    }

    return window.FrontChat(cmdType, params);
  };

  const initialize = (params?: FrontChatParams) => {
    if (status === FrontChatStatusesEnum.INITIALIZED) {
      return;
    }

    frontChat(FrontChatCmdType.Init, params);
  };

  return {
    frontChat,
    isInitialized: status === FrontChatStatusesEnum.INITIALIZED,
    initialize
  };
}
