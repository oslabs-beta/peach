/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFileDownloader from "./hooks/useFileDownloader";

// Temporary hardwiring of the Download path
const files = [
  {
    name: "Test File",
    file:
      "https://docs.github.com/public/schema.docs.graphql",
    filename: "newSchema.graphql",
  }
];

const FileDownloader = () => {
  
  const [downloadFile, downloaderComponentUI] = useFileDownloader();

  const download = (file) => downloadFile(file);

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <form action="" className="my-2">
            {/* <label for="fname">Schema Url:</label> */}
            <input type="text" id="url" name="schemaUrl" placeholder="your schema URL..."/>
          </form>
          <div className="row mt-3">
            {files.map((file, idx) => (
              <div className="col" key={idx}>
                <div className="card">
                  <div className="card-body" key={idx}>
                    <h5 className="card-title">{file.name}</h5>
                    <a
                      className="btn btn-primary cursor-pointer text-white"
                      onClick={() => download(file)}
                    >
                      Download <FontAwesomeIcon icon="download" />
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
