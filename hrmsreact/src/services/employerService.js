import axios from "axios";

export default class EmployerService {
  add(values) {
    return axios.post("http://localhost:8080/api/employers/add", values);
  }

  getEmployers() {
    return axios.get("http://localhost:8080/api/employers/getall");
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/employers/getbyid?id=" + id);
  }
  update(values) {
    return axios.post("http://localhost:8080/api/employers/update", values);
  }

  getAllByVerify() {
    return axios.get("http://localhost:8080/api/employers/getallbyverify");
  }

  changeVerifiedStatus(id) {
    return axios.post(
      "http://localhost:8080/api/employers/changeverifiedstatus?id=" + id
    );
  }
  countGetAll(){
    return axios.get("http://localhost:8080/api/employers/countGetAll")
  }
}
