import React, { Component } from "react";
import ReactDOM from "react-dom";
import GenNav from '../components/genNav'

import "../styles/custom.css"

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }
    render() {
        return (
            <div>
                <GenNav></GenNav>
                <div className="card">
                    <img src="/../images/profilebg.png" className="card-img-top profile-bg" alt="..." />
                    <img src="/../images/profileimg.png" className="img-thumbnail profile-img" alt="..." />
                    <div className="card-body">
                        <h5 className="profile-name">Ifteher Alom</h5>
                        <hr />
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4 border-right border-left">
                                <h6 className="text-muted">Name</h6>
                                <h6>My Name</h6>
                                <form class="form-inline">
                                    <input type="text" class="form-control mb-2 mr-sm-2" id="updateName" placeholder="Your Name"></input>
                                    <button type="submit" class="btn btn-info btn-sm mb-2">update</button>
                                </form>

                                <br></br>

                                <h6 className="text-muted">Email Address</h6>
                                <h6>myname@gmail.com</h6>
                                <form class="form-inline">
                                    <input type="email" class="form-control mb-2 mr-sm-2" id="updateEmail" placeholder="yourname@mail.com"></input>
                                    <button type="submit" class="btn btn-info btn-sm mb-2">update</button>
                                </form>

                                <br></br>

                                <h6 className="text-muted">Profile Picture</h6>
                                <h6>your pic</h6>
                                <form class="form-inline">
                                    <input type="file" class="form-control-file mb-2 mr-sm-2" id="updatePic"></input>
                                    <button type="submit" class="btn btn-info btn-sm mb-2">update</button>
                                </form>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;