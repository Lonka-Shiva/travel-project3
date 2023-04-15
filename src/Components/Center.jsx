import location from "../Images/marker.png";

export default function Center(props) {
  return (
    <>
      <div className="center">
        <img src={props.items.coImage} className="center-photo" />
        <div className="center-stats">
          <img src={location} className="center-loc" />
          <span className="center-sin"> {props.items.stats.loc}</span>
          <h1 className="center-header"> {props.items.header}</h1>
          <p className="center-para">
            <b> </b> {props.items.para}
          </p>
          <p className="center-para2">{props.items.para2}</p>
        </div>
      </div>
    </>
  );
}
