import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
    
        const [jsonData, setJsonData] = useState([]);
      
        useEffect(() => {
          // Fetch the JSON data when the component mounts
          fetch('http://localhost:8000/user')
          .then(res => {
            return res.json();
          })
          .then(data=>{
            console.log(data);
            setJsonData(data)
          });

        }, []);

    return ( 
        <div className="display bg bg-dark">
            <Container>
                <Row>
                    <Col>
                    <h2>User Data:</h2>
                        
                        <Container>
                        <Table responsive="sm" striped bordered variant="dark" hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>password</th>
                                </tr>
                            </thead>
                            <tbody>
                            {jsonData.map((data) => (
                                

                                <tr>
                                <td>{data.id}</td>
                                <td>{data.fullname}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
                                </tr>
                                    ))}
                                
                                
                            </tbody>
                            </Table>
                            </Container>
                    </Col>
                </Row>
            </Container>
        <Link className="btn btn-primary" to="/login">Register</Link></div>
        
     );
}
 
export default Home;