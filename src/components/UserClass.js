import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1> Count :- {count}</h1>
        <button onClick={() => {
            this.setState({count:count + 1})
        }}>Increase Count</button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Prahlad Nagar</h3>
      </div>
    );
  }
}

export default UserClass;
