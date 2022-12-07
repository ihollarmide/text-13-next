// import axiosInstance from "../axios-instance";

export const fetchAllUsers = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_LENDSQR_API, {
    method: "GET",
  });
  const data = await res.json();
  // const { data } = await axiosInstance({
  //   method: "get",
  // });
  return data;
};

export const fetchUser = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LENDSQR_API}/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  // const { data } = await axiosInstance({
  //   method: "get",
  //   url: id,
  // });
  return data;
};
