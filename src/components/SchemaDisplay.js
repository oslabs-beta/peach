/* 
stateless functional presentation component solely 
responsible for displaying a single Schema within 
the Schema Display Container
*/ 

import React from 'react';

const SchemaDisplay = ({schema}) => {
    return(
        <li className="schema">
            <p>{schema.schemaText}</p>
        </li>
    )
}

export default SchemaDisplay;