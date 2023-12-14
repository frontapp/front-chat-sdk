import {boot} from '../boot';

/*
 * Helper.
 */

export async function initialize(chatId: string, element?: HTMLElement) {
  const frontChat = await boot(element);

  frontChat('init', {chatId});
}
