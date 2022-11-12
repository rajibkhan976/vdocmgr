import Image from "next/image";

type VdocsIntroProps = {
  handleShowDialog: (isUploadMode: boolean) => void;
};

const VdocsIntro = (props: VdocsIntroProps) => {
  const { handleShowDialog } = props;

  return (
    <div className="w-full mx-auto mt-4 border" style={{ height: "80vh" }}>
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-start flex-grow-1 fw-semibold ps-2">
          Name
        </div>
        <div className="d-flex justify-content-start flex-grow-1 fw-semibold ps-2">
          Created by
        </div>
        <div className="d-flex justify-content-start flex-grow-1 fw-semibold ps-2">
          Date created
        </div>
        <div className="d-flex justify-content-start flex-grow-1 fw-semibold ps-2">
          Status
        </div>
        <div className="d-flex justify-content-start flex-grow-1 fw-semibold ps-2">
          Signed date
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 pt-5 pb-4">
        <Image
          src={"/assets/images/VdocIntroIcon.svg"}
          width={180}
          height={153}
        />
      </div>
      <div className="d-flex justify-content-center">
        <p className="fw-semibold">
          List of your vDocs will appear here. Start by:
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn"
          style={{
            backgroundColor: "#0A4BB8",
            color: "#FBFBFB",
            borderRadius: "1px",
          }}
          onClick={() => handleShowDialog(false)}
        >
          Create vDoc
        </button>
        <button
          type="button"
          className="btn ms-3"
          style={{ backgroundColor: "#D8D8D8", borderRadius: "1px" }}
          onClick={() => handleShowDialog(true)}
        >
          Upload vDoc
        </button>
      </div>
    </div>
  );
};

export default VdocsIntro;
