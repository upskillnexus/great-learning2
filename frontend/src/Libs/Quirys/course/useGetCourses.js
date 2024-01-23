import { useQuery } from "@tanstack/react-query";
import api from "../../../api";

const useGetCourses = () => {
  const courses = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await api.get("course");
      return res?.data
    },
  });
  return courses;
};
export default useGetCourses;
