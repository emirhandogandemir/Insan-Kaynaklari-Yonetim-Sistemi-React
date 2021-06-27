import axios from 'axios'


export default class SkillService{
getSkills(){
    return axios.get("http://localhost:8080/api/skills/getall")
}

add(values){
return axios.post("http://localhost:8080/api/skills/add",values)
}

update(values){
return axios.post("http://localhost:8080/api/skills/update",values)
}

delete(id){
    return axios.delete("http://localhost:8080/api/skills/delete?id="+id)
}
}