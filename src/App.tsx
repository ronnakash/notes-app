import './App.css';
import NotesList from './components/notes/NotesList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import AuthProvider from './utils/AuthProvider';
import RegisterBox from './components/user/RegisterBox';
import NavBar from './components/nav/NavBar'
import AboutPage from './components/about/AboutPage';
import TermsPage from './components/about/TermsPage';
import PrivacyPage from './components/about/PrivacyPage';
import EditProfile from './components/user/EditProfile';
import HomePage from './components/HomePage';
import LoginPage from './components/user/LoginPage';



const App = () => {
  
  return (
    <AuthProvider>
      <div className="app-container">
        <NavBar/>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/edit_user' element={<EditProfile/>}/>
            <Route path='/terms_of_service' element={<TermsPage/>}/>
            <Route path='/privacy' element={<PrivacyPage/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterBox/>} />
            <Route path='/notes' element={<NotesList/>} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>

  );
};

export default App;



