import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is the coure for your career</h1>
      <Link to="/courses/435453454dfsd">Mathematics</Link>
      <br />
      <Link to="/courses/444463454dfsd">C++</Link>
      <br />
      <Link to="/courses/444463454tfsd">JavaScript</Link>
      <br />
      <Link to="/courses/4545dsdfdsdd4">Java</Link>
      <br />
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Course;
