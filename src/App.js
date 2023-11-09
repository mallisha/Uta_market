// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Components/home';
import Buy from './Components/HomePage';
import LoginForm from './Components/LoginForm';
import Register from './Components/Register';
import Sellform from './Components/Sellform';
import Dashboard from './Components/Dashboard';
import ProfileEdit from './Components/ProfileEdit';
import Myprofile from './Components/Myprofile';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/sell" element={<Sellform />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profileedit" element={<ProfileEdit />} />
                    <Route path="/buy" element={<Buy />} />
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/Myprofile" element={<Myprofile />} />
                    {/* Add other routes as needed */}
                </Routes>
                
            </div>
        </Router>
    );
}

export default App;




