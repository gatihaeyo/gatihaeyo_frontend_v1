import { Category } from "./../func/header/style";
import axios from "axios";
export {};
const token =
  "eyJKV1QiOiJBQ0NFU1NfVE9LRU4iLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiMmIxMDBjOS0zMThkLTRiNjgtYjVjZC0xZGQzZWU3M2ViMzYiLCJBVVRIT1JJVFkiOiJST0xFX1VTRVIiLCJpYXQiOjE2Njg5ODU2NjgsImV4cCI6MTY2OTAwMzY2OH0.8CQHeirkdC-eG1zPXGAUOaa6i0awATEmUr9c7LJLTcdhZFVcyQPMB1jVi0GZGrYFsh-NH59j9uj2H-6oyErjXg";
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
  console.log(data);
  return data;
};
export const getShowDetailInfo = async (id: string) => {
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
    url: process.env.NEXT_PUBLICK_BASE_URL + "/teams",
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
