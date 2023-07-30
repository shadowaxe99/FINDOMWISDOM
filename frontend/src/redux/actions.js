// Action Types
export const PROFILE_UPDATE = 'PROFILE_UPDATE';
export const MATCHMAKING_UPDATE = 'MATCHMAKING_UPDATE';
export const COMMUNICATION_UPDATE = 'COMMUNICATION_UPDATE';
export const TRANSACTION_UPDATE = 'TRANSACTION_UPDATE';
export const TASK_UPDATE = 'TASK_UPDATE';
export const COMMUNITY_UPDATE = 'COMMUNITY_UPDATE';
export const REPORT_UPDATE = 'REPORT_UPDATE';

// Action Creators
export const updateProfile = (profile) => ({
  type: PROFILE_UPDATE,
  payload: profile,
});

export const updateMatchmaking = (matchmaking) => ({
  type: MATCHMAKING_UPDATE,
  payload: matchmaking,
});

export const updateCommunication = (communication) => ({
  type: COMMUNICATION_UPDATE,
  payload: communication,
});

export const updateTransaction = (transaction) => ({
  type: TRANSACTION_UPDATE,
  payload: transaction,
});

export const updateTask = (task) => ({
  type: TASK_UPDATE,
  payload: task,
});

export const updateCommunity = (community) => ({
  type: COMMUNITY_UPDATE,
  payload: community,
});

export const updateReport = (report) => ({
  type: REPORT_UPDATE,
  payload: report,
});