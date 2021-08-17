import React, { useEffect, useState } from "react";
import "../../styles/downloader.css";
import { ProgressBar } from "react-bootstrap";
import Axios from "axios";

const Downloader = ({ files = [], remove }) => {
  return (
    <div className="downloader">
      <div className="card">
        <div className="card-header">File Downloader</div>
        <ul className="list-group list-group-flush">
          {files.map((file, idx) => (
            <DownloadItem
              key={idx}
              removeFile={() => remove(file.downloadId)}
              {...file} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

  // Later will fill this boilerplate with the current download information
const DownloadItem = ({ name, file, filename, removeFile }) => {
  const [downloadInfo, setDownloadInfo] = useState({
    progress: 0,
    completed: false,
    total: 0,
    loaded: 0,
  });

  // Side effect, to show ho much of the download progress remains
  useEffect(() => {
    const options = {
      onDownloadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;

        setDownloadInfo({
          progress: Math.floor((loaded * 100) / total),
          loaded,
          total,
          completed: false,
        });
      },
    };

    // Using Axios built-in Blob class to display the download information
    Axios.get(file, {
      responseType: "blob",
      ...options,
    }).then(function (response) {
      // console.log(response);

      const url = window.URL.createObjectURL(
        new Blob([response.data], {
          type: response.headers["content-type"],
        })
      );

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();

      // displays info on lines 27-32 boilerplate
      setDownloadInfo((info) => ({
        ...info,
        completed: true,
      }));

      // takes the file out of the blurb after 4 seconds
      setTimeout(() => {
        removeFile();
      }, 4000);
    });
  }, []);

  const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-12 d-flex">
          <div className="d-inline font-weight-bold text-truncate">{name}</div>
          <div className="d-inline ml-2">
            <small>
              {downloadInfo.loaded > 0 && (
                <>
                  <span className="text-success">
                  &nbsp;  {formatBytes(downloadInfo.loaded)} &nbsp;
                  </span>
                  / &nbsp; {formatBytes(downloadInfo.total)}
                </>
              )}

              {downloadInfo.loaded === 0 && <>Initializing...</>}
            </small>
          </div>
          <div className="d-inline ml-2 ml-auto">
            {downloadInfo.completed && (
              <span className="text-success">
                Completed 
              </span>
            )}
          </div>
        </div>
        <div className="col-12 mt-2">
          <ProgressBar
            variant="success"
            now={downloadInfo.progress}
            striped={true}
            label={`${downloadInfo.progress}%`}
          />
        </div>
      </div>
    </li>
  );
};

export default Downloader;
