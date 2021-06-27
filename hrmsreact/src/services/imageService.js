import axios from 'axios'

export default class ImageService{
    getImages(){
        return axios.get("http://localhost:8080/api/images/getall");
    }

    update(values){
        return axios.post("http://localhost:8080/api/images/update",values)
    }
    delete(id){
        return axios.delete("http://localhost:8080/api/images/delete?id="+id)
    }
}