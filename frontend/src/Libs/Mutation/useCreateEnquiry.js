import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api from "../../api.js";
import axios from "axios";

const useAddEnquiry = () => {
  const queryClient = useQueryClient();
  const userEnquery = useMutation({
    mutationFn: async (formdata) => {
      console.log(formdata);
      // const res = await api.post("enquiry/create", formdata);
      const res = await axios.get(
        `https://crm.veblika.com/api/lead/custom/0105?name=${formdata?.fullname}&email=${formdata?.email}&mobileno=${formdata?.phone}&course=${formdata?.course}`
      );
      console.log(res);
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
