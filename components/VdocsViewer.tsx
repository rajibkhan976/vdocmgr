import { useEffect } from "react";

const VdocsViewer = () => {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(event.data);
    });
  });

  return (
    <div className="d-flex justify-content-center mt-5">
      <iframe
        src="/ixbrl/gleif-2021-12-31-en-viewer.html"
        title="iframe Example 1"
        width="1000"
        height="800"
      ></iframe>
    </div>
  );
};

export default VdocsViewer;
