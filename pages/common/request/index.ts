import { Category } from "./../func/header/style";
import axios from "axios";
export {};
const token =
  "eyJKV1QiOiJBQ0NFU1NfVE9LRU4iLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiMmIxMDBjOS0zMThkLTRiNjgtYjVjZC0xZGQzZWU3M2ViMzYiLCJBVVRIT1JJVFkiOiJST0xFX1VTRVIiLCJpYXQiOjE2NjkxNTkwMjEsImV4cCI6MTY2OTE3NzAyMX0.f2_whGhdqKj3kLZcBRsWY06p4SEyeQXOQKliQH8f4jMLIN0L3WWtdbWYA1tw9MPRD3kexF0Lrl_oIfcNHPkTjg";
export const getPartyData = async (category: string, state: string) => {
  const { data } = await axios({
    method: "get",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/teams",
    params: {
      size: 6,
      order: state,
      category: category,
      page: 1,
    },
  });
  return data;
};
export const getShowDetailInfo = async (id: string | undefined | string[]) => {
  let data;
  await axios
    .all([
      axios({
        method: "get",
        url: process.env.NEXT_PUBLIC_BASE_URL + "/teams/" + id,
      }),
      axios({
        method: "get",
        url: process.env.NEXT_PUBLIC_BASE_URL + "/teams/member/" + id,
      }),
    ])
    .then(
      axios.spread((res1, res2) => {
        res1.data;
        data = [res1.data, res2.data];
      })
    );
  console.log(data);
  return data;
};
export const requestPartyInclude = async (id: string) => {
  await axios({
    method: "post",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/teams/participation/" + id,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const requestCreateParty = async (
  title: string,
  content: string,
  category: string,
  personnel: number
) => {
  await axios({
    method: "post",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/teams",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      title: title,
      content: content,
      category: category,
      personnel: personnel,
    },
  });
};
export const getPartyIMade = async () => {
  const { data } = await axios({
    method: "get",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/teams/current",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
export const getMyInfo = async () => {
  const { data } = await axios({
    method: "get",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/users/info",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.id;
};
