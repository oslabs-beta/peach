import React, { useState, useEffect }from 'react';
import RelayEnvironment from '../relay/RelayEnvironment';
import Button from 'react-bootstrap/Button';
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
    useEffect(() => setStoreDisplay(store.getSource()), [queryToLoad, variables])

    return (
        <div>
            <pre style={{maxHeight: '55vh', overflow: scroll}}>
                {JSON.stringify(storeDisplay, null, 2)}
            </pre>
            <div align="center">
                <Button 
                    variant="success"
                    className="m-1"
                    size="sm"
                    onClick={() => store.snapshot()} >
                        Save Snapshot
                    </Button>
                <Button 
                    variant="secondary"
                    className="m-1"
                    size="sm"
                    onClick={() => {
                    store.restore();
                    setStoreDisplay(store.getSource());
                }}>
                    Restore Last Snapshot
                </Button>
                {/* <input type='text' value={record} onChange={(e) => updateRecord(e.value)}></input>
                <button onClick={() => store.lookup(record)}>Click To Get Record</button> */}
            </div>
        </div>
        
    )
};

export default StoreDisplay;