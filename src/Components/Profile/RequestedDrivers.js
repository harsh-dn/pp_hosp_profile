import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';
import { Profiler } from 'react';
import "../../css/profile.css";

const RequestedDrivers = () => {

    const [reqDrivers, setReqDrivers] = useState([])

    useEffect(() => {
        axios.get('https://server.prioritypulse.co.in/hosp/requestedDrivers', {
            headers: { Authorization: localStorage.getItem("token") },
        })
            .then((res) => {
                setReqDrivers(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    console.log(reqDrivers);

    return (
        <div className="reqdriver" >
            <h4 style={{color: "#390999", fontWeight:"800"}}>Drivers Request</h4>
            <Table hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Invitation</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {reqDrivers.map((driver, id) => {
                        return (
                            <tr key={id}>
                                <td>{driver.name}</td>
                                <td>{driver.mobileNo}</td>
                                <td><button>Delete</button><button>Delete</button></td>
                            </tr>
                        )
                    })} */}
                    <tr >
                        <td>Harsh</td>
                        <td>23451673837</td>
                        <td><button className="acceptbutton">Accept</button> <span></span><button className="rejectbutton">Reject</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default RequestedDrivers