import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
      {/* firstname, last name, email, username, password, confirm password */}
   <body class="text-center">
      <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please register</h1>
        <label for="inputFirst" class="sr-only">First Name</label>
        <input type="text" id="inputFirst" class="form-control" placeholder="First Name" required autofocus/>
        <label for="inputLast" class="sr-only">Last Name</label>
        <input type="text" id="inputLast" class="form-control" placeholder="Last Name" required autofocus/>
        <label for="inputEmail" class="sr-only">Email Address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email Address" required/>
        <label for="inputUserName" class="sr-only">User Name</label>
        <input type="userName" id="inputUserName" class="form-control" placeholder="User Name" required/>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
        <label for="inputConfirmPassword" class="sr-only">Confirm Password</label>
        <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Confirm Password" required/>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
      </form>
      </body>



      </div>
    );
  }
}

export default Register;
