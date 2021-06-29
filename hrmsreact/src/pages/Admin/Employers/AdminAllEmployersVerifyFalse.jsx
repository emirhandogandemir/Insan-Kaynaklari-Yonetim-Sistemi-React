import React,{useState,useEffect} from 'react'
import EmployerService from '../../../services/employerService';
import { Table,Button } from 'semantic-ui-react'
export default function AdminAllEmployersVerifyFalse() {
   
   const [employers, setEmployers] = useState([])
   
   useEffect(()=>{
       let employerService = new EmployerService();
employerService.getAllByVerify().then((result)=>setEmployers(result.data.data))
   },[])
    return (
        <div>
            <Button fluid color="red">Onay Bekleyen</Button>
            <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
        <Table.HeaderCell>WebSitesi</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
        <Table.HeaderCell>Onay Durumu :</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
{employers?.map((employer,key)=>(
  <Table.Body>
  <Table.Row key={key}>
    <Table.Cell>{employer.companyName}</Table.Cell>
    <Table.Cell>{employer.website}</Table.Cell>
    <Table.Cell>{employer.email}</Table.Cell>
    <Table.Cell>{employer.phoneNumber}</Table.Cell>
    <Table.Cell>{employer?.verified ?"Doğrulanmış" : "Doğrulanması gereken güncelleme "}</Table.Cell>
    <Table.Cell> <Button fluid color="red">Onay Durumu değiştir</Button> </Table.Cell>
  </Table.Row>

</Table.Body>


))}
  
  </Table>
        </div>
    )
}
