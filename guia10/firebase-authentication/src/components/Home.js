import React, { Component } from "react";
import withAuthorization from "./withAuthorization";
import { db } from "../firebase";

class HomePage extends Component {
  state = {
    users: null,
    username: "",
    loading: true
  };

  componentDidMount() {
    const { loggedUser } = this.props;
    db.doGetAnUnser(loggedUser.uid).then(res => {
      this.setState({
        username: res.val().username,
        loading: false
      });
    });
  }

  render() {
    const { users, username, loading } = this.state;
    return (
      <div>
        <h1>Home</h1>
        {!loading && <p className="centered">Bienvenido {username}!</p>}

        <p style={{ marginTop: "80px" }}>
          Si estas viendo esto, es porque iniciaste sesion.
        </p>
        {/* {!!users && <UserList users={users} />} */}
      </div>
    );
  }
}


const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
