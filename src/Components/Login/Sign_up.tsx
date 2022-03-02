import { Link } from "react-router-dom";
import styled  from "styled-components";
import { Login, Logo, Nav } from "../Main/Main";
import { Form, Format, FormatSpan, FormatTitle, FormList, Image, Input, LoginButton, LoginSession, Main } from "./Sign_in";


const Name = styled(Input).attrs(
    {
        placeholder : '이름 (2자 이상)',
        type : 'text',
        data_valid : "false",
        autocomplete : 'off',
    })`

    color: rgba(51, 51, 51);
    font-weight: 400;
    border-width: 0px 1px 1px;
    border-style: solid;
    border-image: initial;

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
    border-radius: 0;
    border-width: 0px 1px 1px;
    border-style: solid;
    border-image: initial;

`
const Password = styled(Input).attrs(
    {
        placeholder : '영문, 숫자, 특문 중 2개 조합 10자 이상',
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


function Sign_up(){

    

    return(
        <>
            
            <Image>
                <Nav><Link to='/'><Logo/></Link><Link to='sign_up'><Login>회원가입</Login></Link></Nav>
                <Main>
                    <Format>
                        <FormatTitle>
                            <FormatSpan>회원가입</FormatSpan>
                        </FormatTitle>
                        <Form>
                            <FormList><Name/></FormList>
                            <FormList><Email/></FormList>
                            <FormList><Password/></FormList>
                        </Form>
                        <LoginSession>
                        <LoginButton>계정 생성하기</LoginButton>
                        </LoginSession>
                    </Format>
                </Main>
            </Image>
        </>
    )
}


export default Sign_up;