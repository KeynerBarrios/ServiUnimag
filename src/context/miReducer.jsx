import types from "./types";


const miReducer = (state = {}, action) => {
    switch(action.type){
        case types.login:
            return{
                estado:true
            }
        case types.logout:
            return{
                estado:false
            }
        default:
            return state;        
    }
}

export default miReducer