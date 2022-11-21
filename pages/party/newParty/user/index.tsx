import styled from "styled-components";
import { UserProfile, ReportImg } from "../../../common/image";
import Image from "next/image";
const UserProfileComponent = ({ props }: any) => {
  return (
    <>
      <UserCard>
        <CenterLocate>
          <BlockImg>
            <Image src={UserProfile} alt=""></Image>
          </BlockImg>
          <Flex>
            <Box>{props.lv}</Box>
            <Title>{props.name}</Title>
            <Tier>{props.tier}</Tier>
            <WinRate>승률{props.winrate}%</WinRate>
            <Kda>{props.kda}</Kda>
          </Flex>
        </CenterLocate>
        <Locate>
          <Image src={ReportImg} alt=""></Image>
        </Locate>
      </UserCard>
    </>
  );
};
export default UserProfileComponent;
const UserCard = styled.div`
  width: 231px;
  height: 306px;
  left: 26px;
  top: 132px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const BlockImg = styled.div`
  display: inline-block;
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
  top: 140px;
  left: 190px;
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
  top: -40px;
  height: 100px;
`;
const Title = styled.p`
  font: 600 normal 26px "Noto Sans";
  color: #000000;
  margin: 0;
`;
const Tier = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #808080;
`;
const WinRate = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  color: #000000;
`;
const Kda = styled.div`
  margin: 0 auto;
  width: min-content;
  border-radius: 30px;
  padding: 0 10px;
  height: 26px;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 23px;

  color: #000000;
`;
