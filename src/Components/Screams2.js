import React, { Component } from 'react'
import Scream from "./Scream"
import axios from "axios"
import { connect } from "react-redux"
import { getScreams } from "../store/actions/likeButtonActions"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"

class Screams2 extends Component {
    
    componentDidMount() {
        this.props.getScreams()
      }
    render() {
        const { screams, loading } = this.props.data;
        let recentScreamsMarkup = !loading ? (
            screams.map((scream) => 
                <Scream key={scream.screamId} scream={scream} />
            )
        ) : (
            <p>Loading...</p>
            )
        return (
            <div>
                <Grid container spacing ={16}>
                    <Grid item sm={8} xs={12}>
                        {recentScreamsMarkup}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Screams2.propTypes = {
    getScreams: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    data:state.data
})

export default connect (mapStatetoProps, { getScreams}) (Screams2)
