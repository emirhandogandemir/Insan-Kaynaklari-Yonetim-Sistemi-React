import axios from 'axios'


export default class SchoolService
{
    getEducations(){
        return axios.get("http://localhost:8080/api/educations/getall");
    }
}

