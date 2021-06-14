import React, { useState, useEffect } from "react";
import JobPositionService from "../services/jobPositionService";
import CityService from "../services/cityService";
import WorkHourService from "../services/workHourService";
import { Input, Button, Form, Dropdown, TextArea } from "semantic-ui-react";
import WorkTypeService from "../services/workTypeService";
import JobAdvertService from "../services/jobAdvertService";
import EmployerService from "../services/employerService";
import { Formik } from "formik";
import * as Yup from "yup";
export default function JobAdvertAdd() {



  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [workHours, setWorkHours] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [employers, setEmployers] = useState([])



  let jobPositionService = new JobPositionService();
  let cityService = new CityService();
  let workHourService = new WorkHourService();
  let workTypeService = new WorkTypeService();
 // let jobAdvertService = new JobAdvertService();
  let employerService= new EmployerService();

  useEffect(() => {
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    workHourService
      .getWorkHours()
      .then((result) => setWorkHours(result.data.data));
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));
      employerService.getEmployers().then((result)=>setEmployers(result.data.data))
  }, []);

  return (
    <div>
      <Formik
        initialValues={{
          city: "",
          jobPosition: "",
          workType: "",
          description: "",
          salaryMax: "",
          salaryMin: "",
          openPositionCount: "",
          workHour: "",
          deadLine: "",
          publishedAt: "",
          employer:""
        }}

        validationSchema={Yup.object({
          city: Yup.string().required("Şehir alanı boş bırakılamaz"),
          jobPosition: Yup.string().required("İş Alanı boş bırakılamaz"),
          workType: Yup.string().required("çalışma tipi boş bırakılamaz"),
          description: Yup.string().required("açıklama boş bırakılamaz"),
        // salaryMax: Yup.number.required(
          //  "maximum fiyat aralığı boş bırakılamaz"
        //  ),
         // salaryMin: Yup.string().required(
         //   "minumum fiyat aralığı boş bırakılamaz"
         //// ),
         // openPositionCount: Yup.string().required(
         //   "Açılan pozisyon miktarı boş bırakılamaz"
         // ),
         // workHour: Yup.number.required("Çalışma Saati tipi boş bırakılamaz"),
         // deadLine: Yup.required("Son başvuru tarihi boş bırakılamaz"),
         // publishedAt: Yup.string().required(
         //   "yayınlanma tarihi boş bırakılamaz"
         // ),
        
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleReset,
          handleChange,
          handleBlur,
          dirty,
          isSubmitting,
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="mt-5 page-center"
            align="center"
          >
            <div className="bordered shadow mb-5 w-75">
              <div className="row">
                <div className="col-md-5">
                  <Form.Field>
                    <Dropdown
                      placeholder="Şehir seçiniz"
                      fluid
                      selection
                      search
                   
                      options={cities.map((x) => {
                        return { text: x.name, key: x.id, value: x.id };
                      })}
                    />
                  </Form.Field>

                  <Form.Field>
                    <Dropdown
                      placeholder="İş pozisyonunu seçiniz"
                      fluid
                      selection
                      search
                
                      options={jobPositions.map((x) => {
                        return { text: x.jobTitle, key: x.id, value: x.id };
                      })}
                    />
                  </Form.Field>

                  <Form.Field>
                    <Input
                      placeholder="Kontenjan"
                      id="openPositionCount"
                      name="openPositionCount"
                      type="number"
                      onChange={handleChange}
                      value={values.openPositionCount}
                    />
                  </Form.Field>

                  <Form.Field>
                    <Input
                      placeholder="Minimum maaş"
                      id="salaryMin"
                      name="salaryMin"
                      type="number"
                      onChange={handleChange}
                      value={values.salaryMin}
                    />
                  </Form.Field>

                  <Form.Field>
                    <Input
                      placeholder="maksimum maaş"
                      id="salaryMax"
                      name="salaryMax"
                      type="number"
                      onChange={handleChange}
                      value={values.salaryMax}
                    />
                  </Form.Field>
                </div>

                <div className="col-md-2"></div>
                <div className="col-md-5">
                  <Form.Field>
                    <Input
                      id="deadline"
                      placeholder="Son başvuru tarihini giriniz"
                      name="deadline"
                      type="text"
                      onChange={handleChange}
                      value={values.deadline}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Dropdown
                      placeholder="Çalışma şekli"
                      fluid
                      selection
                      search
                      options={workHours.map((w) => {
                        return { text: w.workHour, key: w.id, value: w.id };
                      })}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Dropdown
                      placeholder="Şirket Adı"
                      fluid
                      selection
                      search
                      options={employers.map((e) => {
                        return { text: e.companyName, key: e.id, value: e.id };
                      })}
                    />
                  </Form.Field>

                  <Form.Field>
                    <Dropdown
                      placeholder="çalışma zamanı "
                      fluids
                      selection
                      options={workTypes.map((w) => {
                        return { text: w.workType, key: w.id, value: w.id };
                      })}
                    />
                  </Form.Field>

                  <Form.Field>
                    <TextArea
                      rows={7}
                      id="description"
                      name="description"
                      type="textarea"
                      onChange={handleChange}
                      value={values.description}
                      onBlur={handleBlur}
                      error={touched.description && errors.description}
                    />
                  </Form.Field>
                </div>
              </div>

              <Button
                color="green"
                type="submit"
              
                className="mt-3"
              >
                İlanı yayınla
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
