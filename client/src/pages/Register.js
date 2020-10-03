import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';


const Register = (props) => {
    return(
     
        <div style={{width: '50%', alignContent:'center', alignItems:"center", margin:'auto'}}>

        <Jumbotron  className="jumboo">
        <h1 style={{textAlign: "center", paddingTop: 1}}>Register</h1>

      <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Enter Your Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Enyer YourEmail" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup > 
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup > 
                <br/>
            <Button className="signIn">Sign in</Button>
          </FormGroup>
        </Col>
      </Row>

 
   
 
    </Form>

   
      </Jumbotron>
    </div>

      
    );
};

export { Register };