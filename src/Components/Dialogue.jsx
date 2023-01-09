import './dialogue.css'
import Message from './Message'
import { useState } from 'react';

export default function Dialogue(){

    const [colorScroll, setColorScroll] = useState('#18f26400');

    function disableScrolling() {
        setColorScroll('#18f26400')
    }
    
    function enableScrolling() {
        setColorScroll('#18f264')
    }

    return (
        <div className="dialogue" style={{'--foo': colorScroll}} onScroll={enableScrolling} onMouseOver={enableScrolling}
        onMouseLeave={disableScrolling} >

            <Message message="Hey, what's up?" date='2:00' me={true} />
            <Message me={false} message="Not much, just hanging out at home. What about you?" date='2:01' />
            <Message message="Same here. Just finished a workout 💪 and now I'm relaxing on the couch." date='2:02' me={true} />
            <Message me={false} message="Nice, I need to start working out again. I've been feeling kind of sluggish lately." date='2:03' />
            <Message message="Yeah, it's definitely good for your body and mind. Have you tried any new workouts or exercises?" date='2:04' me={true} />
            <Message me={false} message="Not really, I've just been doing the usual running and lifting weights. I need to switch it up and try something new." date='2:05' />
            <Message message="There are so many options out there, you could try yoga, Pilates, dancing, the possibilities are endless! 🌟" date='2:06' me={true} />
            <Message me={false} message="Yeah, you're right. I'll have to look into it. Thanks for the suggestion. 🙏" date='2:07' />
            <Message message="No problem, always happy to help. Speaking of trying new things, have you ever thought about traveling somewhere new?" date='2:08' me={true} />
            <Message me={false} message="I've definitely thought about it. There are so many places on my bucket list that I want to visit. 🌍" date='2:09' />
            <Message message="Same here! I've always wanted to go to Japan. The culture and food are just so fascinating to me. 🇯🇵" date='2:10' me={true} />
            <Message me={false} message="Yeah, Japan is definitely high on my list too. The cherry blossoms in spring are supposed to be beautiful. 🌸" date='2:11' />
            <Message message="I've heard that too, it's definitely on my list of things to see. Speaking of traveling, have you ever been to Europe?" date='2:12' me={true} />
            <Message me={false} message="Yes, I've been to a few countries in Europe. It was such an amazing experience. The history, architecture, and food are all incredible. 😍" date='2:13' />

        </div>
    )
}