// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/home';
import LoginForm from './Components/LoginForm';
import Register from './Components/Register';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" exact element={<HomePage />} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;




