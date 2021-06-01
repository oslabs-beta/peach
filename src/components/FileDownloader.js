/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import useFileDownloader from "./hooks/useFileDownloader";

// Temporary hardwiring of the Download path
const files = [
  {
    name: "GitHub db",
    file:
      "https://docs.github.com/public/schema.docs.graphql",
    filename: "schema.graphql",
  },
  {
    name: "Music db",
    file:
      "https://raw.githubusercontent.com/mapr-demos/mapr-db-graphql-sample/master/mapr-rest/src/main/webapp/WEB-INF/classes/schema.graphqls",
    filename: "schema.graphql",
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
            {/* <input type="text" id="url" name="schemaUrl" placeholder="your schema URL..."/> */}
          </form>
          <div className="row mt-3">
            {files.map((file, idx) => (
              <div className="col" key={idx}>
                <div className="card">
                  <div className="card-body" key={idx}>
                    <h5 className="card-title">{file.name}</h5>
                    <a
                      className="btn btn-primary cursor-pointer text-white"
                      onClick={() => {
                          download(file);
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
