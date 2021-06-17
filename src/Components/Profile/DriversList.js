import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';

const DriversList = () => {

    const [drivers, setDrivers] = useState([])

    useEffect(() => {
        axios.get('https://server.prioritypulse.co.in/hosp/alldriver', {
            headers: { Authorization: localStorage.getItem("token") },
        })
            .then((res) => {
                setDrivers(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [drivers])

    // const removeDriver = (e) => {
    //     console.log(e);
    //     axios.delete('https://server.prioritypulse.co.in/hosp/rejectRequest', { "driverid": e },
    //         {
    //             headers: { Authorization: localStorage.getItem("token") }
    //         })
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

    return (
        <div >
            <h4 style={{ color: "#390999", fontWeight: "800", textAlign: "center" }}>Drivers Details</h4>
            <div className="driverlist">
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {drivers.map((driver, id) => {
                            return (
                                <tr key={id}>
                                    <td>{driver.name}</td>
                                    <td>{driver.mobileNo}</td>
                                    <td><button className="deletebutton">Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default DriversList