import styled from "styled-components";
import Sidebar from "../Navbar/Sidebar";
import Img from "./Images/4.jpg"
import django from "./Images/django.png"
import mongodb from "./Images/mongodb.png"
import opencv from "./Images/opencv.png"
import pytorch from "./Images/pytorch.png";
import react from "./Images/react.png";
import redis from "./Images/redis.png";
import redux from "./Images/redux.png";
import tensorflow from "./Images/tensorflow.png"
import typescript from "./Images/typescript.png"
import javascript from "./Images/javascript.png"
import selenium from "./Images/selenium.png"
import pandas from "./Images/pandas.png"
import flask from "./Images/flask.png"
import python from "./Images/python.png"
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
    src: 'https://ghchart.rshah.org/okok0415'
})`
    width: 800px;

`
const SHeader = styled.div`
    margin: 20px 0px;
    padding-bottom: 10px;
    font-size: 20px;
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
const InformationText = styled.div`

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
const Blank2 = styled.div`
    width: 1px;
    height: 10px;
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
    margin: 20px 0;

`
const ProjectContentLeft = styled.div`
    font-size: 18px;
    font-weight: 700;
    display: flex;
    justify-content: flex-end;
    margin: 5px 20px;
`
const ProjectContentRight = styled.div`
    margin: 5px 20px;
`
const ProjectContentRight2 = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin: 5px 20px;
`

const ProjectTool = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    justify-items: center;
`

