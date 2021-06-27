import axios from 'axios'

export default class LanguageService{
    getLanguages(){
        return axios.get("http://localhost:8080/api/languages/getall");
    }

    add(values){
        return axios.post("http://localhost:8080/api/languages/add",values)
    }

    update(values){
        return axios.post("http://localhost:8080/api/languages/update",values)
    }

    delete(id){
        return axios.post("http://localhost:8080/api/languages/delete?id="+id)
    }
}