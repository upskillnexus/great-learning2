import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api from "../../api.js";

const useAddEnquiry = () => {
  const queryClient = useQueryClient();
  const userEnquery = useMutation({
    mutationFn: async (formdata) => {
      const res = await api.post("enquiry/create", formdata);
      return res?.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("enquiry");
      toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return userEnquery;
};

export default useAddEnquiry;
