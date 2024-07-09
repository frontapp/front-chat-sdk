import {SyntheticEvent} from 'react';

import {appStyle, logoStyle} from './app.css.ts';
import {iframeStyle} from './embedded-app.css.ts';
import frontChatLogo from '/chatWidget.svg';

/*
 * Component.
 */

const scriptSrc = 'https://chat-assets.frontapp.com/v1/chat.bundle.js';

function EmbeddedApp() {
  const onLoadIframe = async (event: SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = event.target as HTMLIFrameElement;

    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'text/javascript');
    scriptTag.setAttribute('src', scriptSrc);
    scriptTag.onload = () => {
      iframe.contentWindow?.FrontChat?.('init', {
        chatId: 'a661237b9f6511165e12488fc4c09b11',
        shouldShowWindowOnLaunch: true,
        useDefaultLauncher: false,
        shouldHideCloseButton: true
      });
    };

    iframe.contentDocument?.body.appendChild(scriptTag);
  };

  return (
    <>
      <div className={appStyle}>
        <div>
          <a href="https://help.front.com/en/articles/2062" target="_blank">
            <img src={frontChatLogo} className={logoStyle} alt="Vite logo" />
          </a>
        </div>
        <h1>Embedded Front Chat</h1>

        <iframe className={iframeStyle} srcDoc="<main></main>" onLoad={onLoadIframe} />

        <h1>Below the Widget</h1>
        <p>You can have content above and below the embedded widget.</p>
      </div>
    </>
  );
}

export default EmbeddedApp;
