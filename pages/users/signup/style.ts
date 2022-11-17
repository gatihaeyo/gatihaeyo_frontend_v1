import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Back = styled.div`
    padding-left: 100px;
    padding-top: 140px;
    width: 100px;
    height: 30px;
    :hover{
        cursor: pointer;
    }
`;

export const ContentsWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Contents = styled.div`

`;

export const Title = styled.div`
    font: 700 normal 50px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
`;

export const ImageWrapper = styled.div`

`;