import React, { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
const SchemaSearch = props => {
  const { schemaList } = props;
  const items = []

  for(let i = 0; i < schemaList.length; i++){
    
    items.push(
      {id: i,
      name: schemaList[i].name,
      key: i
      });
      console.log(schemaList.[i].name)
  }
  // console.log(items[0])

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <h1> Schema Search </h1>
          {/* <p>{Schema}</p> */}
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
      </header>
    </div>
  )
};

export default SchemaSearch