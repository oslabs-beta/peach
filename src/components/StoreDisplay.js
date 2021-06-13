import React, { useState, useEffect }from 'react';
import RelayEnvironment from '../relay/RelayEnvironment';
const store = RelayEnvironment.getStore();
// import { RecordSourceSelectorProxy } from 'relay-runtime';
console.log(store);


const StoreDisplay = ({queryToLoad, variables}) => {

    // const [record, setRecord] = useState('get a record');
    // const [snapshot, setSnapshot] = useState();
    const [storeDisplay, setStoreDisplay] = useState(store.getSource());

    // const updateRecord = (value) => {
    //     setRecord(value);
    //     console.log(record);
    // }

    // update storeDisplay every time queryToLoad or variables change
    useEffect(() => {
        setStoreDisplay(store.getSource());
        console.log(store._roots.entries());
    }, [queryToLoad, variables])

    return (
        <div>
            <pre style={{maxHeight: '65vh', overflow: scroll}}>
                {JSON.stringify(storeDisplay, null, 2)}
            </pre>
            <button onClick={() => store.snapshot()}>Save Snapshot</button>
            <button onClick={() => {
                store.restore();
                setStoreDisplay(store.getSource());
            }}>
                Restore Last Snapshot
            </button>
            {/* <input type='text' value={record} onChange={(e) => updateRecord(e.value)}></input>
            <button onClick={() => store.lookup(record)}>Click To Get Record</button> */}
        </div>
        
    )
};

export default StoreDisplay;