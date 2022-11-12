import Modal from "react-bootstrap/Modal";
import { useState } from "react";

type UploadVdocProps = {
  show: boolean;
  handleClose: () => void;
};

const SignVdocDialog = (props: UploadVdocProps) => {
  const { show, handleClose } = props;
  const [selectedFacts, setSelectedFacts] = useState<any[]>([
    {
      name: "Lorem ipsum  2",
      date: "1 Jan 2021 to 31 Dec 2021",
    },
    {
      name: "Lorem ipsum  2",
      date: "1 Jan 2021 to 31 Dec 2021",
    },
    {
      name: "Lorem ipsum  2",
      date: "1 Jan 2021 to 31 Dec 2021",
    },
    {
      name: "Lorem ipsum  2",
      date: "1 Jan 2021 to 31 Dec 2021",
    },
    {
      name: "Lorem ipsum  2",
      date: "1 Jan 2021 to 31 Dec 2021",
    },
    {
      name: "Lorem ipsum  2",
      date: "1 Jan 2021 to 31 Dec 2021",
    },
    {
      name: "Lorem ipsum  2",
      date: "1 Jan 2021 to 31 Dec 2021",
    },
    {
      name: "Lorem ipsum  2",
      date: "1 Jan 2021 to 31 Dec 2021",
    },
  ]);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <div className="d-flex flex-column pt-4">
          <h5 className="d-inline-block ps-3">Signing confirmation</h5>
          <div
            className="ps-3"
            style={{
              color: "#000000",
              opacity: "0.5",
              fontSize: "0.8rem",
            }}
          >
            Do you want to confirm signing this document. Once the document is
            signed no changes can be made you.
          </div>
        </div>
        <Modal.Body style={{ height: "25rem" }}>
          <span
            className="fw-semibold mt-2"
            style={{
              color: "#000000",
              fontSize: "0.8rem",
            }}
          >
            Facts that will be signed:
          </span>
          <div
            className="border p-2"
            style={{ height: "75%", overflowY: "auto" }}
          >
            {Array.isArray(selectedFacts) &&
              selectedFacts.map((item, index) => (
                <div
                  key={index}
                  className="d-flex flex-column mb-2 px-1"
                  style={{ backgroundColor: "#EEEEEE" }}
                >
                  <div
                    style={{
                      color: "#000000",
                      fontSize: "0.8rem",
                    }}
                  >
                    {item?.name}
                  </div>
                  <div
                    style={{
                      color: "#000000",
                      opacity: "0.5",
                      fontSize: "0.8rem",
                    }}
                  >
                    {item?.date}
                  </div>
                </div>
              ))}
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button
              type="button"
              className="btn border rounded-0"
              style={{ borderRadius: "1px" }}
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn rounded-0 me-2"
              style={{ backgroundColor: "#C4C4C4" }}
            >
              {"Confirm & Sign"}
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignVdocDialog;
