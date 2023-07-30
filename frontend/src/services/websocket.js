```javascript
import { store } from '../redux/store';

let socket;

export function connectWebSocket() {
  socket = new WebSocket('ws://localhost:8080');

  socket.onopen = () => {
    console.log('WebSocket is connected');
  };

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    handleIncomingMessage(message);
  };

  socket.onerror = (error) => {
    console.log(`WebSocket error: ${error}`);
  };

  socket.onclose = () => {
    console.log('WebSocket is closed');
  };
}

function handleIncomingMessage(message) {
  switch (message.type) {
    case 'PROFILE_UPDATE':
    case 'MATCHMAKING_UPDATE':
    case 'COMMUNICATION_UPDATE':
    case 'TRANSACTION_UPDATE':
    case 'TASK_UPDATE':
    case 'COMMUNITY_UPDATE':
    case 'REPORT_UPDATE':
      store.dispatch(message);
      break;
    default:
      console.log(`Unhandled message type: ${message.type}`);
  }
}

export function sendMessage(message) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  } else {
    console.log('WebSocket is not open. Unable to send message');
  }
}
```