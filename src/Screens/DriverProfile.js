import React from 'react'
import Header from "../Components/Myheader/Header"
import DriversList from "../Components/Profile/DriversList"
import RequestedDrivers from "../Components/Profile/RequestedDrivers"

import { Container, Row, Col } from 'reactstrap';

const DriverProfile = () => {
    return (
        <div>
            <Header location="profile" />
            <div>
                <Container>
                    <Row style={{paddingTop:"0.5rem" , paddingBottom:"0.5rem" }}>
                        <Col lg={6}  >
                            <Row style={{ height: '50%' }} ><RequestedDrivers /></Row>
                            <Row style={{ height: '50%' }} ><h3>Create Mini Accont</h3></Row>
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
