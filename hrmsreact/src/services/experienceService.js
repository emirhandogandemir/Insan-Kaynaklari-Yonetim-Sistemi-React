import axios from 'axios'

export default class ExperienceService{
    getExperinces(){
        return axios.get("");//şuanda backendde getall operasyonu yok
    }

    add(values){
        return axios.post("http://localhost:8080/api/experiences/add",values)
    }

    update(values){
        return axios.post("http://localhost:8080/api/experiences/update",values)
    }

    delete(id){
return axios.delete("http://localhost:8080/api/experiences/delete?id="+id)
    }
}