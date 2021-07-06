import React, { useState, useEffect } from "react";
import EmployerService from "../../../services/employerService";
import { Table, Button } from "semantic-ui-react";
import VerificationEmployerService from "../../../services/verificationEmployerService";
export default function AdminAllEmployersVerifyFalse() {
  const [verificationEmployers, setVerificationEmployers] = useState([]);
  let employerService = new EmployerService();
  let verificationEmployerService = new VerificationEmployerService();

  useEffect(() => {
    verificationEmployerService
      .getAllByVerifyFalse()
      .then((result) => setVerificationEmployers(result.data.data));
  }, [verificationEmployers]);

  let changeIsVerifiedStatus = (id) => {
    employerService.changeVerifiedStatus(id);
  };
//console.log(verificationEmployers)
  return (
    <div>
      <Button fluid color="red">
        Onay Bekleyen
      </Button>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>WebSitesi</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
            <Table.HeaderCell>Onay Durumu :</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {verificationEmployers?.map((employer, key) => (
          <Table.Body>
            <Table.Row key={key}>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.website}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
              <Table.Cell>
                {employer?.verified
                  ? "Doğrulanmış"
                  : "Doğrulanması gereken güncelleme "}
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Button
                  onClick={()=>handleVerifiedButtonClick(employer)}
                  fluid
                  color="red"
                >
                  Onayla
                </Button>{" "}
              </Table.Cell>
              {/* <Table.Cell> <Button onClick={()=>deleteVerificationEmployer(employer.userId)} fluid color="red"> Listeden kaldır</Button> </Table.Cell> */}
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );

  function handleVerifiedButtonClick(employer) {

  changeIsVerifiedStatus(employer.id);
      console.log("updated")
  employerService.update(employer).then(verificationEmployerService.delete(employer.id)).catch("Hata ile karşılaşıldı")
    
      console.log("deleted")

 }
}
