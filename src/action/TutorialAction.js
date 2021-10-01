import {TUTORIAL_ACTION} from "./types";
import {TutorialService} from "../service/TutorialService";


export const refreshTutorial = () => async (dispatch) => {
    try {
        const res = await TutorialService.getAll();
        dispatch({
            type: TUTORIAL_ACTION.REFRESH_TUTORIALS,
            payload:res.data
        })
        return Promise.resolve(res.data);
    }catch (e) {
        return Promise.reject(e)
    }
}

export const createTutorial = (data) => async (dispatch) => {
   try {
       const res = await TutorialService.create(data);
       dispatch({
           type: TUTORIAL_ACTION.CREATE_TUTORIAL,
           payload:res.data
       })
       return Promise.resolve(res.data);
   }catch (e) {
       return Promise.reject(e)
   }
}


