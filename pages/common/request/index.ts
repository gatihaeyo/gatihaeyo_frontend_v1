import { Category } from "./../func/header/style";
import axios from "axios";
export {};
const token =
  "eyJKV1QiOiJBQ0NFU1NfVE9LRU4iLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiMmIxMDBjOS0zMThkLTRiNjgtYjVjZC0xZGQzZWU3M2ViMzYiLCJBVVRIT1JJVFkiOiJST0xFX1VTRVIiLCJpYXQiOjE2NjkzMzIxMjUsImV4cCI6MTY2OTM1MDEyNX0.XCAxlSX3zvLTjVX8qUZdyRk250oiSGql-lJJpvYNjFdJ5fhf9ZPrdAsyyQ0Sgc42t-1EjmXpBXN5d-aQsaTMrg";
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
      axios({
        method: "get",
        url: process.env.NEXT_PUBLIC_BASE_URL + "/users/info",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    ])
    .then(
      axios.spread((res1, res2, res3) => {
        data = [res1.data, res2.data, res3.data];
      })
    );
  console.log(data, "서버데이터입니다");
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
export const requestCreateParty = (
  title: string,
  content: string,
  category: string,
  personnel: number
) => {
  const { data }: any = axios({
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
  return data;
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
export const newPartyList = async (id: any) => {
  await axios({
    method: "post",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/teams/list-top" + `/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const deleteMember = async (team: string, user: string) => {
  await axios({
    method: "delete",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/teams/expulsion",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      team_id: team,
      user_id: user,
    },
  });
};
export const SearchParty = async () => {
  await axios({});
};
export const getPartyList = async (path: string) => {
  const { data } = await axios({
    method: "get",
    url: process.env.NEXT_PUBLIC_BASE_URL + path,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
