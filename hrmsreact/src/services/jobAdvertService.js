import axios from "axios";

export default class JobAdvertService {
  getJobAdverts() {
      // tüm iş ilanlarını getirmek için
    return axios.get("http://localhost:8080/api/jobadverts/getAll");
  }

  add(values) {
      // iş ilanı eklemek için
    return axios.post("http://localhost:8080/api/jobadverts/add", values);
  }


  //--------------------

  getAllActiveTrueAndOpenTrueJobAdverts(){
    return axios.get("http://localhost:8080/api/jobadverts/getAllActiveAndOpenJobAdverts")
  }

  getAllActiveFalseAndOpenTrueJobAdverts(){
    return axios.get("http://localhost:8080/api/jobadverts/getAllOpenJobAdvertsAndIsActiveFalse")
  }

 changeActiveStatus(id){
   return axios.post("http://localhost:8080/api/jobadverts/changeactivestatus?id="+id)
   
 }
 changeOpenStatus(id){
   return axios.post("http://localhost:8080/api/jobadverts/changeopenstatus?id="+id)
 }

getAllByEmployerId(employerId){
  return axios.get("http://localhost:8080/api/jobadverts/getAllByEmployerId?id="+employerId)
}
  //----------------------
  getAllOpenJobAdvertByEmployer(id) {
    return axios.get(
        // açık is ilanlarını iş veren idsine göre getirir
      "http://localhost:8080/api/jobadverts/getAllOpenJobAdvertByEmployer?id=" +id );
  }

 getAllByOrderByPublishedAt(){
     // yayınlanma tarihine göre sondan başa
     return axios.get("http://localhost:8080/api/jobadverts/findAllByOrderByPublishedAt")
 }

 getAllOpenJobAdvertList(){
     // aktif iş ilanlarını görmek için
     return axios.get("http://localhost:8080/api/jobadverts/getAllOpenJobAdvertList")
 }


}
