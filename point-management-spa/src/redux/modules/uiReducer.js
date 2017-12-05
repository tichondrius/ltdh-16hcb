export const OPEN_DRAWER = 'ui/OPEN_DRAWER';
export const CLOSE_DRAWER = 'ui/CLOSE_DRAWER';
export const TOGGLE_DRAWER = 'ui/TOGGLE_DRAWER';
export const FLUSH_UI = 'ui/FLUSH_UI';


export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER,
});

export const openDrawer = () => ({
  type: OPEN_DRAWER
})

export const closeDrawer = () => ({
  type: TOGGLE_DRAWER
});

export const initialState = {
  isDrawerOpening: false,
};

export default function uiReducer (state = initialState,  action = {}) {
  switch(action.type) {

    case OPEN_DRAWER: 
      return {
        ...state,
        isDrawerOpening: true,
      }

    case CLOSE_DRAWER:
      return {
        ...state,
        isDrawerOpening: false,
      }

    case TOGGLE_DRAWER: 
      return {
        ...state,
        isDrawerOpening: !state.isDrawerOpening,
      }

    case FLUSH_UI: 
      return initialState;

    default: return state;
  }
}