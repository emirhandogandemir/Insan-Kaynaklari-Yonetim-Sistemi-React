import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  Button,
  Form,
  Grid,
  GridColumn,
  Label,
  Modal,
  Icon,
} from "semantic-ui-react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import swal from "sweetalert";
import EmployerService from "../../services/employerService";
import VerificationEmployerService from "../../services/verificationEmployerService";

export default function ActiveEmployerUpdate({ employer }) {
  const [open, setOpen] = useState(false);

  let employerService = new EmployerService();

  // console.log(employer);
  //console.log(employer?.id)
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      id: employer?.id,
      email: employer?.email,
      password: employer?.password,
      companyName: employer?.companyName,
      website: employer?.website,
      phoneNumber: employer?.phoneNumber,
      active: true,
      deleted: false,
      verified: false,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      password: Yup.string().required("şifre boş bırakılamaz"),
      companyName: Yup.string().required("şirket Adı boş bırakılamaz"),
      website: Yup.string().required("website adı boş bırakılamaz"),
    }),
    onSubmit: (values) => {
     console.log("güncellendi")
     //changeIsVerified(employer?.id)
      //employerService
       // .update(values)
        //.then(()=>{changeIsVerified(employer?.id);})
        values.id=20;
        values.verified=false;
       // values.verified=false;// verify buradan değiştirip false olur
        let verificationEmployerService = new VerificationEmployerService();
        let verificationEmployer={
          companyName:values.companyName,
          id:values.id,
          email:values.email,
          website:values.website,
          phoneNumber:values.phoneNumber,
          password:values.password,
          verified:false,
          deleted:false,
          active:true
        }
        verificationEmployerService.add(verificationEmployer).then(swal("Başarılı","Kayıt alındı bilgileriniz personellerimiz tarafından onaylandığında güncellenecektir","success"))
    },
  });

  let changeIsVerified= (id)=>{
employerService.changeVerifiedStatus(id);
  }

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button
            floated="right"
            positive
            style={{ marginBottom: ".5em", marginRight: ".5em" }}
          >
            <Icon name="pencil"></Icon>Düzenle
          </Button>
        }
      >
        <Modal.Header>Şirket Bilgilerini Güncelle</Modal.Header>
        <Modal.Description>
          <Form
            onSubmit={handleSubmit}
            style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
          >
            <Grid stackable>
              <GridColumn width={14}>
                <Form.Field>
                  <label>Yetenek Adı</label>
                  <input
                    name="email"
                    placeholder="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && (
                    <Label basic color="red" pointing>
                      {errors.email}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
              <GridColumn width={7}>
                <Form.Field>
                  <label>password</label>
                  <input
                    name="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && (
                    <Label basic color="red" pointing>
                      {errors.password}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
              <GridColumn width={7}>
                <Form.Field>
                  <label>companyName</label>
                  <input
                    name="companyName"
                    placeholder="companyName"
                    value={values.companyName}
                    onChange={handleChange}
                  />
                  {errors.companyName && touched.companyName && (
                    <Label basic color="red" pointing>
                      {errors.companyName}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
              <GridColumn width={7}>
                <Form.Field>
                  <label>firstName</label>
                  <input
                    name="website"
                    placeholder="website"
                    value={values.website}
                    onChange={handleChange}
                  />
                  {errors.website && touched.website && (
                    <Label basic color="red" pointing>
                      {errors.website}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
              <GridColumn width={7}>
                <Form.Field>
                  <label>phoneNumber</label>
                  <input
                    name="phoneNumber"
                    placeholder="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <Label basic color="red" pointing>
                      {errors.phoneNumber}
                    </Label>
                  )}
                </Form.Field>
              </GridColumn>
            </Grid>
            <Modal.Actions>
              <Button color="red" onClick={() => setOpen(false)}>
                Vazgeç
              </Button>
              <Button
                type="submit"
                color="teal"
                style={{ marginLeft: "22em", marginTop: "1em" }}
              >
                Güncelle
              </Button>
            </Modal.Actions>
          </Form>
        </Modal.Description>
      </Modal>
    </div>
  );
}
