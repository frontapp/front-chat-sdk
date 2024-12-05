import {useFrontChat} from '../../lib/hooks/use-front-chat';

/*
 * Constants.
 */

const chatId = '<CHAT_ID_REQUIRED>';

/*
 * Component.
 */

function App() {
  const {isInitialized} = useFrontChat(chatId);

  return <div>isInitialized: {isInitialized ? 'True' : 'False'}</div>;
}
