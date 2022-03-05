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
    margin: 30px 0;
`
const Header = styled.header`
    margin: 20px 0px;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    font-size: 22px;
    font-weight: 700;
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
    font-weight: 700;
`

const InformationWrapper = styled.div`
    display : flex;
    justify-content: center;
    margin-bottom: 60px;
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

const SkillWrapper = styled.div`
    margin : 20px 0 ;
    padding: 0 50px;
`

const Skill = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin-bottom: 20px;
`

const SkillLeft = styled.div`
    font-size: 18px;
    font-weight: 600 ;
`
const SkillRight = styled.div`
    font-size: 16px;
    font-weight: 400;

`
const SkillRightLi = styled.div`
    margin-bottom: 20px;
`

const SkillRightText = styled.div`
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr 5fr;

`

const SkillRightTextLeft = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 5px 15px;
`

const SkillRightTextRight = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 5px 15px;
`
const Blank = styled.div`
    width: 1px;
    height: 50px;
`


const ProjectTitle = styled.div`
    margin: 30px 0px;
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
    border-bottom: 1px solid rgb(200,200,200);
    display: grid;
    grid-template-columns: 5fr 1fr;
    align-items: center;
`

const ProjectName = styled.span`

`

const ProjectDate = styled.span`
    font-size: 14px;
    color: rgb(130,130,130);
    display: flex;
    justify-content: flex-start;
