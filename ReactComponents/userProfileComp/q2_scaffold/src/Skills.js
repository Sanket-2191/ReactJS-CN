// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.
// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import React from "react";


export default class Skills extends React.Component {
    constructor() {
        super();
        this.state = {
            skills: []
        }
    }

    render() {
        <>
            <ul className="skillsList">
                {this.state.skills.map((e, i) => (
                    <li key={i} className="skill">
                        {e}
                    </li>
                )
                )
                }
            </ul>

        </>
    }
}
