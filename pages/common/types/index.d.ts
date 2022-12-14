import { Image } from "next/image";
export interface errorType {
  error: {
    status: string;
    data: string;
  };
}
export interface partyDataProps {
  image: StaticImageData;
  name: string;
  max: number;
  min: number;
  category: string;
}
export interface state {
  state: boolean;
  props: partyDataProps;
  func: (num: number, name: string, category: string) => void;
  index: number;
}
export interface Props {
  props: { title: string; max: number; now: number; name: string };
}
