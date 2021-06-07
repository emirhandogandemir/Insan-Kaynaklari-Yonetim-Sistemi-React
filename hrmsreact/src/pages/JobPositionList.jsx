import React, { useEffect, useState } from "react";
import JobPositionService from "../services/jobPositionService";
import {  Table, Header } from "semantic-ui-react";
export default function JobPositionList() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  });

  return (
    <div>
      <Header as="h2">
        Job Positions
        <Header.Subheader>
          Aşağıda sistemimizde olan iş pozisyonlarını görmektesiniz
        </Header.Subheader>
      </Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Başlığı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPositions.map((jobPosition) => (
            <Table.Row key={jobPosition.id}>
              <Table.Cell>{jobPosition.jobTitle}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
    </div>
  );
}
