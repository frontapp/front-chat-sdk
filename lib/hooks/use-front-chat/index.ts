import { useEffect, useRef, useState } from "react";
import { boot } from "../../helpers/front-chat";
import { FrontChat, FrontChatOptions, FrontChatParams } from "../../types";

/*
 * Types.
 */

interface UseFrontChatReturn {
  frontChat: FrontChat | undefined;
  isInitialized: boolean;
  initialize?: (params?: FrontChatParams) => void;
}

enum FrontChatStatusesEnum {
  IDLE = "idle",
  READY = "ready",
  INITIALIZED = "initialized",
}

/*
 * Hooks.
 */

export function useFrontChat(
  element?: HTMLElement,
  options?: FrontChatOptions
): UseFrontChatReturn {
  const scriptTagAppended = useRef(false);

  const [status, setStatus] = useState<FrontChatStatusesEnum>(
    FrontChatStatusesEnum.IDLE
  );

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
    return { frontChat: undefined, isInitialized: false };
  }

  const frontChat: FrontChat = (cmdType, params) => {
    if (!window.FrontChat) {
      console.error(
        "[front-chat-sdk] Have not finished setting up window.FrontChat"
      );
      return;
    }

    if (cmdType === "init") {
      const onInitCompleted = () => {
        setStatus(FrontChatStatusesEnum.INITIALIZED);
      };

      return window.FrontChat(cmdType, { ...params, onInitCompleted });
    }

    if (cmdType === "shutdown") {
      setStatus(FrontChatStatusesEnum.READY);
    }

    return window.FrontChat(cmdType, params);
  };

  const initialize = (params?: FrontChatParams) => {
    if (status === FrontChatStatusesEnum.INITIALIZED) {
      return;
    }

    frontChat("init", params);
  };

  return {
    frontChat,
    isInitialized: status === FrontChatStatusesEnum.INITIALIZED,
    initialize,
  };
}
