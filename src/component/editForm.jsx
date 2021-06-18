import React, { Component } from "react";
import { connect } from "react-redux";
import { editUser } from "../Store/usersActions";

export class editForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      email: props.user.email,
      gen: props.user.gen,
    };
    this.id = props.match.params.id;
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const updated_Info = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
    };
    this.props.editUser(this.id, updated_Info);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit"> Update User</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find((user) => user.id === ownProps.match.params.id),
});

const mapDispatchToProps = {
  editUser: editUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(editForm);