`

const ProjectContentWrapper = styled.div`
`

const ProjectContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;

`
const ProjectContentLeft = styled.div`
    font-size: 18px;
    font-weight: 700;
    display: flex;
    justify-content: flex-end;
    margin: 5px 20px;
`
const ProjectContentRight = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 5px 20px;
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
                                <TextRight>dlawjdals11@naver.com, 01032361410</TextRight>
                            </Text>
                            <Text>
                                <TextLeft>github</TextLeft>
                                <TextRight>https://github.com/okok0415</TextRight>
                            </Text>
                        </TextWrapper>
                    </Body>
                    <SHeader>고등학교</SHeader>
                    <SkillWrapper>
                    <Skill>
                        <SkillLeft>대륜고등학교</SkillLeft>
                        <SkillRight>
                            <SkillRightText>
                                <SkillRightTextLeft>졸업 구분</SkillRightTextLeft>
                                <SkillRightTextRight>졸업</SkillRightTextRight>
                            </SkillRightText>
                            <SkillRightText>
                                <SkillRightTextLeft>재학 기간</SkillRightTextLeft>
                                <SkillRightTextRight>2013.03 ~ 2016.02</SkillRightTextRight>
                            </SkillRightText>
                            <SkillRightText>
                                <SkillRightTextLeft>관련</SkillRightTextLeft>
                                <SkillRightTextRight>대구, 인문, 주간</SkillRightTextRight>
                            </SkillRightText>
                        </SkillRight>
                     </Skill>
                    </SkillWrapper>
                    <SHeader>대학교</SHeader>
                    <SkillWrapper>
                    <Skill>
                        <SkillLeft>홍익대학교</SkillLeft>
                        <SkillRight>
                            <SkillRightText>
                                <SkillRightTextLeft>졸업 구분</SkillRightTextLeft>
                                <SkillRightTextRight>졸업</SkillRightTextRight>
                            </SkillRightText>
                            <SkillRightText>
                                <SkillRightTextLeft>재학 기간</SkillRightTextLeft>
                                <SkillRightTextRight>2016.03 ~ 2022.02</SkillRightTextRight>
                            </SkillRightText>
                            <SkillRightText>
                                <SkillRightTextLeft>관련</SkillRightTextLeft>
                                <SkillRightTextRight>서울, 본교</SkillRightTextRight>
                            </SkillRightText>
                            <SkillRightText>
                                <SkillRightTextLeft>입학 구분</SkillRightTextLeft>
                                <SkillRightTextRight>입학</SkillRightTextRight>
                            </SkillRightText>
                            <SkillRightText>
                                <SkillRightTextLeft>학과/전공</SkillRightTextLeft>
                                <SkillRightTextRight>컴퓨터공학과</SkillRightTextRight>
                            </SkillRightText>
                            <SkillRightText>
                                <SkillRightTextLeft>성적</SkillRightTextLeft>
                                <SkillRightTextRight>3.42 / 4.5</SkillRightTextRight>
                            </SkillRightText>
                        </SkillRight>
                     </Skill>
                    </SkillWrapper>
                    <SHeader>병역사항</SHeader>
                    <Skill>
                        <SkillRightTextLeft>병역 구분</SkillRightTextLeft>
                        <SkillRightTextRight>군필</SkillRightTextRight>
                     </Skill>
                     <Skill>
                        <SkillRightTextLeft>군별</SkillRightTextLeft>
                        <SkillRightTextRight>육군</SkillRightTextRight>
                     </Skill>
                     <Skill>
                        <SkillRightTextLeft>병과</SkillRightTextLeft>
                        <SkillRightTextRight>운전병</SkillRightTextRight>
                     </Skill>
                     <Skill>
                        <SkillRightTextLeft>계급</SkillRightTextLeft>
                        <SkillRightTextRight>병장</SkillRightTextRight>
                     </Skill>
                     <Skill>
                        <SkillRightTextLeft>복무 기간</SkillRightTextLeft>
                        <SkillRightTextRight>2018.03.05 ~ 2019.11.03</SkillRightTextRight>
                     </Skill>
                     <Skill>
                        <SkillRightTextLeft>제대 구분</SkillRightTextLeft>
                        <SkillRightTextRight>만기제대</SkillRightTextRight>
                     </Skill>
                </Section>
                <Blank/>
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
                    <SkillWrapper>
                        <Skill>
                            <SkillLeft>Frontend</SkillLeft>
                            <SkillRight>
                                <SkillRightLi>•   HTML5***, CSS3***, JavaScript(ES6)***, TypeScript***</SkillRightLi>
                                <SkillRightLi>•   React****</SkillRightLi>
                                <SkillRightLi>•   Redux**, Recoil**</SkillRightLi>
                                <SkillRightLi>•   Styled-Components***</SkillRightLi>                            
                            </SkillRight>
                        </Skill>
                        <Skill>
                            <SkillLeft>Backend</SkillLeft>
                            <SkillRight>
                                <SkillRightLi>•   Django***, Flask***</SkillRightLi>
                                <SkillRightLi>•   MongoDB***, SQLite3**, Redis*</SkillRightLi>
                                <SkillRightLi>•   REST API***, WebSocket***</SkillRightLi>
                                <SkillRightLi>•   Visual Studio Code, Jupyter</SkillRightLi>
                                <SkillRightLi>•   Git</SkillRightLi>                            
                            </SkillRight>
                        </Skill>
                        <Skill>
                            <SkillLeft>DevOps</SkillLeft>
                            <SkillRight>
                                <SkillRightLi>•   Docker**</SkillRightLi>
                                <SkillRightLi>•   AWS EC2**</SkillRightLi>                       
                            </SkillRight>
                        </Skill>
                        <Skill>
                            <SkillLeft>Data Science</SkillLeft>
                            <SkillRight>
                                <SkillRightLi>•   Pandas**</SkillRightLi>
                                <SkillRightLi>•   Pytorch*</SkillRightLi>               
                            </SkillRight>
                        </Skill>
                        <Skill>
                            <SkillLeft>Collaboration</SkillLeft>
                            <SkillRight>
                                <SkillRightLi>•   Slack</SkillRightLi>
                                <SkillRightLi>•   Notion</SkillRightLi>
                                <SkillRightLi>•   JANDI</SkillRightLi>                           
                            </SkillRight>
                        </Skill>
                    </SkillWrapper>
                </Section>
                <Blank/>
                <Blank/>
                <Section>
                    <Header>
                        프로젝트 / 경력 기술서
                    </Header>
                    <ProjectTitle>
                        <ProjectName>Cheating Detection</ProjectName>
                        <ProjectDate>2021.03 ~ 2021.11</ProjectDate>
                    </ProjectTitle>
                    <ProjectContentWrapper>
                        <ProjectContent>
                            <ProjectContentLeft>프로젝트 개요</ProjectContentLeft>
                            <ProjectContentRight>
                                온라인 시험 플랫폼에 딥 러닝 모델을 결합하여 3가지 유형의 부정행위를 탐지한다.<br/>
                                Verification 모델을 통한 대리시험 방지, Eye-Tracking 모델을 통한 카메라 사각지대 응시 방지, WebRTC의 ScreenSharing을 통한 모니터 내 부정행위 방지


                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>상세 업무</ProjectContentLeft>
                            <ProjectContentRight>온라인 시험 플랫폼에 딥 러닝 모델을 결합하여 3가지 유형의 부정행위를 탐지한다.</ProjectContentRight>
                        </ProjectContent>
                    </ProjectContentWrapper>
                </Section>
            </Wrap>
        </>
    )
}

export default Profile;