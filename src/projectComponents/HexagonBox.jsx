import hexagon from "../images/hexagon.svg";

export default function HexagonBox(props) {
  return (
    <div className={props.class}>
      <img src={hexagon} alt="hexagonImg" style={{ width: "10.3125rem" }} />
      <div className="hexagonImgBox">
        <img src={props.img} />
        <p className="hexagonText" >{props.text}</p>
      </div>
    </div>
  )
}