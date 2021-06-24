import React from 'react'
import { useSelector } from 'react-redux'
import { Dropdown} from 'semantic-ui-react'

export default function FavoriteSummary() {
    
    const {favoriteItems} = useSelector(state => state.favorite)
    
    
    return (
        <div>
             <Dropdown item text="Favorileriniz">
            <Dropdown.Menu>
                {
                    favoriteItems.map((favoriteItem)=>(
                        <Dropdown.Item key={favoriteItem.id}>{favoriteItem.jobAdvert.jobPosition.jobTitle}
                     
                        </Dropdown.Item>
                    ))
                }
        
            </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}
