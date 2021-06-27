import axios from 'axios'



export default class LinkService{
    getLinks(){
        return axios.get("http://localhost:8080/api/links/getall");
    }

    add(values){
        return axios.post("http://localhost:8080/api/links/add",values)
    }

    update(values){
return axios.post("http://localhost:8080/api/links/update",values)
    }
    delete(id){
        return axios.delete("http://localhost:8080/api/links/delete?id=",+id)
    }
}