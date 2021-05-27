/* 
stateless functional presentation component solely 
responsible for displaying a single Schema within 
the Schema Display Container
*/ 

import React from 'react';

const SchemaDisplay = ({schemaName, schemaFields}) => {

    return(
        <li className='schema-display' style={{margin: 0, padding: 0}}>
            <pre className='schemaName'>{schemaName}</pre>
            {schemaFields.map(field => {
                return <pre className="schema">{field.type}</pre>
            })}
        </li>
    )
}

export default SchemaDisplay;
