import { FaArrowUp, FaUber } from "react-icons/fa"
import "./BackToTop.modal.css"

const BackToTop = () => {
  return (
    <div className="back-to-top mobile-hide">
    <a className="flexCol" href="#"><FaArrowUp /></a>
  </div>
  )
}

export default BackToTop