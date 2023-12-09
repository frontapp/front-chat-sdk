import {useState} from 'react';

import {useFrontChat} from '../lib/hooks/use-front-chat';
import {appStyle, buttonStyle, formStyle, inputStyle, logoStyle, reactLogoStyle} from './app.css.ts';
import reactLogo from './assets/react.svg';
import frontChatLogo from '/chatWidget.svg';

/*
 * Component.
 */

function App() {
  const [chatId, setChatId] = useState<string>('');

  const {initialize} = useFrontChat(document.body, {
    // nonce: '123'
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!initialize) {
      return;
    }

    initialize({chatId});
  };

  return (
    <div className={appStyle}>
      <div>
        <a href="https://help.front.com/en/articles/2062" target="_blank">
          <img src={frontChatLogo} className={logoStyle} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={reactLogoStyle} alt="React logo" />
        </a>
      </div>
      <h1>Front Chat + React</h1>
      <form className={formStyle} onSubmit={onSubmit}>
        <label htmlFor="chatId">chatId:</label>
        <input
          id="chatId"
          className={inputStyle}
          value={chatId}
          onChange={event => setChatId(event.target.value)}
        />
        <button className={buttonStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
