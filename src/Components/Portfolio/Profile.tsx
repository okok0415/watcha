import styled from "styled-components";
import Sidebar from "../Navbar/Sidebar";
import Img from  "./4.jpg"
const Wrap = styled.div`
    width: 1000px;
    background : white;
    padding: 46px 50px 120px;
    min-height: 100vh;
    margin : 0 auto;
    color: black;
    display: flex;
    flex-direction: column;
	font-family: 'Noto Sans KR', 'Nanum Gothic', sans-serif;
  	font-weight: 400;
`
const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin : 20px 0;
    font-size: 30px;
    font-weight: 600;
`
const Section = styled.section`
    margin: 10px 0;
`
const Header = styled.header`
    margin: 20px 0px;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    font-size: 22px;
`
const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 20px;
`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const Image = styled.div`
    margin : 30px 30px;
    background : url(${Img}) center center / cover no-repeat;
    height: 200px;
    width: 160px;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    font-weight: 400;
`
const Text = styled.div`
    margin : 5px;
    display: grid;
    grid-template-columns: 1fr 4fr;
`
const TextLeft = styled.div`
    display: flex;
    justify-content: flex-end;
    margin : 5px 15px;
`
const TextRight = styled.div`
    display: flex;
    justify-content: flex-start;
    margin : 5px 15px;
`
const ContributionWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const Contribution = styled.img.attrs({
    src : 'https://ghchart.rshah.org/okok0415'
})`
    width: 800px;

`
const SHeader = styled.div`
    margin: 20px 0px;
    padding-bottom: 10px;
    font-size: 18px;
`

const InformationWrapper = styled.div`
    display : flex;
    justify-content: center;
`
const Information = styled.div`
    font-size: 14px;
    width: 800px;
    height: 150px;
    padding: 20px;
    background-color: rgb(240,240,240);
`
const InformationText =styled.div`

    display: grid;
    grid-template-columns: 1fr 8fr;
`
const InfTextLeft = styled.span`
    display: flex;
    justify-content: flex-end;
    margin : 5px 15px;
`
const InfTextRight = styled.span`
    display: flex;
    justify-content: flex-start;
    margin : 5px 15px;
`
function Profile () {

    return (
        <>
            
            <Wrap>
                <Title>이력서</Title>
                <Section>
                    <Header>
                        인적사항
                    </Header>
                    <Body>
                        <ImageWrapper>
                            <Image/>
                        </ImageWrapper>
                        <TextWrapper>
                            <Text>
                                <TextLeft>이름</TextLeft>
                                <TextRight>임정민</TextRight>
                            </Text>
                            <Text>
                                <TextLeft>생년월일</TextLeft>
                                <TextRight>1997.04.15</TextRight>
                            </Text>
                            <Text>
                                <TextLeft>최종 학력</TextLeft>
                                <TextRight>홍익대학교 컴퓨터공학과 학사</TextRight>
                            </Text>
                            <Text>
                                <TextLeft>Contact</TextLeft>
                                <TextRight>dlawjdals11@naver.com</TextRight>
                            </Text>
                            <Text>
                                <TextLeft>github</TextLeft>
                                <TextRight>https://github.com/okok0415</TextRight>
                            </Text>
                        </TextWrapper>
                    </Body>
                </Section>
                <Section>
                    <Header>
                        Github / 기술 스택
                    </Header>
                    <SHeader>
                        Github Contribution
                    </SHeader>
                    <ContributionWrapper>
                        <Contribution/>
                    </ContributionWrapper>
                
                    <SHeader>
                        Skills
                    </SHeader>
                    <InformationWrapper>
                        <Information>
                            <InformationText>
                                <InfTextLeft>* :</InfTextLeft>
                                <InfTextRight>다른 기술 블로그의 코드를 그대로 가져와서 사용한 경우, 혹은 완성되지 못한 프로젝트에서 경험만 해본 단계</InfTextRight>
                            </InformationText>
                            <InformationText>
                                <InfTextLeft>** :</InfTextLeft>
                                <InfTextRight>팀원으로 프로젝트에서 사용하였거나, 강의나 교과목 등으로 전체적인 내용을 수료한 경우</InfTextRight>
                            </InformationText>
                            <InformationText>
                                <InfTextLeft>*** :</InfTextLeft>
                                <InfTextRight>본인 주체적으로 사용하여 프로젝트를 완료하였으나 공식 문서, Stack overflow 등을 참고하지 않으면 진행하는 데 차질이 생기는 단계</InfTextRight>
                            </InformationText>
                            <InformationText>
                                <InfTextLeft>**** :</InfTextLeft>
                                <InfTextRight>공식 문서를 참고하지 않아도 대부분의 원하는 것을 구현할 수 있는 단계</InfTextRight>
                            </InformationText>
                        </Information>
                    </InformationWrapper>
                </Section>
            </Wrap>
        </>
    )
}

export default Profile;