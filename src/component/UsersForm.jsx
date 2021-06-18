import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";

class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", gen: "" };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
    };
    this.props.addUser(newUser);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  };
  render() {
    return (
      <div>
        <Row>
          <Form onSubmit={this.handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="yourname@website.com"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              name="gen"
              type="Number"
              value={this.state.gen}
              onChange={this.handleChange}
            />
            <Button type="submit"> Add User</Button>
          </Form>
        </Row>
      </div>
    );
  }
}

export default UsersForm;
