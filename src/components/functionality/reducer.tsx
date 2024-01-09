export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'MODAL_IS_ACTIVE':
      state = action.state;
      return [...state, { state: action.state }];
    case 'MODAL_IS_NOT_ACTIVE':
      state = action.state;
      return [...state, { state: action.state }];
    default:
      return state;
  };
};