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
import JobSeekerUpdate from "../layouts/cv/JobSeekerUpdate";

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
      {/* <Card fluid>
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

           
          </Card.Content>
        </div>
      </Card> */}

<div style={{height:"500px"}}>
      <Card fluid>

      <Card.Content>
      <Image floated="left" size="small" src={jobSeekerCv?.image.url} />
   <div><ImageUpdate image={jobSeekerCv?.image}/></div>
            <div style={{ float: "left"}}/>
                 <p><b>Adı : {jobSeekerCv?.jobSeeker.firstName}</b></p>
              <p><b>Soyad : {jobSeekerCv?.jobSeeker.lastName}</b></p>  
 <p><b>Email : {jobSeekerCv?.jobSeeker.email} </b> </p>
              
      </Card.Content>
      <div style={{backgroundColor:"skyblue",height:"30px"}}> <Card.Header >Açıklama Mektubu</Card.Header></div>
                <Card.Content>
                Açıklama Mektubu {jobSeekerCv?.coverletters[0].content} 
                <CoverLetterUpdate coverLetter={jobSeekerCv?.coverletters[0]}/>

                </Card.Content>
                <div style={{backgroundColor:"skyblue"}}> <Card.Header >Deneyim Bilgisi</Card.Header></div>
                <Card.Content>
             <b>Deneyim : İşyeri: {jobSeekerCv?.experiences[0].workplaceName} -
                {jobSeekerCv?.experiences[0].position}</b>   
                <ExperienceUpdate experience={jobSeekerCv?.experiences[0]}/>
                </Card.Content>
                <div style={{backgroundColor:"skyblue",height:"30px"}}> <Card.Header >Okul Bilgileri</Card.Header></div>
     {jobSeekerCv?.educations.map((education)=>(
      <Card.Content> <div style={{height:"100px",fontSize:"15px"}}> 
 {/* <b>Okul Adı : {jobSeekerCv?.educations.map((education)=>education.schoolName).join(",")}</b>  */}
 {education.schoolName}
              
                <EducationUpdate  education={education} jobSeeker={jobSeekerCv?.jobSeeker}/>
                <EducationDelete id={education.id}/>
                </div>
</Card.Content>
     ))}
     <Card.Content> <EducationAdd  jobSeeker={jobSeekerCv?.jobSeeker} /></Card.Content> 
      

<div style={{backgroundColor:"skyblue",height:"30px"}}> <Card.Header >Yetenek Bilgisi</Card.Header></div>
{jobSeekerCv?.skills.map((skill)=>(
  <Card.Content>
Yetenekler :{" "}
                {/* {jobSeekerCv?.skills.map((skill) => skill.name).join(",")} */}
                {skill.name}
                <SkillUpdate skill={jobSeekerCv?.skills} jobSeeker={jobSeekerCv?.jobSeeker}/>

</Card.Content>
))}

<div style={{backgroundColor:"skyblue",height:"30px"}}> <Card.Header >Bağlantı Adresleri</Card.Header></div>
{jobSeekerCv?.links.map((link)=>(
  <Card.Content>
Bağlantı Adresleri : {link.name}:{" "}
                {link.url}
                <LinkUpdate link={link}/>
</Card.Content>
))}

<div style={{backgroundColor:"skyblue",height:"30px"}}> <Card.Header >Yabancı Dil Bilgisi</Card.Header></div>
{jobSeekerCv?.languages.map((language)=>(
  <Card.Content> Diller : {language.language}:{" "}
                {language.level}
                <LanguageUpdate language={language}/></Card.Content>
))}

              
              
      </Card>
      </div>



    </div>
  );
}
