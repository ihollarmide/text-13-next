import { useQuery } from "@tanstack/react-query";

// API Calls
import { fetchAllUsers, fetchUser } from "./api";

// Fetch User Profile
export const useFetchAllUsers = (initialData) => {
  return useQuery(["fetchAllUsers"], () => fetchAllUsers(), {
    cacheTime: 1000 * 60 * 5,
    initialData: initialData
  });
};

export const useFetchUser = (id) => {
  return useQuery(["fetchUser"], () => fetchUser(id), {
    enabled: !!id,
    cacheTime: 1000 * 60 * 5,
  });
};
