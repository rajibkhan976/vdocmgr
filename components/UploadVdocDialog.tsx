import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useState } from "react";
import UploadProgressBar from "./UploadProgressBar";
import className from "classnames";

type UploadVdocProps = {
  show: boolean;
  isUploadMode: boolean;
  handleClose: () => void;
  setShowVdoc: (status: boolean, isViewMode: boolean) => void;
};

const UploadVdocDialog = (props: UploadVdocProps) => {
  const { show, isUploadMode, handleClose, setShowVdoc } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [vdocsFiles, setVdocsFiles] = useState<any>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);

  let progress = 0;

  const addProgress = (): number => {
    setUploadProgress(progress);
    if (progress !== 100) {
      progress += 10;
      addProgress();
    }
    return progress;
  };

  const resetStateOnclose = () => {
    handleClose();
    setVdocsFiles(null);
    setIsUploaded(false);
    setUploadProgress(0);
  };

  const onSubmit = (data: any) => {
    if (data.vdocs) {
      setVdocsFiles(data.vdocs[0]);

      let progress: number = addProgress();

      setTimeout(
        () => {
          if (progress === 100) {
            setIsUploaded(true);
          }
        },
        2000,
        progress
      );

      setTimeout(() => {
        setShowVdoc(true, false);
        resetStateOnclose();
      }, 4000);
    }
  };

  return (
    <>
      <Modal show={show} onHide={resetStateOnclose} centered>
        <div className="d-flex justify-content-between p-4">
          <h4 className="d-inline-block">
            {isUploadMode ? "Upload vDoc" : "Create vDoc"}
          </h4>
          <div
            className="d-flex rounded-0 justify-content-center align-items-center custom-cross-btn cursor-pointer"
            onClick={() => resetStateOnclose()}
            style={{
              backgroundColor: "#D8D8D8",
              color: "#000000",
              borderRadius: "1px",
            }}
          >
            <img src={"/assets/images/CrossIcon.svg"} className="img-fluid" />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <label
              htmlFor="upload-vdoc"
              className={className(
                "custom-file-control-label border text-center",
                isUploaded ? "py-2" : "py-5"
              )}
            >
              {vdocsFiles ? (
                <div className="px-2">
                  {isUploaded ? (
                    <div
                      className="d-flex p-2"
                      style={{ backgroundColor: "#EEEEEE" }}
                    >
                      <img
                        src={"/assets/images/VdocIcon.svg"}
                        className="img-fluid d-inline-block"
                      />
                      <div
                        className="d-flex flex-column justify-content-start ps-3 text-start"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <span className="text-dark fw-semibold">
                          fileName.html (.zip)
                        </span>
                        <span
                          className="fw-semibold"
                          style={{ color: "#000000", opacity: "0.5" }}
                        >
                          Uploaded 7/27/2022, 1:37:45 PM
                        </span>
                      </div>
                    </div>
                  ) : (
                    <UploadProgressBar progress={uploadProgress} />
                  )}
                </div>
              ) : (
                <>
                  Drop your documents here to upload or&nbsp;
                  <span className="border p-2">Browse files</span>
                </>
              )}
            </label>
            <input
              id="upload-vdoc"
              className="custom-file-control"
              type="file"
              {...register("vdocs", { required: true })}
              onChange={(event) =>
                event.target.files && setVdocsFiles(event.target.files[0])
              }
            />
            {errors?.vdocs?.type === "required" && (
              <p className="text-danger mt-2">vDoc is required!</p>
            )}
            <div className="d-flex justify-content-end mt-4">
              {vdocsFiles && (
                <input
                  type="submit"
                  className="btn rounded-0 me-2"
                  style={{ backgroundColor: "#C4C4C4" }}
                  value={isUploadMode ? "Upload & Explore" : "Ceate & Sign"}
                  disabled={vdocsFiles ? false : true}
                />
              )}
            </div>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
};

export default UploadVdocDialog;
