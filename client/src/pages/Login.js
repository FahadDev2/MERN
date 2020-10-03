import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';

const Login = (props) => {

    return(


    
        <div style={{width: '50%', alignContent:'center', alignItems:"center", margin:'auto'}} >
                       
       
                       <Jumbotron  className="jumboo">
        <h1 style={{textAlign: "center", paddingTop: 1}}>Login</h1>

      <Form>
      <Row form>

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
      </Row>

 
      <Button className="logIn" >Login</Button>
 
    </Form>

   
      </Jumbotron>
       
    </div>

      
    );
};

export { Login };