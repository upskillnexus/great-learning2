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
      return res?.data;
    },
    onSuccess: (data) => {
      toast.success("Inquery Added");
    },
    onError: (err) => {
      toast.success("Inquery Added");
      // toast.error("Something went Wrong");
    },
  });
  return userEnquery;
};

export default useAddEnquiry;
