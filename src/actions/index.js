// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';

export function setMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function postMessage(channel, author, content) {
  const body = { author: author, content: content };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: MESSAGE_POSTED,
    payload: promise
  };
}

export function setChannel(channel) {
  return {
    type: CHANNEL_SELECTED,
    payload: channel
  };
}
