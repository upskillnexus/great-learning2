// 
import { useQuery } from "@tanstack/react-query";
import api from "../../../api";

const useGetSingleAdmissions = ({id}) => {
  const singleAdmissions = useQuery({
    queryKey: ["singleAdmissions"],
    queryFn: async () => {
      const res = await api.get(`admission/fetch/${id}`);
      return res?.data;
    },
    staleTime: Infinity,
    retry: (failureCount, error) => {
      return failureCount < 1;
    },
    refetchOnWindowFocus: false,
  });
  return singleAdmissions;
};
export default useGetSingleAdmissions;
