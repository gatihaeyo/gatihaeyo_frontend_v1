import { FC } from "react";
import styled from "styled-components";
import { state } from "../../common/types";
import Image from "next/image";
const ItemComponent: FC<state> = ({ state, props, func, index }) => {
  return (
    <>
      <Box
        state={state}
        onClick={() => {
          func(index, props.name);
        }}
      >
        <Image src={props.image} alt="" />
      </Box>
    </>
  );
};
export default ItemComponent;
const Box = styled.div<{ state: boolean }>`
  width: 150px;
  height: 200px;
  background: ${(props) =>
    props.state ? props.theme.colors.main.m5 : props.theme.colors.main.m2};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-right: 24px;
  margin-top: 0px;
  padding-top: 24px;
  text-align: center;
`;
