import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, deleteUser } from "./Store/usersActions";
import UsersForm from "./component/UsersForm";
import UsersInfo from "./component/UsersInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

class App extends Component {
  addNewUser = (newUser) => {
    this.props.addUser(newUser);
  };

  removeUser = (user_id) => {
    this.props.deleteUser(user_id);
  };

  // userEdit = (user_id) => {
  //   this.props.editUser(user_id);
  // };

  render() {
    return (
      <div className="App">
        <Col>
          <Row>
            <UsersForm addUser={this.addNewUser} />
          </Row>
        </Col>
        <div>
          <Col>
            <Row>
              {this.props.users.map((item) => {
                return (
                  <UsersInfo
                    key={item.id}
                    id={item.id} // this makes it easier for id to be acccessible from userInfo component
                    name={item.name}
                    email={item.email}
                    gen={item.gen}
                    deleteUser={this.removeUser}
                    // editUser={this.userEdit}
                  />
                );
              })}
            </Row>
          </Col>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
