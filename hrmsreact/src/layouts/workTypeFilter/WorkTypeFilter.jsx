import React ,{useState}from 'react'
import { useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react'
import WorkTypeService from '../../services/workTypeService'

export default function WorkTypeFilter({onSelect}) {
    
    const [workTypes, setWorkTypes] = useState([])
    
    useEffect(()=>{
        let workTypeService = new WorkTypeService();
    
        workTypeService.getWorkTypes().then((result)=>setWorkTypes(result.data.data))
    },[])
    const workTypeOption = workTypes.map((workType,index)=>({
        key: index,
        text:workType.workType,
        value: workType.id, 
      }))

      function handleChange(event,data){
        onSelect(data.value)
        
          }

    return (
        <div>
             <Dropdown 
            placeholder="Çalışma tipi seçiniz"
            selection
            search
            clearable
            options={workTypeOption}
            onChange={handleChange}
            />
        </div>
    )
}
