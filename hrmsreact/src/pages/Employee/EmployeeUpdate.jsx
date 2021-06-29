import React ,{useState,useEffect}from 'react'
import EmployeeService from '../../services/employeeService';
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
export default function EmployeeUpdate({employee}) {
    
    const [open, setOpen] = useState(false)
    // console.log(employee);
     const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
          id:employee?.id,
          email:employee?.email,
          password:employee?.password,
          firstName:employee?.firstName,
          lastName:employee?.lastName,
          active:true,
          deleted:false
        },
        enableReinitialize:true,
        validationSchema: Yup.object({
          //  password:Yup.string().required("url boş bırakılamaz"),
          //  firstName:Yup.string().required("ad boş bırakılamaz"),
           // lastName:Yup.string().required("soyad boş bırakılamaz")
        }),
        onSubmit: (values) => {
          let employeeService = new EmployeeService();
       //   console.log(employee)
          employeeService.update(values)
            .then(toast.success("Yetenek Bilgisi güncellendi!"));
        },
      });
    
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
            <Modal.Header>Çalışan Güncelle</Modal.Header>
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
                      <label>lastName</label>
                      <input
                        name="lastName"
                        placeholder="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && touched.lastName && (
                        <Label basic color="red" pointing>
                          {errors.lastName}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn>
                  <GridColumn width={7}>
                    <Form.Field>
                      <label>firstName</label>
                      <input
                        name="firstName"
                        placeholder="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && touched.firstName && (
                        <Label basic color="red" pointing>
                          {errors.firstName}
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
      )
}
