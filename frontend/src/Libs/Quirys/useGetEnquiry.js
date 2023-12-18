import { useQuery } from "@tanstack/react-query";
import api from "../../api";

const useGetEnquiry = () => {
  const enquiry = useQuery({
    queryKey: ["enquiry"],
    queryFn: async () => {
      const res = await api.get("enquiry/fetch");
      return res?.data?.data;
    },
  });
  return enquiry;
};
export default useGetEnquiry;
