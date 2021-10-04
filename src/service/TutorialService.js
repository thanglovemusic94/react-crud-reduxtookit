import API from "../util/API";

export const TutorialService = {
    getAll,
    create,
    remove,
    removeAll,
    getById,
    edit
}
const baseURL = '/tutorials'

function getAll(){
    return API.get(baseURL)
}

function getById(id) {
    return API.get(`${baseURL}/${id}`)
}

function edit(data, id) {
    return API.put(`${baseURL}/${id}`, data)
}

function create(data){
    return API.post(baseURL, data)
}

function remove(id) {
    return API.delete(`${baseURL}/${id}`)
}

function removeAll() {
    return API.delete(baseURL)
}


// export default  {
//     tutorials
// }
