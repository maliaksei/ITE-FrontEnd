const reducers = (state = {}, action) => {

  switch (action.type) {
    case 'ACTION1':
      return {action: 1};
    case 'ACTION2':
      return {action: 2};
    case 'ACTION3':
      return{action:3};
    default:
      return state
  }

};

export default reducers;
