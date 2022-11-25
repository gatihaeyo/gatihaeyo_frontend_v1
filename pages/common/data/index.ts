import { partyDataProps } from "./../types/index.d";
import {
  LolImg,
  OverWatchImg,
  LostArkImg,
  ValorantImg,
  NetflixImg,
  WatchaImg,
  TvingImg,
  DisneyImg,
} from "../image";
export {};
export const PartyData: partyDataProps[] = [
  {
    image: LolImg,
    name: "리그 오브 레전드",
    max: 5,
    min: 1,
    category: "LEAGUEOFLEGEND",
  },
  {
    image: OverWatchImg,
    name: "오버워치2",
    max: 5,
    min: 1,
    category: "OVERWATCH",
  },
  {
    image: LostArkImg,
    name: "로스트아크",
    max: 8,
    min: 1,
    category: "LOSTARK",
  },
  {
    image: ValorantImg,
    name: "발로란트",
    max: 5,
    min: 1,
    category: "VALORANT",
  },
];
export const PartyData2: partyDataProps[] = [
  {
    image: NetflixImg,
    name: "넷플릭스",
    max: 4,
    min: 1,
    category: "NETFLIX",
  },
  {
    image: WatchaImg,
    name: "왓챠",
    max: 4,
    min: 1,
    category: "WATCHA",
  },
  { image: TvingImg, name: "티빙", max: 4, min: 2, category: "TVING" },
  {
    image: DisneyImg,
    name: "디즈니 플러스",
    max: 4,
    min: 1,
    category: "DISNEY",
  },
];
export const PartyBoard = [
  { title: "롤 우르프 같이할 4명 구해요", max: 5, now: 2, name: "lol" },
  { title: "롤 우르프 같이할 4명 구해요", max: 5, now: 2, name: "lol" },
  { title: "롤 우르프 같이할 4명 구해요", max: 5, now: 2, name: "lol" },
  { title: "롤 우르프 같이할 4명 구해요", max: 5, now: 2, name: "lol" },
  { title: "롤 우르프 같이할 4명 구해요", max: 5, now: 2, name: "lol" },
  { title: "롤 우르프 같이할 4명 구해요", max: 5, now: 2, name: "lol" },
];
export const SelectData = [
  {
    skill: "시간 순으로 정렬",
    order: "RECENT",
  },
  {
    skill: "인원 순으로 정렬",
    order: "PERSONNEL",
  },
];
export const MoklokData = ["전체", "게임", "미디어"];
export const UserDurmyData = [
  { name: "코코몽", tier: "골드5", winrate: "90", kda: "2.18:1", lv: 118 },
  { name: "크롱", tier: "골드5", winrate: "90", kda: "2.18:1", lv: 118 },
  { name: "뽀로로", tier: "골드5", winrate: "90", kda: "2.18:1", lv: 118 },
  { name: "루피", tier: "골드5", winrate: "90", kda: "2.18:1", lv: 118 },
  { name: "포비", tier: "골드5", winrate: "90", kda: "2.18:1", lv: 118 },
];
export const MyParty = [
  { name: "가입한 파티", path: "/teams/current" },
  { name: "초대된 파티", path: "/teams/invitation" },
];
