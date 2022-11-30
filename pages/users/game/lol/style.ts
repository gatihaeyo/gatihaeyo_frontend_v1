import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    height: 100vh;
`;

export const ContentBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.div`
    font: 700 normal 50px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    margin-top: 130px;
    margin-bottom: 50px;
`;

export const Wrapper = styled.div`
    margin-bottom: 31px;
`;

export const SubTitle = styled.div`
    font: 500 normal 23px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    margin-bottom: 7px;
    margin-left: 20px;
`;

export const InputDiv = styled.div`
    width: 467px;
    height: 64px;
    border: 1px solid #929292;
    border-radius: 10px;
    display: flex;
    align-items: center;
`

export const Input = styled.input`
    width: 467px;
    height: 64px;
    border: 0;
    outline: 0;
    background-color: rgba(0, 0, 0, 0);
    font: 100 normal 18px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    padding-left: 20px;
    padding-right: 100px;
    box-sizing: border-box;
`;

export const BtnBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SubmitBtn = styled.button`
    font: 500 normal 18px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.white};
    width: 467px;
    height: 50px;
    margin-top: 64px;
    background-color: #FFE75F;
    border: none;
    :hover{
        cursor: pointer;
    }
`;

export const CheckBtn = styled.button`
    position: relative;
    background-color: #8ACE55;
    border: none;
    border-radius: 10px;
    width: 106px;
    height: 32px;
    right: 18px;
    text-align: center;
    font: 100 normal 15px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.white};
    :hover{
        cursor: pointer;
    }
`;