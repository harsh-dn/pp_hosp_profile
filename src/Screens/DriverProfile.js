import React from 'react'
import Header from "../Components/Myheader/Header"
import DriversList from "../Components/Profile/DriversList"
import MiniAccounts from "../Components/Profile/MiniAccounts"
import RequestedDrivers from "../Components/Profile/RequestedDrivers"
//import { Container, Row, Col } from 'reactstrap';
import "../css/profile.css";
import Grid from '@material-ui/core/Grid';


const DriverProfile = () => {
    return (
        <div >
            <Header location="profile" />
            <div className="driverprofile">
                <Grid container spacing={3}>
                    <Grid item xs sm={12} md={4} lg={4}  className="profilecoumn"  >
                        <RequestedDrivers />
                    </Grid>
                    <Grid item xs sm={12} md={4} lg={4} className="profilecoumn">
                        <DriversList />
                    </Grid>
                    <Grid item xs sm={12} md={4} lg={4} className="profilecoumn">
                        <MiniAccounts />
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default DriverProfile
