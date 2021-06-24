import React, { useEffect, useState } from 'react'
import CityService from '../../services/cityService';
import { Dropdown } from 'semantic-ui-react';
export default function CityFilter() {
    
    const [cities, setCities] = useState([])
    

    useEffect(()=>{
        let cityService = new CityService();
        cityService.getCities().then((result)=>setCities(result.data.data))

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
            options={cityOption}
            />
        </div>
    )
}
