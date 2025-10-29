import React from 'react';

export default function Childcomp(props) {
    return (
        <div>
            <h2>child components</h2>
            <p>{props.company},</p>
            <p>Welcome, {props.name}!</p>
        </div>
    );
}

