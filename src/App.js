// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/home';
import LoginForm from './Components/LoginForm';
import Register from './Components/Register';
import Sellform from './Components/Sellform';
import Dashboard from './Components/Dashboard';
import ProfileEdit from './Components/ProfileEdit';
import Myprofile from './Components/Myprofile';
import Buy from './Components/HomePage';
import Sellerinfo from './Components/Sellerinfo';
import ItemList from './Components/Itemlist';
import ChangePassword from './Components/changepassword';
import Logout from './Components/Logout';
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
                    <Route path="/" exact element={<Home />} />
                    <Route path="/buy" element={<Buy />} />
                    <Route path="/Myprofile" element={<Myprofile />} />
                    <Route path="/" exact element={<ItemList />}/>
                    <Route path="/seller/:itemId" element={<Sellerinfo />} />
                    <Route path="/changepassword" element={<ChangePassword />} />
                    <Route path="/logout" element={<Logout />} />
                    {/* Add other routes as needed */}
                </Routes>
                
            </div>
        </Router>
    );
}

export default App;




