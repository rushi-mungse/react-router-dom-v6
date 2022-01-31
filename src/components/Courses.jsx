import { useParams } from "react-router-dom";

const Courses = () => {
  const params = useParams();
  return (
    <div>
      <h1>Welcome to course :{params.courseId}</h1>
    </div>
  );
};

export default Courses;
