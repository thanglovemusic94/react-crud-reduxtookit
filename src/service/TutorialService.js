import API from "../util/API";

export const TutorialService = {
    getAll,
    create
}
const baseURL = '/tutorials'

function getAll(){
    return API.get(baseURL)
}

function create(data){
    return API.post(baseURL, data)
}


// export default  {
//     tutorials
// }
