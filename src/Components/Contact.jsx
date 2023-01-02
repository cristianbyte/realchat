import './contact.css'

export default function Contact({ name, picture, state, message, notification, grup = false, active=false, onClick}){

    return (
        <div onClick={onClick} className={active?'active contact':'contact'}>
            {grup?          
                <div className="contactImgage--group">
                    <img src={picture} alt="profile"/>
                    <img src={picture} alt="profile"/>
                </div>
                :
                <div className="contactImage">
                    <img srcSet={picture} className='contactImage__pic' alt="profilito"/>
                    <span className={state}></span>
                </div>

            }
            <div className="contactFoo">
                <h4 className='contactFoo__name' >{name}</h4>
                <p className='contactFoo__msm'>{message}</p>
                <span className='contactFoo__bell'>{notification}</span>
            </div>
        </div>
    )
}