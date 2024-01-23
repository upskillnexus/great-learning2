import { useQuery } from "@tanstack/react-query";
import api from "../../api";

const isAuth = () => {
  const check = useQuery({
    queryKey: ["isAuth"],
    queryFn: async () => {
      const res = await api.get("user/check");
      return res?.data;
    },
    staleTime: Infinity,
    retry: (failureCount, error) => {
      return failureCount < 1;
    },
    refetchOnWindowFocus: false,
  });
  return check;
};
export default isAuth;
