import React, { useState, useEffect } from "react";
import { Button, Card, Image, Grid, Segment ,Label} from "semantic-ui-react";
import EducationDelete from "../layouts/cv/EducationDelete";
import EducationUpdate from "../layouts/cv/EducationUpdate";
import JobSeekerService from "../services/jobSeekerService";
import EducationAdd from "../layouts/cv/EducationAdd";

import SkillUpdate from "../layouts/cv/SkillUpdate";

import LanguageUpdate from "../layouts/cv/LanguageUpdate";
import ExperienceUpdate from "../layouts/cv/ExperienceUpdate";
import CoverLetterUpdate from "../layouts/cv/CoverLetterUpdate";
import ImageUpdate from "../layouts/cv/ImageUpdate";
import LinkUpdate from "../layouts/cv/LinkUpdate";
import JobSeekerUpdate from "../layouts/cv/JobSeekerUpdate";

export default function JobSeekerCv() {
  const [jobSeekerCv, setJobSeekerCvs] = useState(null);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getByIdJobSeekerCv(1)
      .then((result) => setJobSeekerCvs(result.data.data));
  }, [jobSeekerCv]);
  console.log(jobSeekerCv);

  return (
      <div>
     
        <Card fluid>
          <Card.Content>
            <Image floated="left" size="small" src={jobSeekerCv?.image.url} />
            <div>
              <ImageUpdate image={jobSeekerCv?.image} />
            </div>
            <Label ribbon >İş arayan Bilgisi</Label>
            <div style={{ float: "left" }} />
            <p>
              <b>Adı : {jobSeekerCv?.jobSeeker.firstName}</b>
            </p>
            <p>
              <b>Soyad : {jobSeekerCv?.jobSeeker.lastName}</b>
            </p>
            <p>
              <b>Email : {jobSeekerCv?.jobSeeker.email} </b>{" "}
            </p>
          </Card.Content>
          <div style={{ backgroundColor: "skyblue", height: "30px" }}>
            {" "}
            <Label ribbon >Açıklama Mektubu</Label>
          </div>
          {jobSeekerCv?.coverletters.map((coverLetter)=>(
            <Card.Content>
           {coverLetter?.content}
            <CoverLetterUpdate coverLetter={coverLetter} />
          </Card.Content>
          ))}
          
          <div style={{ backgroundColor: "skyblue" }}>
            {" "}
            <Label ribbon >Deneyim Bilgisi</Label>
          </div>
          {jobSeekerCv?.experiences.map((experience)=>(
             <Card.Content>
             <b>
               Deneyim : İşyeri: {experience?.workplaceName} -
               {experience?.position}
             </b>
             <ExperienceUpdate experience={experience} />
           </Card.Content>
          ))}
         
          <div style={{ backgroundColor: "skyblue", height: "30px" }}>
            {" "}
              
            <Card.Header> <Label ribbon >Eğitim Bilgisi</Label> </Card.Header>
             
              
          </div>
          {jobSeekerCv?.educations.map((education) => (
          
            <Card.Content>
              
              {" "}
              <div style={{ fontSize: "15px" }}>
                {/* <b>Okul Adı : {jobSeekerCv?.educations.map((education)=>education.schoolName).join(",")}</b>  */}
                {education.schoolName}

                <EducationUpdate
                  education={education}
                  jobSeeker={jobSeekerCv?.jobSeeker}
                />
                <EducationDelete id={education.id} />
              </div>
            </Card.Content>
          ))}
          <Card.Content>
            {" "}
            <EducationAdd jobSeeker={jobSeekerCv?.jobSeeker} />
          </Card.Content>

          <div style={{ backgroundColor: "skyblue", height: "30px" }}>
            {" "}
            <Label ribbon >Yetenek Bilgisi</Label>
          </div>
          {jobSeekerCv?.skills.map((skill) => (
            <Card.Content>
              Yetenekler :{" "}
              {/* {jobSeekerCv?.skills.map((skill) => skill.name).join(",")} */}
              {skill.name}
              <SkillUpdate
                skill={skill}
                jobSeeker={jobSeekerCv?.jobSeeker}
              />
            </Card.Content>
          ))}

          <div style={{ backgroundColor: "skyblue", height: "30px" }}>
            {" "}
            <Label ribbon >Bağlantı Adresleri</Label>
          </div>
          {jobSeekerCv?.links.map((link) => (
            <Card.Content>
              Bağlantı Adresleri : {link.name}: {link.url}
              <LinkUpdate link={link} />
            </Card.Content>
          ))}

          <div style={{ backgroundColor: "skyblue", height: "30px" }}>
            {" "}
            <Label ribbon >Yabancı Dil Bilgisi</Label>
          </div>
          {jobSeekerCv?.languages.map((language) => (
            <Card.Content>
              {" "}
              Diller : {language.language}: {language.level}
              <LanguageUpdate language={language} />
            </Card.Content>
          ))}
        </Card>
      </div>
 
  );
}
