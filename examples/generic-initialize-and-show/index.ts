import {boot} from '../../lib/helpers/boot';

/*
 * Constants.
 */

const chatId = '<CHAT_ID_REQUIRED>';

/*
 * Boot.
 */

// Example of using the boot helper to initialize the chat widget for any kind of web page.
boot(document.body)
  .then(frontChat => {
    // NOTE: You can also start the widget with the chat window visible by providing the `shouldShowWindow`
    // option to the 'init' command. The below callback is just an example of waiting for the chat widget to
    // be initialized, before performing another action.
    const onInitCompleted = () => {
      frontChat('show');
    };

    frontChat('init', {chatId, onInitCompleted});
  })
  .catch(console.error);
