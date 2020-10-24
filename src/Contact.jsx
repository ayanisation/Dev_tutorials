import React, { useState } from "react";
import { Form } from "react-bootstrap";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import Button from "@material-ui/core/Button";

const Contact = () => {
  let [newUser, setUser] = useState({
    fullName: "",
    id: "",
    msg: "",
  });
  let [al, setAl] = useState({
    cname: "trans",
    rname: "",
    message: "",
  });
  const editUser = (e) => {
    let { name, value } = e.target;
    setUser((preUser) => {
      return {
        ...preUser,
        [name]: value,
      };
    });
  };

  const showUser = () => {
    if (newUser.id.length < 2 || newUser.fullName.length < 2) {
      setAl({
        cname: "alert alert-danger my-3 trans",
        rname: "alert",
        message: "Error! Invalid Name or Email.",
      });
    } else if (newUser.msg.length === 0){
      setAl({
        cname: "alert alert-danger my-3 trans",
        rname: "alert",
        message: "Error! Empty Message/Query field.",
      });
    }
    else {
      console.log(newUser.id + "  " + newUser.fullName);
      setUser({
        fullName: "",
        id: "",
        msg: "",
      });
      setAl({
        cname: "alert alert-success my-3 trans",
        rname: "alert",
        message: "Thank you! Your details have been recieved. We'll get in touch.",
      });
    }
    setTimeout(()=>{
      setAl({
        cname: "trans",
        rname: "",
        message: "",
      });
    }, 2500);
  };

  return (
    <div style={{ padding: "0 20rem 5rem " }} className="container">
      <div className={al.cname} role={al.rname}>
        {al.message}
      </div>
      <div className="my-5">
        <h1 className="text-center">Please fill out the following details</h1>
        <hr />
      </div>

      <br />
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>
            <strong>Enter Full Name</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={newUser.fullName}
            onChange={editUser}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <strong>Enter Email</strong>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="id"
            value={newUser.id}
            onChange={editUser}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <br />
        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            <strong>Enter your message/query</strong>
          </label>
          <textarea
            type="text"
            placeholder="Message/Query"
            name="msg"
            value={newUser.msg}
            onChange={editUser}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <br />
        <div className="text-center">
          <Button variant="contained" onClick={showUser}>
            <AddToQueueIcon />
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
