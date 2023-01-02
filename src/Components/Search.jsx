import './search.css'
import {BiSearch} from 'react-icons/bi'

export default function Search(){
    return (
        <div className="search">
            <div className="inputSearch">
                <BiSearch className='searchIcon'/>
                <input type="text" placeholder='Search...' id="#search" />
            </div>
        </div>
    )
}