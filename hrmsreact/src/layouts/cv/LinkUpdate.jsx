import React,{useState} from 'react'
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
import LinkService from '../../services/linkService';
import swal from "sweetalert";
export default function LinkUpdate({link}) {
    
    const [open, setOpen] = useState(false)

    //console.log(link);
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
          id:link?.id,
          jobSeeker:link?.jobSeeker,
          name:link?.name,
          url:link?.url
        },
        enableReinitialize:true,
        validationSchema: Yup.object({
            name:Yup.string().required(" adı boş bırakılamaz!"),
            url:Yup.string().required("url boş bırakılamaz")
        }),
        onSubmit: (values) => {
          let linkService = new LinkService();
//console.log(link)
          linkService.update(values)
            .then( swal(`${values.name}`,"Update Edildi", "success"));
           
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
            <Modal.Header>Yetenek Güncelle</Modal.Header>
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
                        name="name"
                        placeholder="site Adı"
                        value={values.name}
                        onChange={handleChange}
                      />
                      {errors.name && touched.name && (
                        <Label basic color="red" pointing>
                          {errors.name}
                        </Label>
                      )}
                    </Form.Field>
                  </GridColumn>
                  <GridColumn width={7}>
                    <Form.Field>
                      <label>Url Link</label>
                      <input
                        name="url"
                        placeholder="site Adı"
                        value={values.url}
                        onChange={handleChange}
                      />
                      {errors.url && touched.url && (
                        <Label basic color="red" pointing>
                          {errors.url}
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
