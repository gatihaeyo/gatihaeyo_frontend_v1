import styled from "styled-components";
import { UserProfile, ReportImg } from "../../../common/image";
import Image from "next/image";
import { ReportUser } from "../../../common/request";
const UserProfileComponent = ({ props }: any) => {
  console.log(props.profile_image_path);
  return (
    <>
      <UserCard>
        <CenterLocate>
          <BlockImg>
            <Image
              src={props.profile_image_path}
              alt=""
              width={100}
              height={100}
              unoptimized={true}
            ></Image>
          </BlockImg>
          <Flex>
            <Title>{props.nickname}</Title>
          </Flex>
        </CenterLocate>
        <Locate>
          <Image
            src={ReportImg}
            alt=""
            onClick={() => ReportUser(props.id)}
          ></Image>
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
  position: relative;
  display: inline-block;
  top: 30px;
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
  top: 40px;
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
