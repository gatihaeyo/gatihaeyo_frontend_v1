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
  const token = sessionStorage.getItem("accessToken");
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
  const token = sessionStorage.getItem("accessToken");
  await axios({
    method: "post",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/teams/participation/" + id,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getPartyIMade = async () => {
  const token = sessionStorage.getItem("accessToken");
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
  const token = sessionStorage.getItem("accessToken");
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
  const token = sessionStorage.getItem("accessToken");
  await axios({
    method: "post",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/teams/list-top" + `/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const deleteMember = async (team: string, user: string) => {
  const token = sessionStorage.getItem("accessToken");
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
export const ReportUser = async (id: string) => {
  const token = sessionStorage.getItem("accessToken");
  await axios({
    method: "post",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/reports",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      user_id: id,
    },
  });
};
export const getPartyList = async (path: string) => {
  const token = sessionStorage.getItem("accessToken");
  const { data } = await axios({
    method: "get",
    url: process.env.NEXT_PUBLIC_BASE_URL + path,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
export const NickNameOn = async (category: string, name: string) => {
  await axios({
    method: "put",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/users/game/" + category,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
    data: {
      name: name,
    },
  });
};
