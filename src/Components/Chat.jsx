import './chat.css'
import {IoMdSettings} from 'react-icons/io'
import Contact from './Contact'
import Me from '../assets/9307454.png'

export default function Chat(){
    return (
        <div className="chat">
            <div className="chatHeader">
                <Contact name='Me' picture={Me} state='avalible' />
                <IoMdSettings className='chatHeader__settings'/>
            </div>
        </div>
    )
}