import { useState, useCallback } from "react";
import DataTable from "./DataTable";
import UploadVdocDialog from "./UploadVdocDialog";
import SignVdocDialog from "./SignVdocDialog";
import VdocsViewer from "./VdocsViewer";

const Dashboard = () => {
  const [showUploadDialog, setShowUploadDialog] = useState<boolean>(false);
  const [showSignDialog, setShowSignDialog] = useState<boolean>(false);
  const [showVdoc, setShowVdoc] = useState<boolean>(false);
  const [isViewMode, setIsViewMode] = useState<boolean>(false);
  const [isUploadMode, setIsUploadMode] = useState<boolean>(false);

  const handleCloseUploadDialog = useCallback(
    () => setShowUploadDialog(false),
    []
  );

  const handleShowUploadDialog = useCallback((isUploadMode: boolean) => {
    setShowUploadDialog(true);
    setIsUploadMode(isUploadMode);
  }, []);

  const handleCloseSignDialog = useCallback(() => setShowSignDialog(false), []);
  const handleShowSignDialog = useCallback(() => setShowSignDialog(true), []);

  const handleSetShowVdoc = useCallback(
    (status: boolean, isViewMode: boolean): void => {
      setShowVdoc(status);
      setIsViewMode(isViewMode);
    },
    []
  );

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="d-flex justify-content-between">
          {showVdoc ? (
            <>
              <div
                className="d-flex rounded-0 justify-content-center align-items-center custom-cross-btn cursor-pointer"
                onClick={() => setShowVdoc(false)}
                style={{
                  backgroundColor: "#D8D8D8",
                  color: "#000000",
                  borderRadius: "1px",
                }}
              >
                <img
                  src={"/assets/images/CrossIcon.svg"}
                  className="img-fluid"
                />
              </div>
              <div className="d-flex position-relative custom-tooltip-container">
                <span className="text-dark">fileName.vdoc</span>&nbsp;
                <span
                  className="fw-semibold"
                  style={{ color: "#000000", opacity: "0.5" }}
                >
                  Unsigned
                </span>{" "}
                <div className="custom-tooltip position-absolute z-10 px-2 py-1">
                  fileName file signed successfully
                </div>
              </div>
              <div className="d-flex">
                <button
                  type="button"
                  className="btn rounded-0"
                  onClick={handleShowSignDialog}
                  style={{
                    backgroundColor: "#0A4BB8",
                    color: "#FBFBFB",
                    borderRadius: "1px",
                  }}
                  disabled={isViewMode}
                >
                  Sign
                </button>
              </div>
            </>
          ) : (
            <div>
              <button
                type="button"
                className="btn rounded-0 me-3"
                onClick={() => handleShowUploadDialog(false)}
                style={{
                  backgroundColor: "#0A4BB8",
                  color: "#FBFBFB",
                  borderRadius: "1px",
                }}
              >
                Create new
              </button>
              <button
                type="button"
                className="btn rounded-0 me-2"
                onClick={() => handleShowUploadDialog(true)}
                style={{ backgroundColor: "#C4C4C4", borderRadius: "1px" }}
              >
                {"Upload"}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {showVdoc ? (
            <VdocsViewer />
          ) : (
            <DataTable
              setShowVdoc={handleSetShowVdoc}
              handleShowDialog={handleShowUploadDialog}
            />
          )}
        </div>
      </div>
      <UploadVdocDialog
        show={showUploadDialog}
        isUploadMode={isUploadMode}
        handleClose={handleCloseUploadDialog}
        setShowVdoc={handleSetShowVdoc}
      />
      <SignVdocDialog
        show={showSignDialog}
        handleClose={handleCloseSignDialog}
      />
    </div>
  );
};

export default Dashboard;
