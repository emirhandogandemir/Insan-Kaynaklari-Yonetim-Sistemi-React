import axios from 'axios'

export default class CoverLetterService{
    getCoverLetters(){
        return axios.get("http://localhost:8080/api/coverletters/getall");
    }
}