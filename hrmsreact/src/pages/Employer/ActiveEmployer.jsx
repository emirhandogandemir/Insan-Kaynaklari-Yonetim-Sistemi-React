import React,{useState,useEffect} from 'react'
import EmployerService from '../../services/employerService';
export default function ActiveEmployer() {
   const [employer, setEmployer] = useState(null)
   

   useEffect(()=>{
let employerService = new EmployerService();
employerService.getById(1).then((result)=>setEmployer(result.data.data))
   },[])
    return (
        <div>
            
        </div>
    )
}
