import React ,{useState,useEffect}from 'react'
import EmployeeService from '../../services/employeeService'
import { Card , Image } from 'semantic-ui-react'
import EmployeeUpdate from './EmployeeUpdate'

export default function EmployeeDetail() {
    
    const [employee, setEmployee] = useState(null)
    
    useEffect(()=>{
        let employeeService = new EmployeeService();
        employeeService.getById(3).then((result)=>setEmployee(result.data.data))
    })

    return (
        <div style={{alignContent:"center"}}>

<Image src={"../../../assets/avataremployee.jpg"} size='medium' circular />
        <Card
    header={employee?.firstName}
    meta={employee?.lastName}
    description={employee?.email}
 
  />
<EmployeeUpdate employee={employee}/>
 
        </div>
    )
}
