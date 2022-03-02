import { Link } from "react-router-dom";
import styled  from "styled-components";
import { Login, Logo, Nav } from "../Main/Main";


export const Box = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
`

export const Image = styled(Box).attrs({ id: "1" })`
::before{    
    content :""  ;
    background : url("https://an2-img.amz.wtchn.net/image/v2/EXPCHYwE1ShTwQDUAcarow.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZME1qUTVNelUzT0RVMk9ESXpNakkyT0NKOS5DQ2Jjb1IyNmVJUWItOVZiMkRueTlIZDhtdHBjTlplamFLSXJDVHlXNDRN") center center / cover no-repeat;
    z-index:0;
    height: 100vh;
    width: 100vw;
    opacity: 0.3;
    top: 0;
    left: 0;
    position: fixed;
    
}
`
export const Main = styled.main`
    display: flex;
    position: relative;
    z-index: 100;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`
export const Format = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
`
export const FormatTitle = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 0px 0px 14px;
`
export const FormatSpan = styled.span`
    flex: 1 1 0%;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1px;

`
export const FormatRSpan = styled.span`
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.4px;
    padding: 4px 0px 0px;
    opacity: 0.5;

`
export const Form = styled.form`
    box-sizing: border-box;
`

export const FormList = styled.div`
    position: relative;
    width: 100%;
`
export const Input = styled.input`
    width: 100%;
    padding: 10px 10px 10px 14px;
    border-radius: 4px 4px 0px 0px;   
    font-size: 16px;
    letter-spacing: -0.5px;
    line-height: normal;
    border-color: rgba(154, 151, 161, 0.2);
    border-top-width: 1px;
`

const Email = styled(Input).attrs(
    {
        placeholder : '이메일 (example@gmail.com)',
        type : 'email',
        data_valid : "false",
        autocomplete : 'off',
    })`

    color: rgba(51, 51, 51);
    font-weight: 400;
    border-width: 0px 1px 1px;
    border-style: solid;
    border-image: initial;

`
const Password = styled(Input).attrs(
    {
        placeholder : '비밀번호',
        type : 'password',
        data_valid : "false",
        autocomplete : 'off',
    })`
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    color: rgba(51, 51, 51);
    font-weight: 400;
    border-top-width: 1px;
    border-radius : 0px 0px 4px 4px;
    border-width: 0px 1px 1px;
    border-style: solid;
    border-image: initial;


`

export const LoginSession = styled.div`
    margin: 16px 0 0;
    padding: 0 0 21px;
    border-bottom: 1px solid rgba(154, 151, 161, 0.2);
`
export const LoginButton = styled.div`
    z-index: 100;
    display: flex;
    background-color: #F82F62;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.1px;
    line-height: 51px;
    width: 300px;
    border-radius: 40px;
    justify-content: center;
    opacity: 0.6;
`

export const PTitle = styled.div`
    display: flex;
    align-items: flex-start;
    width: 300px;
`
export const P = styled.div`
    color: ${props => props.theme.textColor};
    font-size: 12px;
    font-weight: 400px;
    letter-spacing: -0.5px;
    margin : 15px 0 13px;
    opacity: 0.6;



` 
function Sign_in(){

    

    return(
        <>
            
            <Image>
                <Nav><Link to='/'><Logo/></Link><Link to='sign_up'><Login>회원가입</Login></Link></Nav>
                <Main>
                    <Format>
                        <FormatTitle>
                            <FormatSpan>로그인</FormatSpan>
                            <FormatRSpan>비밀번호를 잊어버리셨나요?</FormatRSpan>
                        </FormatTitle>
                        <Form>
                            <FormList><Email/></FormList>
                            <FormList><Password/></FormList>

                        </Form>
                        <LoginSession>
                        <LoginButton>로그인</LoginButton>
                        </LoginSession>
                    </Format>
                    <PTitle>
                    <P>다른 방법으로 로그인하기</P>
                    </PTitle>
                </Main>
            </Image>
        </>
    )
}


export default Sign_in;