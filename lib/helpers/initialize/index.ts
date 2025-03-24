import {FrontChatCommandsEnum} from '../../types/front-chat-types';
import {boot} from '../boot';

/*
 * Helper.
 */

export async function initialize(chatId: string, element?: HTMLElement) {
  const frontChat = await boot(element);

  frontChat(FrontChatCommandsEnum.INIT, {chatId});
}
