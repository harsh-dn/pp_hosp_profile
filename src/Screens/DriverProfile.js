import React from 'react'
import Header from "../Components/Myheader/Header"
import DriversList from "../Components/Profile/DriversList"
import MiniAccounts from "../Components/Profile/MiniAccounts"
import RequestedDrivers from "../Components/Profile/RequestedDrivers"
import { Container, Row, Col } from 'reactstrap';
import "../css/profile.css";


const DriverProfile = () => {
    return (
        <div >
            <Header location="profile" />
            <div className="driverprofile">
                <Container>
                    <Row style={{paddingTop:"0.5rem" , paddingBottom:"0.5rem" }}>
                        <Col lg={6}  >
                            <Row style={{ height: '50%' }} ><RequestedDrivers /></Row>
                            <Row style={{ height: '50%' }} ><MiniAccounts /></Row>
                        </Col>
                        <Col lg={6}  >
                            <DriversList />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default DriverProfile
