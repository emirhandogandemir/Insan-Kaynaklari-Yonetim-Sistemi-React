import React ,{useState}from 'react'
import { useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react'
import WorkTypeService from '../../services/workTypeService'

export default function ü() {
    
    const [workTypes, setWorkTypes] = useState([])
    
    useEffect(()=>{
        let workTypeService = new WorkTypeService();
        workTypeService.getWorkTypes().then((result)=>setWorkTypes(result.data.data))
    })


    const workTypeOption = workTypes.map((workType,index)=>({
        key: index,
        text:workType.workType,
        value: workType.id
      }))

    return (
        <div>
             <Dropdown 
            placeholder="Çalışma tipi seçiniz"
            selection
            options={workTypeOption}
            />
        </div>
    )
}
