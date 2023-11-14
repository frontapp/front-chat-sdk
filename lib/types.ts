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

export interface FrontChatOptions {
  nonce?: string;
}

type UnbindHandler = () => void;

export type FrontChatParams = Record<string, string | boolean | object>;
export type FrontChat = (
  cmdType: string,
  params?: FrontChatParams
) => UnbindHandler | undefined;
