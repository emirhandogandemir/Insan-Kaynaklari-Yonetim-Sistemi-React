import React, { useEffect, useState } from "react";
import JobAdvertService from "../services/jobAdvertService";
import { Table, Header ,Button, Rating} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { addToFavorite } from "../store/actions/favoriteAction";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
export default function JobAdvertList() {
  
  const [jobAdverts, setJobAdverts] = useState([]);

   const dispatch = useDispatch();


  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getAllActiveTrueAndOpenTrueJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  });


  const handleAddToFavorite =(jobAdvert)=>{
    dispatch(addToFavorite(jobAdvert));
    toast.success(`${jobAdvert.jobPosition.jobTitle} favorilere eklendi`)

  }

  return (
    <div>
      <Header as="h2">
        Job Adverts
        <Header.Subheader>
          Aşağıda sistemimizde olan iş ilanlarını görmektesiniz
        </Header.Subheader>
      </Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Başlığı</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Lokasyon</Table.HeaderCell>
            <Table.HeaderCell>Ücret Skalası</Table.HeaderCell>
            <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>

            <Table.HeaderCell>İş Veren Şirket</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert) => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.jobPosition.jobTitle}</Table.Cell>
              <Table.Cell>{jobAdvert.description}</Table.Cell>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>
                {jobAdvert.salaryMin}-{jobAdvert.salaryMax}
              </Table.Cell>
              <Table.Cell>{jobAdvert.publishedAt}</Table.Cell>

              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell> <Link to={`/jobadverts/${jobAdvert.id}`}><Button color='grey'>Details</Button></Link></Table.Cell>
              <Table.Cell><Rating onClick={()=>handleAddToFavorite(jobAdvert)} icon='heart' defaultRating={0} maxRating={1}  /></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
    </div>
  );
}
