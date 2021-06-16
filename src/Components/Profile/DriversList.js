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
    }, [])

    return (
        <div style={{textAlign:"center"}}>
            <Table hover bordered responsive>
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
                                <td><button>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default DriversList