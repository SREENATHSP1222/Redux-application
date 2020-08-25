
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } 
from 'react-router';
import Image from 'react-bootstrap/Image';

class Home extends React.Component {
  constructor(props){
   
    super(props);

     this.state= {

    //  claimList:[]
     };
     this.state = {
      time:new Date().toLocaleString()

    };
    this.props={

    }
    }
   render() {

      return (


        
        <div>
           <div className="timeDiv">
     

     { this.state.time}
     
     
     
           </div>
                    <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="/claimsummary"><Link to="claimsummary" className="navitem">Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1"> <Link to="claimsummary">Claim Summary </Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2"><Link to="about">About Us</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2"><Link to="contactus">Contact Us</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2"><Link to="login">Log Out</Link></Nav.Link>
                </Nav.Item>
              </Nav>
                  <div className="homeStyle">
                  Welcome to Claim Summary Application
                  
                    </div>
                    <Image className="imgclass" src="/images/image.jpg" fluid />
                   
                   
        
        </div>
      );
   }
}

export default Home;
