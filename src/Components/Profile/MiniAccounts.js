import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';
import { Col, CustomInput, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



const MiniAccounts = () => {

    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("Admin");
    const [password, setPassword] = useState("");
    const [showHome, setShowHome] = useState(false);
    const [showTrack, setShowTrack] = useState(false);
    const [showPast, setShowPast] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showDriverList, setShowDriverList] = useState(false);
    const [showDriverListAction, setShowDriverListAction] = useState(false);
    const [showRequest, setShowRequest] = useState(false);
    const [showRequestAction, setShowRequestAction] = useState(false);
    const [showMiniAcco, setShowMiniAcco] = useState(false);
    const [showMiniAccoActions, setShowMiniAccoActions] = useState(false);
    const [showMiniAccoDelete, setShowMiniAccoDelete] = useState(false);
    const [showForm, SetShowForm] = useState(false);

    const data = {
        "email": { email },
        "userType": { userType },
        "password": { password },
        "showHome": { showHome },
        "showTrack": { showTrack },
        "showPast": { showPast },
        "showProfile": { showProfile },
        "showDriverList": { showDriverList },
        "showDriverListAction": { showDriverListAction },
        "showRequest": { showRequest },
        "showRequestAction": { showRequestAction },
        "showMiniAcco": { showMiniAcco },
        "showMiniAccoActions": { showMiniAccoActions },
        "showMiniAccoDelete": { showMiniAccoDelete }
    }

    const sendData = (e) => {
        console.log(data);
        axios.post('https://server.prioritypulse.co.in/hosp/createMini', 
        { data: {data}, headers: { "Authorization": localStorage.getItem("token") } })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="miniaccount" >
            <h4 style={{ color: "#390999", fontWeight: "800" }}>Mini Accounts</h4>
            {showForm ?
                <div className="miniform">
                    <Form>
                        <FormGroup row>
                            <Label sm={4}>Email</Label>
                            <Col sm={8}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={4}>Password</Label>
                            <Col sm={8}>
                                <Input type="password" name="password" id="examplePassword" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={4}>User Type</Label>
                            <Col sm={8}>
                                <Input type="select" name="select" id="exampleSelect" value={userType} onChange={(e) => setUserType(e.target.value)}>
                                    <option>Admin</option>
                                    <option>Staff</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={4}>Controls</Label>
                            <Col  sm={8} style={{textAlign:"start"}}>
                                <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"  label="See Home Page" value={showHome} onChange={(e) => setShowHome(!showHome)} />
                                <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="See TrackAmbulance Page" value={showTrack} onChange={(e) => setShowTrack(!showTrack)} />
                                <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="See PastRide Page" value={showPast} onChange={(e) => setShowPast(!showPast)} />
                                <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="See profile Page" value={showProfile} onChange={(e) => setShowProfile(!showProfile)} />
                                <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="See Driver List" value={showDriverList} onChange={(e) => setShowDriverList(!showDriverList)} />
                                <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Perform Driver Action" value={showDriverListAction} onChange={(e) => setShowDriverListAction(!showDriverListAction)} />
                                <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="See Driver Request" value={showRequest} onChange={(e) => setShowRequest(!showRequest)} />
                                <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Perform Request Action" value={showRequestAction} onChange={(e) => setShowRequestAction(!showRequestAction)} />
                                <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="See Mini Accounts" value={showMiniAcco} onChange={(e) => setShowMiniAcco(!showMiniAcco)} />
                                <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Change Mini Account Action" value={showMiniAccoActions} onChange={(e) => setShowMiniAccoActions(!showMiniAccoActions)} />
                                <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Delete Mini Account" value={showMiniAccoDelete} onChange={(e) => setShowMiniAccoDelete(!showMiniAccoDelete)} />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button onClick={() => sendData()}>Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                : null}
            <Button onClick={() => SetShowForm(!showForm)}>Add An Account</Button>
        </div>
    )
}

export default MiniAccounts