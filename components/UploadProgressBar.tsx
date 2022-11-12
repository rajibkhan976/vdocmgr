import ProgressBar from "react-bootstrap/ProgressBar";

type UploadProgressBarProps = {
  progress: number;
};

const UploadProgressBar = (props: UploadProgressBarProps) => {
  const { progress } = props;
  return <ProgressBar now={progress} />;
};

export default UploadProgressBar;
