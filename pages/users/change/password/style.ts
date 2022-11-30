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

export const Back = styled.div`
    padding-left: 100px;
    padding-top: 50px;
    width: 100px;
    height: 30px;
    :hover{
        cursor: pointer;
    }
`;

export const Logo = styled.div`
    width: 298.53px;
    height: 90px;
`;

export const Ex = styled.div`
    font: 300 normal 24px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    margin-top: 27px;
    margin-bottom: 18px;
    margin-right: 220px;
`;

export const UserWrapper = styled.div`
    margin-bottom: 31px;
`;

export const SubTitle = styled.div`
    font: 300 normal 20px ${(props) => props.theme.fonts.kr};
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
    padding-right: 150px;
    box-sizing: border-box;
`;

export const Img = styled.span`
    padding-right: 20px;
    :hover{
        cursor: pointer;
    }
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
    margin-top: 195px;
    background-color: #FFE75F;
    border: none;
    :hover{
        cursor: pointer;
    }
`;