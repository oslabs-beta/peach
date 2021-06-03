/* 
stateless functional presentation component solely 
responsible for displaying a single Schema within 
the Schema Display Container
*/ 

import React from 'react';

const SchemaDisplay = ({schemaName, schemaFields, ref}) => {

    return(
        <li ref={ref} className='schema-display' style={{margin: 0, padding: 0}}>
            <p className='schemaName'>{schemaName}</p>
            {schemaFields.map(field => {
                return (<p key={schemaName += field.type} className="schema">
                            {field.type}
                        </p>)
            })}
        </li>
    )
}

export default SchemaDisplay;
