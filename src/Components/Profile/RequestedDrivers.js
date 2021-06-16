import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';

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
        <div style={{textAlign:"center"}}>
            <Table hover bordered responsive>
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
                        <td><button>Accept</button> <span></span><button>Reject</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default RequestedDrivers