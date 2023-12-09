import {useEffect, useState} from 'react';

import {useFrontChat} from '../lib/hooks/use-front-chat';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const testChatId = 'a267a8636f88301796acbea23eb2c84f';

function App() {
  const [count, setCount] = useState(0);

  const {initialize} = useFrontChat(document.body, {
    nonce: '123'
  });

  useEffect(() => {
    if (!initialize) {
      return;
    }

    initialize({chatId: testChatId});
  }, [initialize]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;