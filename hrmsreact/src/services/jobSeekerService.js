import axios from 'axios'

export default class JobSeekerService{
    getJobSeekers(){
        return axios.get("http://localhost:8080/api/jobseekers/getAll")
    }
    getById(id)
    {
        return axios.get("http://localhost:8080/api/jobseekers/getById?id="+id)
    }

    getByIdJobSeekerCv(jobSeekerId){
        return axios.get("http://localhost:8080/api/jobseekers/getByIdJobSeekerCv?jobSeekerId="+jobSeekerId)
    }

}
