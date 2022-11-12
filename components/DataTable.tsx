import VdocsIntro from "./VdocsIntro";
import { useState } from "react";
import CopiedNotification from "./CopiedNotification";

const emptyVdocs: any = [];

const Vdocs: any[] = [
  {
    name: "invoice.vdoc",
    createdBy: "Alice Doe",
    createdDate: "00/00/0000",
    status: "Unsigned",
    signedDate: "-",
    actions: ["Sign", "View", "Share"],
  },
  {
    name: "invoice.vdoc",
    createdBy: "Alice Doe",
    createdDate: "00/00/0000",
    status: "Unsigned",
    signedDate: "-",
    actions: ["Sign", "View", "Share"],
  },
  {
    name: "invoice.vdoc",
    createdBy: "Alice Doe",
    createdDate: "00/00/0000",
    status: "Unsigned",
    signedDate: "-",
    actions: ["Sign", "View", "Share"],
  },
  {
    name: "invoice.vdoc",
    createdBy: "Alice Doe",
    createdDate: "00/00/0000",
    status: "Unsigned",
    signedDate: "-",
    actions: ["Sign", "View", "Share"],
  },
  {
    name: "invoice.vdoc",
    createdBy: "Alice Doe",
    createdDate: "00/00/0000",
    status: "Unsigned",
    signedDate: "-",
    actions: ["Sign", "View", "Share"],
  },
  {
    name: "invoice.vdoc",
    createdBy: "Alice Doe",
    createdDate: "00/00/0000",
    status: "Unsigned",
    signedDate: "-",
    actions: ["Sign", "View", "Share"],
  },
  {
    name: "invoice.vdoc",
    createdBy: "Alice Doe",
    createdDate: "00/00/0000",
    status: "Unsigned",
    signedDate: "-",
    actions: ["Sign", "View", "Share"],
  },
  {
    name: "invoice.vdoc",
    createdBy: "Alice Doe",
    createdDate: "00/00/0000",
    status: "Unsigned",
    signedDate: "-",
    actions: ["Sign", "View", "Share"],
  },
];

type DataTableProps = {
  setShowVdoc: (status: boolean, isViewMode: boolean) => void;
  handleShowDialog: (isUploadMode: boolean) => void;
};

const DataTable = (props: DataTableProps) => {
  const { setShowVdoc, handleShowDialog } = props;
  const [show, setShow] = useState<number[]>([]);

  const handleSetShow = (index: number): void => {
    setShow([index]);
    // setTimeout(() => {
    //   setShow([]);
    // }, 3000);
  };

  return (
    <>
      {Array.isArray(Vdocs) && Vdocs.length > 0 ? (
        <div className="table-responsive mt-4">
          <table className="table border">
            <thead>
              <tr>
                <th>Name</th>
                <th>Created By</th>
                <th>Date created</th>
                <th>Status</th>
                <th>Signed date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Vdocs.map((item, index) => (
                <tr key={index}>
                  <td className="align-middle px-2">{item.name}</td>
                  <td className="align-middle px-2">{item.createdBy}</td>
                  <td className="align-middle px-2">{item.createdDate}</td>
                  <td className="align-middle px-2">{item.status}</td>
                  <td className="align-middle px-2">{item.signedDate}</td>
                  <td className="align-middle px-2 d-flex justify-content-end">
                    {item.actions.includes("Sign") && (
                      <button
                        type="button"
                        className="btn bg-white border rounded-1 me-2"
                        onClick={() => setShowVdoc(true, false)}
                      >
                        Sign
                      </button>
                    )}
                    {item.actions.includes("View") && (
                      <button
                        type="button"
                        className="btn bg-white border rounded-1 me-2"
                        onClick={() => setShowVdoc(true, true)}
                      >
                        View
                      </button>
                    )}
                    {item.actions.includes("Share") && (
                      <div className="position-relative">
                        <img
                          className="img-fluid cursor-pointer"
                          src={"/assets/images/ShareIconBtn.svg"}
                          width={40}
                          height={38}
                          onClick={() => handleSetShow(index)}
                        />
                        <CopiedNotification
                          show={show}
                          setShow={handleSetShow}
                          id={index}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <VdocsIntro handleShowDialog={handleShowDialog} />
      )}
    </>
  );
};

export default DataTable;
