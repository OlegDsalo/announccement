import { Routes, Route, Link } from 'react-router-dom';
import Announcements from './components/Annoucements/Announcements';
import AddAnnouncement from './components/Add/AddAnnouncement';
import Homepage from './components/homepage/Homepage';
import SingleAnnouncement from './components/singel-announcement/SingleAnnouncement';
import EditAnnouncement from './components/Edit/EditAnnouncement';
import Error from './components/Page404/Error';
import './App.scss';

const App = () => (
  <div className="App">
    <header>
      <Link to="/">Home</Link>
      <Link to="/announcement">Announcement</Link>
      <Link to="/add">Add announcement </Link>
    </header>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/announcement" element={<Announcements />} />
      <Route path="/add" element={<AddAnnouncement />} />
      <Route path="/announcement/:id" element={<SingleAnnouncement />} />
      <Route path="/announcement/:id/edit" element={<EditAnnouncement />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </div>
);

export default App;
