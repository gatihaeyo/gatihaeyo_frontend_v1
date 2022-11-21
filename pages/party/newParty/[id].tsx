import styled from "styled-components";
import Header from "../../common/func/header";
import DefaultPartyProps from "./default";
import { PartyData, PartyData2 } from "../../common/data";
import { GetStaticPaths } from "next/types";
import Chat from "./chat";
import ErrorPage from "../../common/status/error";
const CreateParty = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Header />
      <Ul>
        <li>
          <DefaultPartyProps />
        </li>
        <li>
          <Chat />
        </li>
      </Ul>
    </>
  );
};
export default CreateParty;
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {
    params: {
      id: string;
    };
  }[] = PartyData.map((item) => {
    return {
      params: {
        id: item.category,
      },
    };
  });
  const paths2: {
    params: {
      id: string;
    };
  }[] = PartyData2.map((item) => {
    return {
      params: {
        id: item.category,
      },
    };
  });
  return {
    paths: [...paths, ...paths2],
    fallback: false,
  };
};
export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  return {
    props: {
      params,
    },
  };
};
const Ul = styled.ul`
  position: relative;
  display: flex;
  list-style-type: none;
  gap: 78px;
  left: -40px;
`;
