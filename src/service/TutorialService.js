import API from "../util/API";

export const TutorialService = {
    tutorials
}
const baseURL = '/tutorials'

function tutorials(){
    console.log("hihi")
    return API.get(baseURL)
}


export default  {
    tutorials
}
