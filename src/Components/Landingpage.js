import React, { Component } from 'react'
import {Image} from 'react-bootstrap'
import {Link} from "react-router-dom"

export default class Landingpage extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="logoimage">
                    <Image className="bg-image" src="/images/MYtineraryLogo.png" style = {{width: 300,height: 125}}/>
                    </div>
                    <div className="introduction">
                    <p>Find your perfect trip, designed by insiders who know and love their cities. </p>
                    </div>
                    <div className="startBrowsing">
                    <h3>Start Browsing</h3>
                    <Link id="citiespage" to="/citiespage">
                    <Image className="bg-image" src="/images/circled-right-2.png" style = {{width: 150,height: 150}} />
                    </Link>
                    </div>
                    <p>Want to build your own MYtinerary?</p>
                    <div className="loginSignin">
                    <Link id="login" to="/loginpage">Login in</Link>
                    <Link id="signin" to="/signinpage">Sign in</Link>
                    </div>
                    <footer>
                    <Image className="bg-image" src="/images/homeIcon.png" style = {{width: 50,height: 50}} />
                    </footer>
                </div>
            </div>
        )
    }
}
