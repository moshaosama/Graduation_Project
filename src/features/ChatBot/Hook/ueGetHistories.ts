import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import { fetchGetHistories } from "../Action/GetHistories";

export const useGetHistories = () => {
  const Histories: any = useSelector((state: RootState) => state.Histories);
  const dispatch = useDispatch<AppDispatch>();
  const User = JSON.parse(localStorage.getItem("User")!);

  useEffect(() => {
    dispatch(fetchGetHistories(User?.id));
  }, []);

  return { Histories };
};
