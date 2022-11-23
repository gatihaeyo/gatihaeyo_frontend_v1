import styled from "styled-components";
import Header from "../../common/func/header";
import DefaultPartyProps from "./default";
import Chat from "./chat";
import ErrorPage from "../../common/status/error";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getShowDetailInfo } from "../../common/request";
import EditUserParty from "./edit";
const CreateParty = () => {
  const router = useRouter();
  const id: string | undefined | string[] = router.query.id;
  const { status, data }: any = useQuery(["getPartymemberData", id], () =>
    getShowDetailInfo(id)
  );
  const [state, setState] = useState<boolean>(false);
  const showModal = (modal: boolean) => {
    setState(modal);
  };
  return (
    <>
      <Header />
      {status === "loading" ? (
        <></>
      ) : status === "error" ? (
        <></>
      ) : (
        <>
          {state ? (
            <>
              <EditUserParty data={data} func={showModal} />
            </>
          ) : (
            <>
              <Ul>
                <li>
                  <DefaultPartyProps data={data} func={showModal} />
                </li>
                <li>
                  <Chat id={id} title={data[0].title} />
                </li>
              </Ul>
            </>
          )}
        </>
      )}
    </>
  );
};
export default CreateParty;
const Ul = styled.ul`
  position: relative;
  display: flex;
  list-style-type: none;
  gap: 78px;
  left: -40px;
`;
