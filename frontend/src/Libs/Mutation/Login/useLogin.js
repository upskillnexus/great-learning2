import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api from "../../../api.js";

const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const userLogin = useMutation({
    mutationFn: async (formdata) => {
      console.log(formdata)
      const res = await api.post("user/login", formdata);
      return res?.data;
    },
    onSuccess: (data) => {
      navigate("/");
      toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return userLogin;
};

export default useLogin;
