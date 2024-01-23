import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api from "../../../api";

const useCreateCourse = () => {
  const useCreate = useMutation({
    mutationFn: async (formdata) => {
      const res = await api.post("course/create", formdata);
      return res?.data;
    },
    onSuccess: (data) => {
        
        toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return useCreate;
};

export default useCreateCourse;
