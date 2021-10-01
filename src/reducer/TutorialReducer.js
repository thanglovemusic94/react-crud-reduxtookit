import {TUTORIAL_ACTION} from "../action/types";


const TutorialReducer = (state = null , action) =>{
    const {type, payload} = action
    switch (type) {
        case TUTORIAL_ACTION.REFRESH_TUTORIALS:
            return payload;
        default:
            return state;
    }
}

export default TutorialReducer
