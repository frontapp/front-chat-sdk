import { FrontChat, FrontChatOptions } from "../../types";

/*
 * Constants.
 */

const scriptSrc = "https://chat-assets.frontapp.com/v1/chat.bundle.js";

/*
 * Helpers.
 */

export async function boot(
  element?: HTMLElement,
  options?: FrontChatOptions
): Promise<FrontChat> {
  const scriptTag = document.createElement("script");
  scriptTag.setAttribute("type", "text/javascript");
  scriptTag.setAttribute("src", scriptSrc);

  if (options?.nonce) {
    scriptTag.setAttribute("nonce", options.nonce);
  }

  const scriptContainer = element ?? document.body;

  const loadScriptPromise = new Promise<FrontChat>((resolve) => {
    scriptTag.onload = () => {
      if (!window.FrontChat) {
        throw new Error("[FrontChat] Could not set up window.FrontChat");
      }

      resolve(window.FrontChat);
    };
  });

  scriptContainer.appendChild(scriptTag);

  return loadScriptPromise;
}
