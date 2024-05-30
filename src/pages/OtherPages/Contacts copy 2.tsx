
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changePage } from "../../redux/slices/pageSlice";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage("Блог"));
  });

  return (
    <div>
      <div>Блог</div>
    </div>
  );
};

export default Blog;
