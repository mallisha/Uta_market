
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './sidebar.css';
// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//       <button onClick={toggleSidebar} className="toggle-button">
//         {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
//       </button>
//       <div className="sidebar-content">
//         <h2>Hello!</h2>
//         <ul>
//        <li> <Link to="/Myprofile" className="button-link">
//               <button>My Profile</button>
//         </Link> </li>
//        <li> Change Password </li>
//           <li>Logout</li>
//         </ul>
        
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isSidebarOpen ? 'Hide' : '='}
      </button>
      <div className="sidebar-content">
      {isSidebarOpen && ( 
          <h2>Hello!</h2> )}
            <ul> 
          {isSidebarOpen && ( // Only render when the sidebar is open
          
            <li>
              <Link to="/Myprofile" className="button-link">
                <button>My Profile</button>
              </Link>
            </li>
          )}
          {isSidebarOpen && ( // Only render when the sidebar is open
            <li>
            <Link to="/changepassword" className="button-link">
              <button>Change Password</button>
            </Link>
          </li>
          )}
          {isSidebarOpen && ( // Only render when the sidebar is open
             <Link to="/Logout" className="button-link">
             <button>Logout</button>
           </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
