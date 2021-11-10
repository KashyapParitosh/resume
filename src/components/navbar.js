import { Component } from "react";

class Navbar extends Component {
  state = {
    isactive: false,
  };
  render() {
    return (
      <div className="nav">
        <div className="nameInNav">
          <p>Paritosh Kashyap</p>
        </div>
        <ul className={"ulInNav " + (this.state.isactive ? "show" : "")}>
          <li className= "navChilds">Home</li>
          <li className= "navChilds">About</li>
          <li className= "navChilds">Portfolio</li>
          <li className= "navChilds">Resume</li>
          <li className= "navChilds">Contact</li>
        </ul>
        <div
          onClick={() => {
            if (this.state.isactive) {
              this.setState({ isactive: false });
            } else {
              this.setState({ isactive: true });
            }
          }}
        >
          <i className="fas fa-bars fontIcon"></i>
        </div>
      </div>
    );
  }
}

export default Navbar;
