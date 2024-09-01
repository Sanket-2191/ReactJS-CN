// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import React from "react";


export default class Hero extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Sanket",
            email: "abc@xyz.com",
            phone: "875628283635",
            address: "ghgja ajbxjavx aaa 234"
        }

    }
    render() {
        <>
            <p>Name:{this.state.name}</p>
            <p>Email:{this.state.email}</p>
            <p>Phone:{this.state.phone}</p>
            <p>Address:{this.state.address}</p>
        </>
    }
}
