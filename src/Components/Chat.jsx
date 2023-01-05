import Input from './Input'
import Dialogue from './Dialogue'
import './chat.css'
import './contact.css'
import {IoMdSettings} from 'react-icons/io'
import Me from '../assets/9307454.png'

export default function Chat(){
    return (
        <div className="chat">

            <div className="chatHeader">
                <div className="contactImage">
                    <img srcSet={Me} className='contactImage__pic' alt="profilito"/>
                </div>
                <div className="contactFoo">
                    <h4 className='contactFoo__name' >Felipe</h4>
                    <p className='contactFoo__msm'>online</p>
                </div>
                <IoMdSettings className='chatHeader__settings'/>
            </div>

            <Dialogue/>

            <Input/>
        </div>
    )
}