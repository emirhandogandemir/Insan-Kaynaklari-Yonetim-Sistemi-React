import React,{useState} from 'react'
import SkillService from "../../services/skillService"
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
import swal from "sweetalert";
import { toast } from "react-toastify";
export default function SkillUpdate({skill}) {
    
    const [open, setOpen] = useState(false)
    

    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
          id: skill?.id,
          jobSeeker: skill?.jobSeeker,
          name:skill?.name
          
        },
        
        enableReinitialize:true,
        validationSchema: Yup.object({
            name: Yup.string().required(" adı boş bırakılamaz!"),
        }),
        onSubmit: (values) => {
          let skillService = new SkillService();
       
    
          skillService.update(values)
            .then( swal(`${values.name}`,"Update Edildi", "success"));
            window.location.reload();
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
                        placeholder="Yetenek Adı"
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
