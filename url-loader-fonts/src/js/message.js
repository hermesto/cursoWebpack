import renderToDOM from './render-to-dom.js'
import makeMessage  from './make-message.js'
const waitTime = new Promise((todoOk, todoMal) => {
  setTimeout(()=>{
    todoOk('han pasado 3 segundos');
  }, 3000);
});
export const firstMessage = 'test dsdsdsdsd';

export const delayedMessage = async () => {
  const message = await waitTime;
  console.log(message);

  renderToDOM(makeMessage(message));
};
