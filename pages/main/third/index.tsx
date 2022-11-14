import { NextPage } from "next";
import Image from "next/image";

// Styles
import * as S from "./style";

// Images
import { Oval } from "../../common/image";
import { Rectangle } from "../../common/image";
import { Gamers } from "../../common/image";

const ThirdPage: NextPage = () => {
    return(
        <>
        <S.ImageWrapper>
            <Image
                src={Oval}
            />
        </S.ImageWrapper>
        </>
    );
};

export default ThirdPage;