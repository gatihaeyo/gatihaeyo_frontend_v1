import styled from "styled-components";
import Image from "next/image";
import { ManyPeopleImg, CrownImg } from "../../../common/image";
import { UserDurmyData } from "../../../common/data";
import UserProfileComponent from "../user";
const DefaultPartyProps = () => {
  return (
    <>
      <Table>
        <Title>붕어빵에 미친 배그팟</Title>
        <EditButton>파티 정보 수정</EditButton>
        <Locate2>
          <Locate>
            <Image src={ManyPeopleImg} alt=""></Image>
          </Locate>
          <Peopleaccout>5/5</Peopleaccout>
          <Text>
            리그 오브 레전드
            <br />
            5인
          </Text>
        </Locate2>
        <Asdf>
          <ul>
            {UserDurmyData.map((item, i) => {
              return (
                <>
                  <li>
                    {i === 0 ? (
                      <ImageDiv>
                        <Image src={CrownImg} alt=""></Image>
                      </ImageDiv>
                    ) : (
                      <></>
                    )}

                    <UserProfileComponent props={item} />
                  </li>
                </>
              );
            })}
          </ul>
        </Asdf>
      </Table>
    </>
  );
};
export default DefaultPartyProps;
const Table = styled.div`
  position: relative;
  top: 40px;
  left: 120px;
  width: 818px;
  height: 851px;
  background: #ededed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 80px;
`;
const EditButton = styled.div`
  position: relative;
  width: 100px;
  height: 30px;
  background-color: #8ace55;
  text-align: center;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  border-radius: 20px;
  padding-top: 13px;
  padding-left: 20px;
  display: inline-flex;
  cursor: pointer;
  color: #000000;
  left: 60px;
  top: 25px;
`;
const Title = styled.div`
  position: relative;
  display: inline-flex;
  top: 30px;
  left: 40px;
  font: 600 normal 36px "Noto Sans";
  color: #000000;
`;
const Locate = styled.div`
  position: relative;
  display: inline-flex;
  width: 50px;
  top: 10px;
`;
const Locate2 = styled.div`
  position: relative;
  top: -50px;
  left: 700px;
`;
const Peopleaccout = styled.div`
  margin-left: 10px;
  display: inline-flex;
  font: 700 normal 28px "Noto Sans";
  color: #000000;
`;
const Text = styled.div`
  position: relative;
  width: 309px;
  height: 33px;
  text-align: right;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  left: -200px;
  color: #000000;
`;
const Asdf = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    width: 750px;
    overflow-x: hidden;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    height: 440px;
    li {
    }
  }
`;
const ImageDiv = styled.div`
  position: absolute;
  left: 220px;
  top: 130px;
`;
