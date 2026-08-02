import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../ProjectDetails.css";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate("/projects")}>
      <FiArrowLeft />
      <span>Back to Projects</span>
    </button>
  );
}
