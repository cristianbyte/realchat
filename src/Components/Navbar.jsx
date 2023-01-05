import Contact from './Contact'
import Search from './Search'
import Me from '../assets/9307454.png'
import Leslie from '../assets/9307422.png'
import Nin from '../assets/9307766.png'
import Future from '../assets/9307768.png'
import './navbar.css'
import { useState } from 'react';

    
export function disableScrolling(root) {
    setTimeout(()=>{
        root.style.setProperty('--foo', '#18f26488');
        setTimeout(()=>{
            root.style.setProperty('--foo', '#18f26444');
            setTimeout(()=>{
                root.style.setProperty('--foo', '#18f26400');
            }, 60);
        }, 60);
    }, 60);
}

export function enableScrolling(root) {
    root.style.setProperty('--foo', '#18f264');
}


export default function Navbar(){

    const [activeContact, setActiveContact] = useState(null);

    const activateContact = (id) => {
      setActiveContact(id);
    }

    const root = document.querySelector('.navbar');
    
    return (
        <div className="navbar">
            <Search/>
            {/* map.contacts */}
            <div className="navbar__chats" onScroll={()=>{enableScrolling(root)}} onMouseOver={()=>{enableScrolling(root)}}
            onMouseLeave={()=>{disableScrolling(root)}} >
                <Contact onClick={() => activateContact(1)} active={activeContact === 1} name='Felipe' picture={Me}   state='avalible' message='Hola ¿Como estás?, tenia tiempo sin saber de ti' notification='1'/>
                <Contact onClick={() => activateContact(3)} active={activeContact === 3} name='Leslie' picture={Leslie} state='avalible' message='Ese es mi nombre' notification='1'/>
                <Contact onClick={() => activateContact(2)} active={activeContact === 2} name='Jack' picture={Nin} state='busy' message='Tengo una nueva misión' notification='3'/>
                <Contact onClick={() => activateContact(4)} active={activeContact === 4} name='Sam' picture={Future} state='text-me' message='Everything is possible, the only limit is your mind.' notification='1'/>
            </div>
        </div>
    )
}