import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

type CopiedNotificationProps = {
  id: number;
  show: number[];
  setShow: (status: number) => void;
};

const CopiedNotification = (props: CopiedNotificationProps) => {
  const { id, show, setShow } = props;

  const handleCopyLink = (link: number): void => {
    navigator.clipboard.writeText(link.toString());
  };

  return (
    <>
      {show.includes(id) ? (
        <div className="position-absolute custom-toast z-20">
          <div className="w-full">
            <img
              className="d-inline-block ps-2 img-fluid"
              src={"/assets/images/CopyLinkIcon.svg"}
            />
            <span className="ps-2">Share vDoc</span>
            <div className="position-relative mt-3">
              <span className="ps-2 fw-semibold">
                Anyone with the link can view
              </span>
              <span
                className="position-absolute custom-copy-btn d-inline-block cursor-pointer"
                onClick={() => handleCopyLink(id)}
              >
                Copy link
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CopiedNotification;
