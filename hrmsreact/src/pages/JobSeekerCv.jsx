import React, { useState, useEffect } from "react";
import { Button, Card, Image, Grid, Segment } from "semantic-ui-react";
import EducationDelete from "../layouts/cv/EducationDelete";
import EducationUpdate from "../layouts/cv/EducationUpdate";
import JobSeekerService from "../services/jobSeekerService";
import EducationAdd from "../layouts/cv/EducationAdd";

import SkillUpdate from "../layouts/cv/SkillUpdate"

import LanguageUpdate from "../layouts/cv/LanguageUpdate"
import ExperienceUpdate from "../layouts/cv/ExperienceUpdate";
import CoverLetterUpdate from "../layouts/cv/CoverLetterUpdate"
import ImageUpdate from "../layouts/cv/ImageUpdate"
import LinkUpdate from "../layouts/cv/LinkUpdate"

export default function JobSeekerCv() {
  const [jobSeekerCv, setJobSeekerCvs] = useState(null);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getByIdJobSeekerCv(1)
      .then((result) => setJobSeekerCvs(result.data.data))
      
  }, []);
  console.log(jobSeekerCv);

  return (
    <div>
      <Card fluid>
        <div >
          <Card.Content>
            <Image floated="left" size="small" src={jobSeekerCv?.image.url} />
  <ImageUpdate image={jobSeekerCv?.image}/>
            <div style={{ float: "left" }}>
                <div style={{textAlign:"center"}}>
              <Card.Header>
                Okul Adı : {jobSeekerCv?.educations.map((education)=>education.schoolName).join(",")}
                <EducationAdd  jobSeeker={jobSeekerCv?.jobSeeker} />
                <EducationUpdate  education={jobSeekerCv?.educations[0]} jobSeeker={jobSeekerCv?.jobSeeker}/>
                <EducationDelete id={jobSeekerCv?.educations[0].id}/>
                
              </Card.Header>
              <Card.Meta>
                Yetenekler :{" "}
                {jobSeekerCv?.skills.map((skill) => skill.name).join(",")}
                <SkillUpdate skill={jobSeekerCv?.skills} jobSeeker={jobSeekerCv?.jobSeeker}/>
              
              </Card.Meta>

              <Card.Meta>
                Bağlantı Adresleri : {jobSeekerCv?.links[0].name}:{" "}
                {jobSeekerCv?.links[0].url}
                <LinkUpdate link={jobSeekerCv?.links[0]}/>
              </Card.Meta>
              <Card.Meta>
                Diller : {jobSeekerCv?.languages[0].language}:{" "}
                {jobSeekerCv?.languages[0].level}
                <LanguageUpdate language={jobSeekerCv?.languages[0]}/>
              </Card.Meta>
              <Card.Meta>
                Deneyim : İşyeri: {jobSeekerCv?.experiences[0].workplaceName} -
                {jobSeekerCv?.experiences[0].position}
                <ExperienceUpdate experience={jobSeekerCv?.experiences[0]}/>
              </Card.Meta>
              <Card.Meta>
                Deneyim : İşyeri: {jobSeekerCv?.coverletters[0].content} 
                <CoverLetterUpdate coverLetter={jobSeekerCv?.coverletters[0]}/>
              </Card.Meta>
              </div>
            </div>

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
          </Card.Content>
        </div>
      </Card>
    </div>
  );
}
