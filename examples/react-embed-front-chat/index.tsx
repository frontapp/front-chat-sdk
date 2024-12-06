import {useEffect, useRef} from 'react';

/*
 * Constants.
 */

const scriptSrc = 'https://chat-assets.frontapp.com/v1/chat.bundle.js';

const chatId = '<CHAT_ID_REQUIRED>';

const iframeStyle = {
  width: '700px',
  height: '755px',
  border: 'none',
  colorScheme: 'normal'
};

/*
 * Component.
 */

export function App() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const onLoadIframe = () => {
    if (!iframeRef.current) {
      return;
    }

    const iframe = iframeRef.current;

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

  useEffect(() => {
    if (iframeRef.current) {
      onLoadIframe();
    }
  }, []);

  return (
    <div>
      <h1>Embedded Front Chat</h1>

      <iframe style={iframeStyle} ref={iframeRef} onLoad={onLoadIframe} />

      <h1>Below the Widget</h1>
      <p>You can have content above and below the embedded widget.</p>
    </div>
  );
}
