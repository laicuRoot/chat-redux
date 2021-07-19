import { CHANNEL_SELECTED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case action.type === CHANNEL_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
