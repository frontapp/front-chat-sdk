import {type SyntheticEvent} from 'react';

import {iframeStyle} from './embedded-app.css.ts';

/*
 * Constants.
 */

const scriptSrc = 'https://chat-assets.frontapp.com/v1/chat.bundle.js';

const chatId = 'a661237b9f6511165e12488fc4c09b11';

/*
 * Component.
 */

function EmbeddedApp() {
  const onLoadIframe = async (event: SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = event.target as HTMLIFrameElement;

    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'text/javascript');
    scriptTag.setAttribute('src', scriptSrc);
    scriptTag.onload = () => {
      iframe.contentWindow?.FrontChat?.('init', {
        chatId,
        useDefaultLauncher: false,
        shouldShowWindowOnLaunch: true,
        shouldHideCloseButton: true,
        shouldHideExpandButton: true,
        shouldExpandOnShowWindow: true
      });
    };

    iframe.contentDocument?.body.appendChild(scriptTag);
  };

  return (
    <div>
      <h1>Embedded Front Chat</h1>

      <iframe className={iframeStyle} srcDoc="<main></main>" onLoad={onLoadIframe} />

      <h1>Below the Widget</h1>
      <p>You can have content above and below the embedded widget.</p>
    </div>
  );
}

export default EmbeddedApp;
