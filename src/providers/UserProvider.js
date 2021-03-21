  
import React, { Component, createContext } from "react";
import { auth } from "../firebase";


export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null
  };
  
  componentDidMount = async () => { 
    await auth.onAuthStateChanged(userAuth => {
      this.setState({ user: userAuth});
      console.log("mounting component");
    });
};

  render() {
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;