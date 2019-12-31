import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import GenNav from '../components/genNav'
// import { resolve } from 'dns';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.processLogin = this.processLogin.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    processLogin(e) {
        e.preventDefault();
        let formData = new FormData()
        let email = e.target.elements.email.value
        let password = e.target.elements.password.value
        formData.append('email', email)
        formData.append('password', password)
        // console.log(email, password);
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                // resolve(data.todos)
                // console.log('success')

                localStorage.setItem('xauth', data.token)
                return this.props.history.push('/');     

            } else if (e.target.readyState === 400) {
                return console.log('An error has taken place')
            }
        })
        request.open('POST', `http://localhost:3000/login`)
        request.send(formData)
    }

    isAuthenticated() {
        if(localStorage.getItem('xauth')){
            return this.props.history.push('/');
        }
    }

    render() {
        return (
            <div> 
                {/* {this.isAuthenticated()} */}
                <GenNav></GenNav>
                <br></br>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.processLogin}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                    </div>
                                    <button type="submit" className="btn btn-info">Login</button>
                                    <br></br> <br></br>
                                    <p>or Register from <NavLink to="/register" exact={true}>here</NavLink></p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}

export default Login