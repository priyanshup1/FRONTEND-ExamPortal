//import React,{useState} from 'react';
//import { Navbar } from 'react-bootstrap';
import './style/sidebar.css'
import { Route, Link,  Switch} from "react-router-dom";
import Login from "./login";
import Profile from './profile';
const Dashboard = () => {
        return(
            <div>
             <h2>Welcome {localStorage.getItem("username")}</h2>



             <div className="container-sidebar-user">
        

        <ul className="sidebar">
                
            {/* <li><span><i className="fa fa-home"></i></span><span>Home</span></li> */}
            <li><span><i className="fa fa-users"></i></span><span><Link to="/user/profile" style={{ textDecoration: 'none' ,color:'orange' }} >View Profile</Link></span></li>
            <li><span><i className="fa fa-book"></i></span><span>Take Test</span></li>
            {/* <li><span><i className="fa fa-bookmark"></i></span><span>Bookmarks</span></li> */}
            <li><span><i className="fa fa-gear"></i></span><span><Link to="/login" style={{ textDecoration: 'none' ,color:'orange' }}>Logout</Link></span></li>

            <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route  exact path="/user/profile" component={Profile}/>
            </Switch>
       
 

        </ul>
        {/* <div>
                <h2>Yo just a test</h2>
                </div> */}

        <div className="content">

        </div>
    </div>





        </div>
        );

    
}

export default Dashboard;