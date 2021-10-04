import {TUTORIAL_ACTION} from "../action/types";

const initState = null
const TutorialReducer = (state = initState , action) =>{
    const {type, payload} = action

    switch (type) {
        case TUTORIAL_ACTION.REFRESH_TUTORIALS:
            return payload;

        case TUTORIAL_ACTION.CREATE_TUTORIAL:
            return [...state, payload];

        case TUTORIAL_ACTION.UPDATE_TUTORIAL:
            return state.map((item) => {
                if (item.id === payload.id) return payload;
                else return item;
            });

        case TUTORIAL_ACTION.DELETE_TUTORIAL:
            return state.filter(({id}) => id !== payload.id);

        case TUTORIAL_ACTION.DELETE_ALL_TUTORIALS:
            return [];

        default:
            return state;
    }
}

export default TutorialReducer
