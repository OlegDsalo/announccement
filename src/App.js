import Announcement from "./components/announcement/Announcement";
import AddAnnouncement from "./components/addAnnouncement/AddAnnouncement";
import Homepage from "./components/homepage/Homepage";
import {Routes, Route, Link} from "react-router-dom";
import SingleAnnouncement from "./components/singel-announcement/SingleAnnouncement";
import EditAnnouncement from "./components/editAnc/EditAnnouncement";
import Error from "./components/Page404/Error";
import './App.scss';

function App() {

    return (
        <div className="App">
            <header>
                <Link to='/'>Home </Link>
                <Link to='/announcement'>Announcement </Link>
                <Link to='/add'>Add announcement </Link>
            </header>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/announcement' element={<Announcement/>}/>
                <Route path='/add' element={<AddAnnouncement/>}/>
                <Route path='/announcement/:id' element={<SingleAnnouncement/>}/>
                <Route path='/announcement/:id/edit' element={<EditAnnouncement/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </div>
    );
}

export default App;
