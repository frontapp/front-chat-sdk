/*
 * Global types.
 */

declare global {
  interface Window {
    FrontChat: FrontChat | undefined;
  }
}

/*
 * Types.
 */

export enum FrontChatCommand {
  Init = 'init',
  Show = 'show',
  Hide = 'hide',
  Shutdown = 'shutdown'
}

export type FrontChatParams = {
  chatId?: string;
  userId?: string;
  userHash?: string;
  shouldShowWindowOnLaunch?: boolean;
  shouldExpandOnShowWindow?: boolean;
  shouldHideCloseButton?: boolean;
  shouldHideExpandButton?: boolean;
  welcomeMessageAppearance?: 'hidden' | 'always';
  isMobileWebview?: boolean;
  useDefaultLauncher?: boolean;
  onInitCompleted?: () => void;
  // Allow any other key with a value of string, boolean, object, or undefined
  [key: string]: string | boolean | object | undefined;
};

export interface FrontChatOptions {
  nonce?: string;
}

type UnbindHandler = () => void;

export type FrontChat = (cmdType: FrontChatCmdType, params?: FrontChatParams) => UnbindHandler | undefined;
