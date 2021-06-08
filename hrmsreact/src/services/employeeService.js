
import axios from 'axios'


export default class EmployeeService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employees/getall");
    }
}