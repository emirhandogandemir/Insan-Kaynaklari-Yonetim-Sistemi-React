
import axios from "axios"

export default class FavoriteService{

add(values){
    return axios.post("http://localhost:8080/api/favorites/add",values)
}
update(values){
    return axios.post("http://localhost:8080/api/favorites/update",values)
}

delete(id){
    return axios.delete("http://localhost:8080/api/favorites/delete?id="+id)
}

getAll(){
    return axios.get("http://localhost:8080/api/favorites/getall")
}

getByJobSeekerId(id){
return axios.get("http://localhost:8080/api/favorites/getByJobSeekerId?id="+id)
}

getByJobAdvertId(id){
    return axios.get("http://localhost:8080/api/favorites/getByAdvertId?id="+id)
}
}