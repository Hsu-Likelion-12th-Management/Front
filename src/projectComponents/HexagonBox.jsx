import { motion } from "framer-motion";
import hexagon from "../images/hexagon.svg";

export default function HexagonBox(props) {
  return (
    <motion.div className={props.class} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <img src={hexagon} alt="hexagonImg" style={{ width: "10.3125rem" }} />
      <motion.div className="hexagonImgBox" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <img src={props.img} />
        <p className="hexagonText">{props.text}</p>
      </motion.div>
    </motion.div>
  )
}
