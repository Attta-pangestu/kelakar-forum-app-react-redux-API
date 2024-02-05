import api from "../../utils/api"
import { receiverAuthUserActionCreator } from "../authUser/action";
import { useNavigate } from "react-router-dom";

const actionType = {
    SET_IS_PRELOAD: 'SET_IS_PRELOAD',  
    
}


function asyncPreloadProcess(){
    return async (dispatch) =>  {
         try{
            const {user} = await api.getAuthUsers();
            dispatch(receiverAuthUserActionCreator(user));
            
         }catch(err) {
            alert("Silahkan Login Dulu");
         } finally{

         }
         
    }
}

function setIsPreloadActionCreator(isPreload){
    return {
        
    }
}