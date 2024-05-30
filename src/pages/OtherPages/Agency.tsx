
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changePage } from "../../redux/slices/pageSlice";

const Agency = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage("Агентсво"));
  });

  return (
    <div>
      <div>Агенство</div>
    </div>
  );
};

export default Agency;
