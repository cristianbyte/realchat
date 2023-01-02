import Contact from './Contact'
import image from '../assets/9307451.png'
import './navbar.css'
import { useState } from 'react';


export default function Navbar(){

    const [activeContact, setActiveContact] = useState(null);

    const activateContact = (id) => {
      setActiveContact(id);
    }
    
    return (
        <div className="navbar">
            {/* map.contacts */}
            <Contact onClick={() => activateContact(1)} active={activeContact === 1} name='Me' picture={image}   state='state__active' message='Hola ¿Como estás?, tenia tiempo sin saber de ti' notification='1'/>
            <Contact onClick={() => activateContact(2)} active={activeContact === 2} name='Less' picture={image} state='state__active' message='Hola' notification='1'/>
            <Contact onClick={() => activateContact(3)} active={activeContact === 3} name='Maic' picture={image} state='state__active' message='Hola' notification='1'/>
        </div>
    )
}