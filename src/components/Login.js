import React, { Component }  from 'react'

class Login extends Component {
  render() {
    return (
      <div>
    <div>
      <h3>Login </h3>
      <form>
        <div>
          <p>
            <input type="email" id="email" placeholder="Email" />
          </p>
          <p>
            <input type="password" id="password" placeholder="Password" />
          </p>
        </div>
      </form>
    </div>
  </div>

    );
  }
}

 export default Login;