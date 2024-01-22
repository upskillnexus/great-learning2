// 
import { useQuery } from "@tanstack/react-query";
import api from "../../../api";

const useGetAdmissions = ({limit}) => {
  const check = useQuery({
    queryKey: ["admissions"],
    queryFn: async () => {
      const res = await api.get(`admission/fetch?limit=${limit}`);
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
export default useGetAdmissions;
