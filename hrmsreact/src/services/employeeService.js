
import axios from 'axios'


export default class EmployeeService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employees/getall");
    }

    add(values){
        return axios.post("http://localhost:8080/api/employees/add",values)
    }
    update(values){
        return axios.post("http://localhost:8080/api/employees/update",values)
    }

    getById(id){
return axios.get("http://localhost:8080/api/employees/getbyid?id="+id)
    }
delete(id){
    return axios.delete("http://localhost:8080/api/employees/delete?id="+id)
}
}