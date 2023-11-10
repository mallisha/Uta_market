// src/App.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./Components/home";
import Buy from "./Components/Buy";
import LoginForm from "./Components/LoginForm";
import Register from "./Components/Register";
import Sellform from "./Components/Sellform";
import Dashboard from "./Components/Dashboard";
import ProfileEdit from "./Components/ProfileEdit";
import Myprofile from "./Components/Myprofile";
import Sellerinfo from "./Components/Sellerinfo";
import ItemList from "./Components/Itemlist";
import ChangePassword from "./Components/changepassword";
import Logout from "./Components/Logout";
import { useUser } from "./UserContext";

function App() {
  const { userData } = useUser();
  console.log(userData);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            exact
            element={userData ? <Navigate to={"/dashboard"} /> : <LoginForm />}
          />
          <Route path="/register" exact element={<Register />} />
          <Route path="/sell" exact element={<Sellform />} />
          <Route
            path="/dashboard"
            exact
            element={userData ? <Dashboard /> : <Navigate to={"/login"} />}
          />
          <Route path="/profileedit" exact element={<ProfileEdit />} />
          <Route path="/" exact element={<HomePage />} />
          <Route path="/buy" exact element={<Buy />} />
          <Route path="/Myprofile" exact element={<Myprofile />} />
          <Route path="/" exact element={<ItemList />} />
          <Route path="/seller/:itemId" exact element={<Sellerinfo />} />
          <Route path="/changepassword" exact element={<ChangePassword />} />
          <Route path="/logout" exact element={<Logout />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
