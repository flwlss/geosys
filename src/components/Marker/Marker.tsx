import "./Marker.scss";

type MarkerProps = {
  title: string;
};

const Marker = ({ title }: MarkerProps) => {
  return (
    <div className="marker">
      <p>{title}</p>
    </div>
  );
};

export default Marker;
