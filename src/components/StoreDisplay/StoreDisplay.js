import React, { useState, useEffect } from 'react';
import RelayEnvironment from '../../relay/RelayEnvironment';
const store = RelayEnvironment.getStore();

const StoreDisplay = ({queryToLoad, variables}) => {

    const [storeDisplay, setStoreDisplay] = useState(store.getSource());

    // update storeDisplay every time queryToLoad or variables change
    useEffect(() => {
        setStoreDisplay(store.getSource());
    }, [queryToLoad, variables])

    return (
        <div className='container'>
            <pre style={{maxHeight: '55vh', overflow: scroll}}>
                {JSON.stringify(storeDisplay, null, 2)}
            </pre>
            <div align="center">
                <button 
                    variant="success"
                    className="m-1"
                    size="sm"
                    onClick={() => store.snapshot()} >
                        Save Snapshot
                </button>
                <button 
                    variant="secondary"
                    className="m-1"
                    size="sm"
                    onClick={() => {
                    store.restore();
                    setStoreDisplay(store.getSource());
                }}>
                    Restore Last Snapshot
                </button>
            </div>
        </div>
        
    )
};

export default StoreDisplay;