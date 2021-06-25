import React, { useState, useEffect } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekerCv() {
  const [jobSeekerCv, setJobSeekerCvs] = useState(null);


  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getByIdJobSeekerCv(1)
      .then((result) =>setJobSeekerCvs(result.data.data))
     ;

  }, []);

  return (
    <div>
      <Card fluid>
          <Card.Content>
            <Image
              floated="left"
              size="mini"
           
              src={jobSeekerCv?.image.url}
            />
            <Card.Header>
               Okul Adı : {jobSeekerCv?.educations[0].schoolName} 
            </Card.Header>
             <Card.Meta>Yetenekler : {jobSeekerCv?.skills.map((skill)=>skill.name).join(",")}</Card.Meta> 
            
            <Card.Meta>
              Bağlantı Adresleri : {jobSeekerCv?.links[0].name}:{" "}
              {jobSeekerCv?.links[0].url}
            </Card.Meta>
            <Card.Meta>
              Diller : {jobSeekerCv?.languages[0].language}:{" "}
              {jobSeekerCv?.languages[0].level}
            </Card.Meta>
            <Card.Meta>
               Deneyim : İşyeri: {jobSeekerCv?.experiences[0].workplaceName} -{jobSeekerCv?.experiences[0].position}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Ekle
              </Button>
              <Button basic color="red">
                Güncelle
              </Button>
            </div>
          </Card.Content>
        </Card>
       
   
    </div>
  );
}
