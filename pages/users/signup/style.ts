import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Back = styled.div`
    padding-left: 100px;
    padding-top: 140px;
    margin-right: 0px;
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
    display: flex;
    flex-direction: column;
    margin-left: 150px;
    `;

export const Title = styled.div`
    font: 700 normal 50px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    text-align: center;
    margin-bottom: 33px;
    `;

export const UserWrapper = styled.div`
    margin-bottom: 26px;
`;

export const SubTitle = styled.div`
    font: 300 normal 20px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    margin-bottom: 7px;
    margin-left: 20px;
`;

export const Input = styled.input`
    width: 467px;
    height: 64px;
    border: 1px solid #929292;
    border-radius: 10px;
    font: 100 normal 18px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    padding-left: 20px;
    padding-right: 150px;
    box-sizing: border-box;
    `;

export const CheckBtn = styled.button`
    position: relative;
    background-color: #8ACE55;
    border: none;
    border-radius: 10px;
    width: 95px;
    height: 28px;
    top: -2px;
    right: 110px;
    font: 100 normal 15px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.white};
    :hover{
        cursor: pointer;
    }
`;

export const Img = styled.span`
    position: relative;
    top: 2px;
    right: 50px;
    :hover{
        cursor: pointer;
    }
`;

export const ImageWrapper = styled.div`
    margin-left: 120px;
    margin-top: 50px;
`;

export const SubmitBtn = styled.button`
    font: 500 normal 18px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.white};
    width: 467px;
    height: 50px;
    background-color: #FFE75F;
    border: none;
    :hover{
        cursor: pointer;
    }
    margin-top: 38px;
`;