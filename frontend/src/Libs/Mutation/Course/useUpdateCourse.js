import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api from "../../../api";

const useUpdateCourse = (id) => {
  const queryClient = useQueryClient();
  const UpdateCourse = useMutation({
    mutationFn: async (data) => {
      const res = await api.patch(`/course/${id}`,data);
      return res?.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("courses");
      toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return UpdateCourse;
};

export default useUpdateCourse;
