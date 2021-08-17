import Downloader from "../Downloader/index";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const useFileDownloader = () => {
  const [files, setFiles] = useState(() => []);

  // Sets up the file to be downloaded
  const download = (file) =>
    setFiles((fileList) => [...fileList, { ...file, downloadId: uuid() }]);

  // with the unique id, removes the file from the list (blurb)
  const remove = (removeId) =>
    setFiles((files) => [
      ...files.filter((file) => file.downloadId !== removeId),
    ]);

  return [
    (e) => download(e),
    files.length > 0 ? (
      <Downloader files={files} remove={(e) => remove(e)} />
    ) : null,
  ];
};

export default useFileDownloader;
