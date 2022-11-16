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
}
export interface state {
  state: boolean;
  props: partyDataProps;
  func: (num: number, name: string) => void;
  index: number;
}
