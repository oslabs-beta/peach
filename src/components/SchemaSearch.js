import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
const SchemaSearch = ({ schemaList }) => {
  const items = []
  for(let i = 0; i < schemaList.length; i++){
    items.push(
      {id: i,
      name: schemaList[i].name,
      key: i
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <h2> Schema Search </h2>
          <ReactSearchAutocomplete
            items={items}
          />
        </div>
      </header>
    </div>
  )
};

export default SchemaSearch