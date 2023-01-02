import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
import Navbar from '../Components/Navbar'

export default function Home(){
    return (
        <div className="home">
            <Navbar/>
            <Chat/>
            <Sidebar/>
        </div>
    )
}