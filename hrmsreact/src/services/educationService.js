import axios from "axios";

export default class SchoolService {
  getEducations() {
    return axios.get("http://localhost:8080/api/educations/getall");
  }

  update(education) {
    return axios.post("http://localhost:8080/api/educations/update", education);
  }

  delete(id){
      return axios.post("http://localhost:8080/api/educations/delete?id="+id)
  }
  add(values){
      return axios.post("http://localhost:8080/api/educations/add",values)
  }

}