const ProjectTeam = styled.div`
    display: grid;
    grid-template-columns: 1fr 7fr;
    margin-bottom: 5px;
`
const ProjectTeamLeft = styled.div`
`
const ProjectTeamRight = styled.div`
`
const ProjectAbstract = styled.div`
    margin-bottom: 5px;
`
function Profile() {

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
                            <Image />
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
                                <TextRight>dlawjdals11@naver.com, +82 1032361410</TextRight>
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
                <Blank />
                <Section>
                    <Header>
                        Github / 기술 스택
                    </Header>
                    <SHeader>
                        Github Contribution
                    </SHeader>
                    <ContributionWrapper>
                        <Contribution />
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
                <Blank />
                <Blank />
                <Section>
                    <Header>
                        프로젝트 / 경력 기술서
                    </Header>
                    <SHeader>업무 경험</SHeader>
                    <ProjectTitle>
                        <ProjectName>(주)넷코아테크</ProjectName>
                        <ProjectDate>2021.06 ~ 2021.08</ProjectDate>
                    </ProjectTitle>
                    <ProjectContentWrapper>
                        <ProjectContent>
                            <ProjectContentLeft>부서</ProjectContentLeft>
                            <ProjectContentRight2>미래개발팀</ProjectContentRight2>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>직급</ProjectContentLeft>
                            <ProjectContentRight2>인턴</ProjectContentRight2>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>활동</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectAbstract>중앙보훈병원과 협업하여 노인들의 낙상, 발열, 수면 데이터를 수집하여 관제, 분석한 다음, 응급상황이라 판단</ProjectAbstract>
                                <ProjectAbstract> 시 병원 관계자와 보호자에게 자동으로 메시지 발송을 통해 더 큰 사고 예방</ProjectAbstract>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>도구</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectTool>
                                    <img src={react} height={50} /><img src={javascript} height={50} />
                                </ProjectTool>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>담당 업무</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectAbstract>• 병원 관계자들이 노인들의 데이터를 관제 할 수 있는 웹 프론트엔드 개발</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;데이터 관제 웹페이지 UI/UX 기획 및 구현(10페이지 분량)</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;데이터 추가 기능 구현</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;테이블 정렬, 검색 기능 개발</ProjectAbstract>
                            </ProjectContentRight>
                        </ProjectContent>
                    </ProjectContentWrapper>
                    <ProjectTitle>
                        <ProjectName>APL(홍익대학교 컴퓨터공학과 연구실)</ProjectName>
                        <ProjectDate>2021.08 ~ 2021.12</ProjectDate>
                    </ProjectTitle>
                    <ProjectContentWrapper>
                        <ProjectContent>
                            <ProjectContentLeft>직급</ProjectContentLeft>
                            <ProjectContentRight2>학부 연구생</ProjectContentRight2>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>활동</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectAbstract>(주)넷코아테크에서 인턴으로 일하는 중 연구실 제의를 받고 참가. 이전 중앙보훈병원과 함께 진행한 프로젝트</ProjectAbstract>
                                <ProjectAbstract>의 SW개발자 및 중앙보훈병원 보장구 센터 디지털 전환 자문 연구원으로 활동</ProjectAbstract>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>도구</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectTool>
                                    <img src={django} height={50} /><img src={flask} height={50} /><img src={python} height={50} /><img src={mongodb} height={50} /><img src={pandas} height={50} /><img src={selenium} height={50} />
                                </ProjectTool>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>담당 업무</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectAbstract>• 중앙보훈병원 보장구 센터 디지털 전환 자문 연구원</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;국내외 논문 분석</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;병원 EMR 개선방안 분석 & 자문</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;병원 관계자, 보장구 센터 이용자 인터뷰 및 개선방안 분석</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;병원 물류 센터 개선 방안 분석 & 자문</ProjectAbstract>
                                <Blank2 />
                                <ProjectAbstract>• 발열 측정 센서 설치 및 데이터베이스 연동</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;발열 측정 센서 데이터베이스 구축 및 연동</ProjectAbstract>
                                <Blank2 />
                                <ProjectAbstract>• 병원 관계자들이 노인 데이터를 관제할 수 있는 웹 서버 개발</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;로그인 세션, 노인 상세 정보, 연결된 센서 등 API 생성</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;데이터베이스 구축 및 연동</ProjectAbstract>
                                <Blank2 />
                                <ProjectAbstract>• 응급상황 발생 시 알람 시스템 구축</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;지속적으로 데이터베이스를 확인하고 응급상황 발생 시 카카오톡 알람 전송 시스템 구축</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;낙상, 고열 등의 응급상황 기준 알고리즘 생성</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;Selenium을 통한 응급상황 발생 시 로그인 후 메세지 보내는 과정을 자동화</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;알람 발생 시 데이터베이스에 저장</ProjectAbstract>
                                <Blank2 />
                                <ProjectAbstract>• SmartThings 센서 데이터 분석</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;실내온도, 외출 횟수, 화장실 이용 횟수 등을 측정할 수 있는 ioT 기기 데이터를 데이터베이스로 연동</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;Pandas로 센서 데이터 분석 후 노인분들과 병원 관계자에게 주간 리포트 발송</ProjectAbstract>
                                <Blank2 />
                            </ProjectContentRight>
                        </ProjectContent>
                    </ProjectContentWrapper>
                    <SHeader>프로젝트 경험</SHeader>
                    <ProjectTitle>
                        <ProjectName>Cheating Detection</ProjectName>
                        <ProjectDate>2021.03 ~ 2021.11</ProjectDate>
                    </ProjectTitle>
                    <ProjectContentWrapper>
                        <ProjectContent>
                            <ProjectContentLeft>프로젝트 개요</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectAbstract>온라인 실시간 시험 플랫폼에 딥 러닝 모델을 결합하여 3가지 유형의 부정행위를 탐지한다.</ProjectAbstract>
                                <ProjectAbstract>자아식별 모델을 통한 대리시험 방지, 시선 추적 모델을 통한 카메라 사각지대 응시 방지, 화면공유를 통한 웹 </ProjectAbstract>
                                <ProjectAbstract>서핑 방지 위 3가지를 통해 최근 수요가 증가한 비대면 시험의 공정성을 높여 코로나 확산을 억제하는데 기여</ProjectAbstract>
                                <ProjectAbstract>하는 프로젝트</ProjectAbstract>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>팀원</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectTeam>
                                    <ProjectTeamLeft>임정민(팀장)</ProjectTeamLeft>
                                    <ProjectTeamRight>- Frontend Developer, Backend Developer</ProjectTeamRight>
                                </ProjectTeam>
                                <ProjectTeam>
                                    <ProjectTeamLeft>이강복</ProjectTeamLeft>
                                    <ProjectTeamRight>- ML/DL Developer</ProjectTeamRight>
                                </ProjectTeam>
                                <ProjectTeam>
                                    <ProjectTeamLeft>하인혜</ProjectTeamLeft>
                                    <ProjectTeamRight>- ML/DL Developer</ProjectTeamRight>
                                </ProjectTeam>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>도구</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectTool>
                                    <img src={react} height={50} /><img src={redux} height={50} /><img src={typescript} height={50} />
                                    <img src={django} height={50} /><img src={mongodb} height={50} /><img src={redis} height={50} />
                                    <img src={pytorch} height={50} /><img src={tensorflow} height={50} /><img src={opencv} height={50} />
                                </ProjectTool>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>상세 업무</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectAbstract>• 온라인 시험 플랫폼 UI/UX 기획 및 구현(10~20페이지 분량)</ProjectAbstract>
                                <ProjectAbstract>• WebSocket P2P를 통한 관리자-응시자 사이의 채팅, 웹 캠 프레임, 화면 공유, 시선 좌표를 관리자에게 전송</ProjectAbstract>
                                <ProjectAbstract>• 로그인 세션(로그인, 회원가입, 정보, 로그아웃)구현 및 API 생성</ProjectAbstract>
                                <ProjectAbstract>• WebSocket을 통한 동영상 프레임을 시선 추적 모델에 연결</ProjectAbstract>
                                <ProjectAbstract>• WebSocket을 통한 신분증 사진과 실제 시험 응시자를 비교하는 자아식별 모델과의 연결</ProjectAbstract>
                                <ProjectAbstract>• 데이터베이스 연동 및 관리</ProjectAbstract>
                            </ProjectContentRight>
                        </ProjectContent>
                    </ProjectContentWrapper>
                    <ProjectTitle>
                        <ProjectName>My Stock MBTI</ProjectName>
                        <ProjectDate>2021.01 ~ 2021.02</ProjectDate>
                    </ProjectTitle>
                    <ProjectContentWrapper>
                        <ProjectContent>
                            <ProjectContentLeft>프로젝트 개요</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectAbstract>MBTI 질문지에 답하고 그에 맞는 주식 종목을 추천해주는 웹페이지</ProjectAbstract>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>팀원</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectTeam>
                                    <ProjectTeamLeft>이종민(팀장)</ProjectTeamLeft>
                                    <ProjectTeamRight>- Product Manager</ProjectTeamRight>
                                </ProjectTeam>
                                <ProjectTeam>
                                    <ProjectTeamLeft>이동혁</ProjectTeamLeft>
                                    <ProjectTeamRight>- Product Manager</ProjectTeamRight>
                                </ProjectTeam>
                                <ProjectTeam>
                                    <ProjectTeamLeft>임정민</ProjectTeamLeft>
                                    <ProjectTeamRight>- Frontend Developer</ProjectTeamRight>
                                </ProjectTeam>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>도구</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectTool>
                                    <img src={react} height={50} /><img src={javascript} height={50} />
                                </ProjectTool>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>상세 업무</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectAbstract>• 질문지, 결과 페이지 등 기초 웹페이지 설계 및 구현</ProjectAbstract>
                                <ProjectAbstract>• 전체 방문자 수 체크하는 시스템, URL 복사 시스템 구현</ProjectAbstract>
                                <ProjectAbstract>• 웹페이지 디자인 적용</ProjectAbstract>
                            </ProjectContentRight>
                        </ProjectContent>
                    </ProjectContentWrapper>
                    <ProjectTitle>
                        <ProjectName>Fruits Classification</ProjectName>
                        <ProjectDate>2021.05 ~ 2021.06</ProjectDate>
                    </ProjectTitle>
                    <ProjectContentWrapper>
                        <ProjectContent>
                            <ProjectContentLeft>프로젝트 개요</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectAbstract>다양한 ML/DL 모델들을 이용하여 과일 분류에 효과적인 모델 분석</ProjectAbstract>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>팀원</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectTeam>
                                    <ProjectTeamLeft>이강복(팀장)</ProjectTeamLeft>
                                    <ProjectTeamRight>- CNN Model</ProjectTeamRight>
                                </ProjectTeam>
                                <ProjectTeam>
                                    <ProjectTeamLeft>임정민</ProjectTeamLeft>
                                    <ProjectTeamRight>- DNN Model</ProjectTeamRight>
                                </ProjectTeam>
                                <ProjectTeam>
                                    <ProjectTeamLeft>김민호</ProjectTeamLeft>
                                    <ProjectTeamRight>- SVM Model</ProjectTeamRight>
                                </ProjectTeam>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>도구</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectTool>
                                    <img src={pytorch} height={50} />
                                </ProjectTool>
                            </ProjectContentRight>
                        </ProjectContent>
                        <ProjectContent>
                            <ProjectContentLeft>상세 업무</ProjectContentLeft>
                            <ProjectContentRight>
                                <ProjectAbstract>• DNN 모델 설계, 구현</ProjectAbstract>
                                <ProjectAbstract>• 과일 데이터 전처리</ProjectAbstract>
                                <ProjectAbstract>• 파라미터 조정을 통한 가장 높은 정확도와 이유 분석</ProjectAbstract>
                            </ProjectContentRight>
                        </ProjectContent>
                    </ProjectContentWrapper>
                </Section>
            </Wrap>
        </>
    )
}

export default Profile;