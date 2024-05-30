
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changePage } from "../../redux/slices/pageSlice";

const Services = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage("Услуги"));
  });

  return (
    <div>
      <div>Услуги</div>
    </div>
  );
};

export default Services;
