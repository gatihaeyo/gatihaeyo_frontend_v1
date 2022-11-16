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
  { image: LolImg, name: "리그 오브 레전드", max: 5, min: 1 },
  { image: OverWatchImg, name: "오버워치2", max: 5, min: 1 },
  { image: LostArkImg, name: "로스트아크", max: 8, min: 1 },
  { image: ValorantImg, name: "발로란트", max: 5, min: 1 },
];
export const PartyData2: partyDataProps[] = [
  { image: NetflixImg, name: "넷플릭스", max: 4, min: 1 },
  { image: WatchaImg, name: "왓챠", max: 4, min: 1 },
  { image: TvingImg, name: "티빙", max: 4, min: 2 },
  { image: DisneyImg, name: "디즈니 플러스", max: 4, min: 1 },
];
