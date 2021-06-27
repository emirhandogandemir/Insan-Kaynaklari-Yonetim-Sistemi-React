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

  getById(id){
    return axios.get("http://localhost:8080/api/jobadverts/getbyid?id="+id)
  }

  //--------------------

  getAllActiveTrueAndOpenTrueJobAdverts(pageNo){
    return axios.get("http://localhost:8080/api/jobadverts/getAllActiveAndOpenJobAdverts?pageNo="+pageNo)
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


getAllByCityIdAndWorkTypeId(cityId,workTypeId){
return axios.get(`http://localhost:8080/api/jobadverts/getAllByCityIdAndWorkTypeId?=${cityId}&workTypeId=${workTypeId}`)
}

getAllByCityId(cityId){
return axios.get("http://localhost:8080/api/jobadverts/getAllByCityId?cityId="+cityId)
}
getAllByWorkTypeId(workTypeId){
return axios.get("http://localhost:8080/api/jobadverts/getAllByWorkTypeId?workTypeId="+workTypeId)
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



