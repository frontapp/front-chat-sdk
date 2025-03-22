/*
 * Enums.
 */

export enum FrontChatCommandsEnum {
  INIT = 'init',
  SHOW = 'show',
  HIDE = 'hide',
  SHUTDOWN = 'shutdown'
}

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

export type FrontChatParams = {
  /* Required params. */
  chatId?: string;
  /* Identity params. */
  userId?: string;
  userHash?: string;
  /* Widget configuration params. */
  useDefaultLauncher?: boolean;
  shouldShowWindowOnLaunch?: boolean;
  shouldExpandOnShowWindow?: boolean;
  shouldHideCloseButton?: boolean;
  shouldHideExpandButton?: boolean;
  welcomeMessageAppearance?: 'hidden' | 'always';
  isMobileWebview?: boolean;
  /* Callbacks. */
  onInitCompleted?: () => void;
  /* Unspecified params. */
  [key: string]: unknown;
};

export interface FrontChatOptions {
  nonce?: string;
}

type UnbindHandler = () => void;

export type FrontChat = (cmdType: string, params?: FrontChatParams) => UnbindHandler | undefined;
