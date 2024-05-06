import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }

  return (
    <div className="nav-ul li">
      { auth? 
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>
        
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
       
       
           
      </ul>
      :
      <ul className="nav-ul li nav-right">
         <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to='/login'>Login</Link></li>
      </ul>
}
    </div>

  );
};

export default Nav;
