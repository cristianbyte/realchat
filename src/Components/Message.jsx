import './message.css'

export default function Message({me=true , message, date}){
    return (
        <div className={me?'my__message':'message'}>
            <span className="message__date" >{date}</span>
            <p className="message__text" >{message}</p>
        </div>
    )
}