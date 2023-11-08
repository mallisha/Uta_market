// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Components/home';
import LoginForm from './Components/LoginForm';
import Register from './Components/Register';
import Sellform from './Components/Sellform';
import Dashboard from './Components/Dashboard';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/sell" element={<Sellform />} />
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/" exact element={<HomePage />} />

                    {/* Add other routes as needed */}
                </Routes>
                
            </div>
        </Router>
    );
}

export default App;




