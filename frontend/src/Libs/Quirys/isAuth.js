import { useQuery } from "@tanstack/react-query";
import api from "../../api";

const isAuth = () => {
  const check = useQuery({
    queryKey: ["isAuth"],
    queryFn: async () => {
      const res = await api.get("user/check");
      return res?.data;
    },
  });
  return check;
};
export default isAuth;
