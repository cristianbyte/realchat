import {BiSend} from 'react-icons/bi'
import './input.css'

export default function Input(){
    return (
        <div className="input">
            <div className="input__container">
                <input type="text" className='input__input' placeholder="Message" />
                <BiSend className='input__icon' />
            </div>
        </div>
    )
}