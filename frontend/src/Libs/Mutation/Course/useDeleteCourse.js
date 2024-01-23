import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api from "../../../api";

const useDeleteCourse = () => {
  const queryClient = useQueryClient();
  const DeleteCourse = useMutation({
    mutationFn: async (id) => {
      const res = await api.delete(`/course/${id}`);
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
  return DeleteCourse;
};

export default useDeleteCourse;
