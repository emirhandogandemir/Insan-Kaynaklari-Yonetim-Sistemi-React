import React, { useEffect, useState } from "react";
import JobAdvertService from "../services/jobAdvertService";
import { Table, Header, Button, Rating, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { addToFavorite } from "../store/actions/favoriteAction";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import CityFilter from "../layouts/cityFilter/CityFilter";
import WorkTypeFilter from "../layouts/workTypeFilter/WorkTypeFilter";
import { Pagination } from "semantic-ui-react";
import "react-toastify/dist/ReactToastify.min.css";
export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]); //default

  const [filteredJobAdverts, setFilteredJobAdverts] = useState(null); //filtrelenmiş state

  const [selectedCity, setSelectedCity] = useState(null);

  const [selectedWorkType, setSelectedWorkType] = useState(null);

  const [activePage, setActivePage] = useState(1);

  const [pageSize, setPageSize] = useState(2)

  const dispatch = useDispatch();



  let jobAdvertService = new JobAdvertService();
  useEffect(() => {
   
    jobAdvertService
      .getAllActiveTrueAndOpenTrueJobAdverts(activePage,pageSize)
      .then((result) => setJobAdverts(result.data.data));
  }, [activePage,pageSize]);

  useEffect(() => {
    let filteredJobByJobAdverts;
    if (selectedCity && selectedWorkType) {
      filteredJobByJobAdverts = jobAdverts.filter(
        (jobAdvert) =>
          jobAdvert.city.id === selectedCity &&
          jobAdvert.workType.id === selectedWorkType
      );
    } else if (selectedCity) {
      filteredJobByJobAdverts = jobAdverts.filter(
        (jobAdvert) => jobAdvert.city.id === selectedCity
      );
    } else if (selectedWorkType) {
      filteredJobByJobAdverts = jobAdverts.filter(
        (jobAdvert) => jobAdvert.workType.id === selectedWorkType
      );
    } else {
      filteredJobByJobAdverts = null;
    }
    setFilteredJobAdverts(filteredJobByJobAdverts);
  }, [selectedCity, selectedWorkType]);

  const handleAddToFavorite = (jobAdvert) => {

    dispatch(addToFavorite(jobAdvert));
    toast.success("jobAdvert.jobPosition.jobTitle");
    console.log(jobAdvert.jobPosition.jobTitle);
  };

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
    // console.log(pageInfo.activePage)
    //console.log(pageInfo)
  };

  let pageAble=(pageNo)=>{
    
    setPageSize(pageNo);
      
  }
  

  return (
    <div>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            {" "}
            <CityFilter onSelect={handleSelectCity} />
          </Grid.Column>
          <Grid.Column>
            {" "}
            <WorkTypeFilter onSelect={handleSelectWorkType} />
          </Grid.Column>
        </Grid.Row>

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
            {filteredJobAdverts
              ? filteredJobAdverts.map((jobAdvert) => (
                  <Table.Row key={jobAdvert.id}>
                    <Table.Cell>{jobAdvert.jobPosition.jobTitle}</Table.Cell>
                    <Table.Cell>{jobAdvert.description}</Table.Cell>
                    <Table.Cell>{jobAdvert.city.name}</Table.Cell>
                    <Table.Cell>
                      {jobAdvert.salaryMin}-{jobAdvert.salaryMax}
                    </Table.Cell>
                    <Table.Cell>{jobAdvert.publishedAt}</Table.Cell>

                    <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                    <Table.Cell>
                      {" "}
                      <Link to={`/jobadverts/${jobAdvert.id}`}>
                        <Button color="grey">Details</Button>
                      </Link>
                    </Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                ))
              : jobAdverts.map((jobAdvert) => (
                  <Table.Row key={jobAdvert.id}>
                    <Table.Cell>{jobAdvert.jobPosition.jobTitle}</Table.Cell>
                    <Table.Cell>{jobAdvert.description}</Table.Cell>
                    <Table.Cell>{jobAdvert.city.name}</Table.Cell>
                    <Table.Cell>
                      {jobAdvert.salaryMin}-{jobAdvert.salaryMax}
                    </Table.Cell>
                    <Table.Cell>{jobAdvert.publishedAt}</Table.Cell>

                    <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                    <Table.Cell>
                      {" "}
                      <Link to={`/jobadverts/${jobAdvert.id}`}>
                        <Button color="grey">Details</Button>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Rating
                        onClick={() => handleAddToFavorite(jobAdvert)}
                        icon="heart"
                        defaultRating={0}
                        maxRating={1}
                      />
                    </Table.Cell>
                  </Table.Row>
                ))}
          </Table.Body>
          <Pagination
            activePage={activePage}
            onPageChange={onChange}
            totalPages={10}
          />
          <p></p>
             Bir sayfada kaç iş ilanı görmek istersiniz
       <Button.Group>
    <Button  onClick={()=>pageAble(10)}>10</Button>
    <Button.Or />
    <Button onClick={()=>pageAble(20)}>20</Button>
    <Button.Or />
    <Button>50</Button>
    <Button.Or />
    <Button>100</Button>
  </Button.Group>
        </Table>
      </Grid>
    </div>
  );

  function handleSelectWorkType(workTypeId) {
     setSelectedWorkType(workTypeId);
  }

  function handleSelectCity(cityId) {
    setSelectedCity(cityId);
  }
}
