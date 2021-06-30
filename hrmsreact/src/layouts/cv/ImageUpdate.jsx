import React,{useState} from 'react'
import ImageService from '../../services/imageService';
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
export default function ImageUpdate({image}) {
    const [open, setOpen] = useState(false)
    
   // console.log(image)
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            id: image?.id,
          jobSeeker: image?.jobSeeker,
          uploadedAt:image?.uploadedAt,
          url:image?.url
        },
        enableReinitialize:true,
        validationSchema: Yup.object({
            url: Yup.string().required(" adı boş bırakılamaz!"),
        }),
        onSubmit: (values) => {
          let imageService = new ImageService();
//console.log("güncellendi");
    
          imageService.update(values)
            .then( swal("image","Update Edildi", "success"));
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
            <Modal.Header>Resim Güncelle</Modal.Header>
            <Modal.Description>
              <Form
                onSubmit={handleSubmit}
                style={{ marginTop: "1em", marginLeft: "1em", marginBottom: "1em" }}
              >
                <Grid stackable>
                  <GridColumn width={14}>
                    <Form.Field>
                      <label>Resim İçeriği</label>
                      <input
                        name="url"
                        placeholder="url Adı"
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
                  <GridColumn width={14}>
                    <Form.Field>
                      <label>Güncelleme Tarihi</label>
                      <input
                        name="uploadedAt"
                        type="date"
                        value={values.uploadedAt}
                        onChange={handleChange}
                      />
                      {errors.uploadedAt && touched.uploadedAt && (
                        <Label basic color="red" pointing>
                          {errors.uploadedAt}
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
