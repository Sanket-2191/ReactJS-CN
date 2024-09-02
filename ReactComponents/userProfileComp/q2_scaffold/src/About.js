// Create About component here to display the a small content here.
// In this component use paragraph tag (p) to display the content

import React from "react";


export default class About extends React.Component {
    constructor() {
        super();
        this.state = {
            about: ""
        }
    }

    render() {
        <>
            <p>
                {this.state.about}
            </p>

        </>
    }
}