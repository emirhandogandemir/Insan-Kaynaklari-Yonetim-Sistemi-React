import React, { useEffect, useState } from "react";
import CityService from "../../services/cityService";
import { Dropdown } from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";
import { useParams } from "react-router";
export default function CityFilter({onSelect}) {


  const [cities, setCities] = useState([]);
useEffect(()=>{
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
},[])
   

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));

  return (
    <div>
      <Dropdown
        placeholder="şehir seçiniz"
        selection
        search
        clearable
        options={cityOption}
        onChange={handleChange}
      />
    </div>
  );

  function handleChange(event,data){
onSelect(data.value)

  }
}
