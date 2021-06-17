import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router'
import JobAdvertService from '../services/jobAdvertService';
import { Button, Card , Image} from 'semantic-ui-react'

export default function JobAdvertDetail() {

let {id} = useParams();

const [jobAdvert, setJobAdvert] = useState({})


useEffect (()=>{
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getById(id).then((result)=>setJobAdvert(result.data.data))
})

    return (
        <div>
           
        <Card fluid style={{marginLeft:"125px"}}>
       
          <Card.Content>
            <Card.Header> <div style={{marginBottom:"20px",boxShadow:"3px 7px 5px #473c8b"}}> <h1 style={{color:"white",backgroundColor:"orange",borderRadius:"15px",border:"solid"}}> {jobAdvert?.employer?.companyName} şirketi</h1></div> </Card.Header>
            <div style={{float:"left",margin:"5px"}}><Image src={"../../assets/hrms.png"} size='small' spaced  style={{borderRadius:"15px"}}/> </div>
            
            <div style={{textAlign:"left"}}>
            <Card.Meta><h3><i>İş Başlığı</i>  : <mark>{jobAdvert?.jobPosition?.jobTitle} </mark></h3></Card.Meta>
            <Card.Description >
            <div style={{margin:"10px"}}> <h3> İş Tanımı :  {jobAdvert.description} </h3> </div>
            </Card.Description>
            <Card.Description>
             <div style={{margin:"10px"}}> Maaş Aralığı : <b><ins>{jobAdvert.salaryMin} $ - {jobAdvert.salaryMax} $</ins> </b>  </div>  
            </Card.Description>
            
            <Card.Description>
            
             Lokasyon : {jobAdvert?.city?.name}
            </Card.Description>
            </div>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Başvur
              </Button>
   
            </div>
          </Card.Content>
        </Card>
     
        </div>
    )
}
