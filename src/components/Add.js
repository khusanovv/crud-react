import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <FormGroup className="mb-3" controlId="formName">
          <FormControl
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3" controlId="formAge">
          <FormControl
            type="text"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button type="submit"></Button>
      </Form>
    </div>
  );
};

export default Add;
