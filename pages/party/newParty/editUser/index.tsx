import styled from "styled-components";
import Image from "next/image";
import { GoOutImg, UserProfile } from "../../../common/image";
import { deleteMember } from "../../../common/request";
const EditUserCard = ({ props, id }: any) => {
  const OutUserTeam = () => {
    deleteMember(props.id, id);
  };
  return (
    <>
      <UserCard>
        <Locate>
          <Image src={GoOutImg} alt="" onClick={() => OutUserTeam()}></Image>
        </Locate>
        <CenterLocate>
          <BlockImg>
            <Image src={UserProfile} alt=""></Image>
          </BlockImg>
          <Flex>
            <Title>{props.nickname}</Title>
          </Flex>
        </CenterLocate>
      </UserCard>
    </>
  );
};
export default EditUserCard;
const UserCard = styled.div`
  width: 201px;
  height: 306px;
  left: 26px;
  top: 132px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const BlockImg = styled.div`
  position: relative;
  display: inline-block;
  top: 10px;
  width: 150px;
  height: 150px;
`;
const CenterLocate = styled.div`
  text-align: center;
  height: 125px;
  line-height: 13px;
`;
const Locate = styled.div`
  position: relative;
  top: 20px;
  left: 150px;
`;
const Box = styled.div`
  margin: 0 auto;
  width: min-content;
  border-radius: 30px;
  padding: 0 10px;
  height: 26px;
  background-color: #ededed;
  font: 700 normal 18px "Noto Sans";
  color: #000000;
`;
const Flex = styled.div`
  position: relative;
  top: 20px;
  height: 100px;
`;
const Title = styled.p`
  font: 600 normal 26px "Noto Sans";
  color: #000000;
  margin: 0;
`;
