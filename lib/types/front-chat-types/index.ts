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

export enum FrontChatCmdType {
  Init = 'init',
  Show = 'show',
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
};

export interface FrontChatOptions {
  nonce?: string;
}

type UnbindHandler = () => void;

export type FrontChat = (cmdType: FrontChatCmdType, params?: FrontChatParams) => UnbindHandler | undefined;
