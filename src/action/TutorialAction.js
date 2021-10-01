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
           payload: res.data
       })
       return Promise.resolve(res.data);
   }catch (e) {
       return Promise.reject(e)
   }
}

export const editTutorial = (data, id) => async (dispatch) => {
    try {
        const res = await TutorialService.edit(data, id);
        dispatch({
            type: TUTORIAL_ACTION.UPDATE_TUTORIAL,
            payload: data
        })
        return Promise.resolve(res.data);
    }catch (e) {
        return Promise.reject(e)
    }
}

export const deleteTutorial = (id) => async (dispatch) => {
    try {
        const res = await TutorialService.remove(id);
        dispatch({
            type: TUTORIAL_ACTION.DELETE_TUTORIAL,
            payload: {id}
        })
        return Promise.resolve(res.data);
    }catch (e) {
        return Promise.reject(e)
    }
}

export const deleteAllTutorial = () => async (dispatch) => {
    try {
        const res = await TutorialService.removeAll();
        dispatch({
            type: TUTORIAL_ACTION.DELETE_ALL_TUTORIALS,
        })
        return Promise.resolve(res.data);
    }catch (e) {
        return Promise.reject(e)
    }
}



