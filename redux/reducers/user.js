export default(state= {}, action)=>{

  switch(action.type){
    case 'LOG_IN':
      return action.user;
    default:
      return state;
  }

  return state;
}

/*
action structure

{
  type: "Login",
  user: Frebase user
}

*/