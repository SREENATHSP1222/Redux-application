import React,{useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {GetClaimList} from '../../store/actions/ClaimSumActions.js'
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';


class Claimsummary extends React.Component {
   
 componentDidMount(){
  this.props.dispatch(GetClaimList());
 }
 
  
  render() {
   //declaration
    const { claimList } = this.props;

                   
                        return (
                          <div>
                         
                            <div id="claimsummary">
                               <Nav fill variant="tabs" defaultActiveKey="/home">
                      <Nav.Item>
                        <Nav.Link href=""><Link to="home" className="navitem">Home</Link></Nav.Link>
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
                    
                    
                    <Table  striped bordered hover size="sm"  responsive="md" responsive="sm" className="claimsumTable">
                      <thead>
                        <tr>
                          <th>Employee ID</th>
                          <th>Employee Name</th>
                          <th>Claim Number</th>
                          <th>Claim Type</th>
                          <th>Claim Program</th>
                          <th>Claim Start Date</th>
                          <th>Claim End Date</th>
                          <th>Update</th>
                        </tr>
                      </thead>
     
                                        <tbody>
                                        { 
                                        claimList.map(u =>

                                              <tr>
                                                <td>{u.empId}</td>
                                                <td>{u.empName}</td>
                                                <td>{u.claimNumber}</td>
                                                <td >{u.claimType}</td>
                                                <td >{u.claimProgram}</td>
                                                <td>{u.claimStartDate}</td>
                                                <td>{u.claimEndDate}</td>
                                                <td><Link  to={{pathname: "/UpdateClaim",state:{id: u.id, empId : u.empId,empName:u.empName,claimNumber:u.claimNumber,
                                                claimType:u.claimType,claimProgram:u.claimProgram,claimStartDate:u.claimStartDate,
                                                claimEndDate:u.claimEndDate  }}} >Update </Link></td>
                                              </tr>
                                        )
                                              }
                                          

                                        </tbody>

                                        </Table>



            
            
            
            
            



            </div>

        </div>
                                    

                        );
                      
                      
}
}
//mapping
const mapStateToProps = (state) =>{
  console.log("state ",state);
  return{
    claimList: state.claim.items,
 
  };
}

export default connect(mapStateToProps)(Claimsummary);   