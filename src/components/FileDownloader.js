/* 
iterates over the schemaHistory.json to generate buttons that will reload the appropriate schema
*/

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import useFileDownloader from "./hooks/useFileDownloader";
import gqlEndpoint from '../relay/gqlEndpoint';
import schemaHistory from '../database/schemaHistory.json';

const execSync = require('child_process').execSync;

const FileDownloader = () => {
  const [downloadFile, downloaderComponentUI] = useFileDownloader();
  // const download = (file) => downloadFile(file);
  const [schemaName, setSchemaName] = useState(gqlEndpoint.url);

  // set Schema name
  const handleClick = (schema) => {
    setSchemaName(schema.name);
    gqlEndpoint.url = schema.url;
    // const index = schemaHistory.indexOf(a => a.url === schema.url);
    db.addURL(schema.name);
    execSync(`get-graphql-schema ${schema.url} > schema.graphql`, { encoding: 'utf-8' });
  }

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <form action="" className="my-2">
            {/* <input type="text" id="url" name="schemaUrl" placeholder="your schema URL..."/> */}
          </form>
          <div className="row mt-3">
            {schemaHistory.map((schema, idx) => (
              <div className="col" key={idx}>
                <div className="card">
                  <div className="card-body" key={idx}>
                    <h5 className="card-title">{schema.name}</h5>
                    <a
                      className="btn btn-primary cursor-pointer text-white"
                      onClick={() => {
                          handleClick(schema)
                          // download(schema);
                        }
                      }
                    >
                      Download 
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {downloaderComponentUI}
      </div>
    </>
  );
};

export default FileDownloader;
