import React, { useEffect, useState } from "react";
import JobAdvertService from "../services/jobAdvertService";
import { Table, Header ,Button} from "semantic-ui-react";
export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  });

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
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdverts) => (
            <Table.Row key={jobAdverts.id}>
              <Table.Cell>{jobAdverts.jobPosition.jobTitle}</Table.Cell>
              <Table.Cell>{jobAdverts.description}</Table.Cell>
              <Table.Cell>{jobAdverts.city.name}</Table.Cell>
              <Table.Cell>
                {jobAdverts.salaryMin}-{jobAdverts.salaryMax}
              </Table.Cell>
              <Table.Cell>{jobAdverts.publishedAt}</Table.Cell>

              <Table.Cell>{jobAdverts.employer.companyName}</Table.Cell>
              <Table.Cell> <Button color='grey'>Details</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
    </div>
  );
}
