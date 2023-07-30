```javascript
import {
  PROFILE_UPDATE,
  MATCHMAKING_UPDATE,
  COMMUNICATION_UPDATE,
  TRANSACTION_UPDATE,
  TASK_UPDATE,
  COMMUNITY_UPDATE,
  REPORT_UPDATE,
} from './actions';

const initialState = {
  profile: {},
  matches: [],
  messages: [],
  transactions: [],
  tasks: [],
  communityPosts: [],
  reports: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_UPDATE:
      return {
        ...state,
        profile: action.payload,
      };
    case MATCHMAKING_UPDATE:
      return {
        ...state,
        matches: action.payload,
      };
    case COMMUNICATION_UPDATE:
      return {
        ...state,
        messages: action.payload,
      };
    case TRANSACTION_UPDATE:
      return {
        ...state,
        transactions: action.payload,
      };
    case TASK_UPDATE:
      return {
        ...state,
        tasks: action.payload,
      };
    case COMMUNITY_UPDATE:
      return {
        ...state,
        communityPosts: action.payload,
      };
    case REPORT_UPDATE:
      return {
        ...state,
        reports: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
```