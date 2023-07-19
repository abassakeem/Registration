
import { ButtonGroup, Col, Container,Image,Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import {FcGoogle,AiOutlineApple} from "react-icons/fc"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import "./login.css"
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {

    const[id,setId] = useState()
    const[fullname,setFullname] = useState()
    const[password,setPassword] = useState()
    const[email,setEmail] = useState()
    // const[id,set] = useState("")
    // const[id,set] = useState("")
    // const[id,set] = useState("")



    const navigate=useNavigate();
    // const handleSubmit=(e)=>{
    //     e.preventDefault();

    //     let regObj={id,fullname,email,password}
        
        // fetch("http://localhost:8000/user",{
        //     method:"POST",
        //     headers:{'content-type':'application/json'},
        //     body:JSON.stringify(regObj)
        // }).then((res)=>{
        //     toast.success("Registered sucessfully")
        //     navigate("/")
        // }).catch((err)=>{
        //     toast.error("Registration failed" + err.message)
        // });
        const handleSubmit = async (event) => {
            event.preventDefault();
        
            const loginData = {
              email,
              fullname,
              password,
            };
        
        try {
            const response = await axios.post('http://localhost:8000/user', { fullname,email, password });
           console.log("success")
           navigate("/")
          } catch (error) {
            console.log("fail")
          }
    }


    return ( 
        
        <div className="loginSection">
            <Navbar expand="lg" className="musicshop-nav">
            <Container fluid>
                <Navbar.Brand className="musicshop-brand" href="#home">MUSICSHOP</Navbar.Brand>
                
            </Container>
            </Navbar>
            <div className="login-form-section">
                <div className="top-section d-flex align-items-center justify-content-center">
                    <Row>
                        <Col xs="12" className="d-flex align-items-center justify-content-center">

                            <div className="d-flex align-items-center justify-content-center google continue-option continue-option-1">
                                <FcGoogle /> 
                                <span>Continue with Google</span>
                                
                            </div>
                        </Col>
                        <Col xs="12" className="d-flex align-items-center justify-content-center">
                            <div className="d-flex align-items-center justify-content-center apple continue-option continue-option-2">
                            <FcGoogle />
                            <span>Continue with Apple </span>
                            </div>
                        </Col>
                        <Col xs="12" className="d-flex align-items-center justify-content-center">
                            <div className="d-flex align-items-center justify-content-center apple continue-option -3">
                            
                            <span>Continue with Phone number </span>
                            </div>
                        </Col>
                    </Row>
                </div>
          
            <hr />
            <div className="bottom-section">
                <Row>

                
           
            
<Col xs="12" className="d-flex align-items-center justify-content-center">
            <Form className='login-page-form' onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label  className='email-text'>Email address</Form.Label>
                <Form.Control className='email-input' type="email" onChange={e=>setEmail(e.target.value)} value={email} placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label  className='fullname-text'>Fullname</Form.Label>
                <Form.Control className='fullname-input' type="text" onChange={e=>setFullname(e.target.value)} value={fullname} placeholder="Enter fullname" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='password-text'>Password</Form.Label>
                <Form.Control className="password-input" type="password" onChange={e=>setPassword(e.target.value)} value={password} placeholder="Password" />
            </Form.Group>
            <Form.Check className='remember-me-button
            ' 
                type="switch"
                id="custom-switch"
                label="Remember me"
            />
            <Button   type="submit" className='login-submit-button'>
                Log in
            </Button>
            </Form>
            </Col>
            </Row>
    </div>
    </div>
        
           
            </div>
        

     );
}
 
export default LogIn;