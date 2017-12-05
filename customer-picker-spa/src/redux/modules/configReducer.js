export const APP_PERSISTED = 'config/PERSISTED';

export const persistedDone = () => ({
  type: APP_PERSISTED,
})

const initialState = {
  isPersisted: false,
}


export default function config (state = initialState, action) {
  switch(action.type) {
    case APP_PERSISTED: 
      return {
        ...state,
        isPersisted: true,
      };
    default: return state;
  }
}