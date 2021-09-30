import API from "../util/API";

export const TutorialService = {
    tutorials
}
const baseURL = '/tutorials'

function tutorials(){
    return API.get(baseURL)
}


export default  {
    tutorials
}
