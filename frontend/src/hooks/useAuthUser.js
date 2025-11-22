import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

const useAuthUser = () => {
  const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false, // auth check
  });

  const rawUser = authUser.data?.user || null;
  const normalizedUser = rawUser
    ? { ...rawUser, isOnboarded: rawUser.isOnboarded ?? rawUser.isOnBoarded ?? false }
    : null;

  return { isLoading: authUser.isLoading, authUser: normalizedUser };
};
export default useAuthUser;