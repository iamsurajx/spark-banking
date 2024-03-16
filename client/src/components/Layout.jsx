import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  // State to manage the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <NavLink className="navbar-brand" to="/">BanKing System </NavLink> */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu on click
            aria-controls="navbarText"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/view-all-customers" activeClassName="active" onClick={() => setIsMenuOpen(false)}>View All Customers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/view-all-transation" activeClassName="active" onClick={() => setIsMenuOpen(false)}>View All Transactions</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;


// import { Outlet, NavLink } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarText">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/">Home </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/view-all-customers">View All Customers</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/view-all-transation">View All Transactions</NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <Outlet />
//     </>
//   )
// };

// export default Layout;