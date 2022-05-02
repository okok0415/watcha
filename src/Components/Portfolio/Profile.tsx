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
    height: 120px;
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

const LetterTitle = styled.div`
    margin: 30px 0px;
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid rgb(200,200,200);
    align-items: center;
`

const LetterName = styled.span`

`

const LetterContent = styled.div`
    margin: 20px 0;

`
const LetterContentLeft = styled.div`
    font-size: 16px;
    font-weight: 500;
    display: flex;
    margin: 5px 20px;
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
                    <SHeader>어학자격/증명서</SHeader>
                    <Skill>
                        <SkillRightTextLeft>자격증 명</SkillRightTextLeft>
                        <SkillRightTextRight>토익(TOEIC)</SkillRightTextRight>
                    </Skill>
                    <Skill>
                        <SkillRightTextLeft>취득 일자</SkillRightTextLeft>
                        <SkillRightTextRight>2022.02.27</SkillRightTextRight>
                    </Skill>
                    <Skill>
                        <SkillRightTextLeft>취득 점수</SkillRightTextLeft>
                        <SkillRightTextRight>Total 760(LC435, RC325)</SkillRightTextRight>
                    </Skill>
                    <Skill>
                        <SkillRightTextLeft>인증 기관</SkillRightTextLeft>
                        <SkillRightTextRight>한국토익위원회</SkillRightTextRight>
                    </Skill>
                </Section>
                <Blank />
                <Blank />
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
                                <InfTextRight>코드를 읽을 수 있으며, 책을 참고하여 약간의 수정작업 또는 작은 변경사항을 추가할 수 있는 단계</InfTextRight>
                            </InformationText>
                            <InformationText>
                                <InfTextLeft>** :</InfTextLeft>
                                <InfTextRight>시스템 동작 방식을 알고 있으며, 기본적인 기능을 구현할 수 있는 단계</InfTextRight>
                            </InformationText>
                            <InformationText>
                                <InfTextLeft>*** :</InfTextLeft>
                                <InfTextRight>중간규모 프로그램 및 시스템을 개발할 수 있으며, 내부 구조에 대해 이해하고 있음</InfTextRight>
                            </InformationText>
                        </Information>
                    </InformationWrapper>
                    <SkillWrapper>
                        <Skill>
                            <SkillLeft>Frontend</SkillLeft>
                            <SkillRight>
                                <SkillRightLi>•   HTML5***, CSS3***, JavaScript(ES6)***, TypeScript***</SkillRightLi>
                                <SkillRightLi>•   React***</SkillRightLi>
                                <SkillRightLi>•   Redux**, Recoil**</SkillRightLi>
                                <SkillRightLi>•   Styled-Components***</SkillRightLi>
                            </SkillRight>
                        </Skill>
                        <Skill>
                            <SkillLeft>Backend</SkillLeft>
                            <SkillRight>
                                <SkillRightLi>•   Python**</SkillRightLi>
                                <SkillRightLi>•   Django***, Flask**</SkillRightLi>
                                <SkillRightLi>•   MongoDB*, SQLite3*, Redis*</SkillRightLi>
                                <SkillRightLi>•   REST API***, WebSocket***</SkillRightLi>
                                <SkillRightLi>•   Visual Studio Code, Jupyter</SkillRightLi>
                                <SkillRightLi>•   Git</SkillRightLi>
                            </SkillRight>
                        </Skill>
                        <Skill>
                            <SkillLeft>Data Science</SkillLeft>
                            <SkillRight>
                                <SkillRightLi>•   Pandas*</SkillRightLi>
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
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;데이터 관제 웹페이지 UI 설계(10페이지 분량)</ProjectAbstract>
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
                                <ProjectAbstract>• 발열 측정 데이터베이스 연동</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;발열 측정 센서 데이터베이스 연동</ProjectAbstract>
                                <Blank2 />
                                <ProjectAbstract>• 병원 관계자들이 노인 데이터를 관제할 수 있는 웹 서비스 개발</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;로그인 세션, 노인 상세 정보, 연결된 센서 등 API 생성</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;데이터베이스 연동</ProjectAbstract>
                                <Blank2 />
                                <ProjectAbstract>• 응급상황 발생 시 알람 시스템 구축</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;지속적으로 데이터베이스를 확인하고 응급상황 발생 시 카카오톡 알람 전송 시스템 구축</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;고열 등의 응급상황 기준 알고리즘 생성</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;응급상황 발생 시 메세지 보내는 과정 자동화</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;알람 발생 시 데이터베이스에 저장</ProjectAbstract>
                                <Blank2 />
                                <ProjectAbstract>• ioT 센서 데이터 DB 연동</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;실내온도, 외출 횟수, 화장실 이용 횟수 등을 측정할 수 있는 ioT 기기 데이터를 데이터베이스로 연동</ProjectAbstract>
                                <ProjectAbstract>&nbsp;&nbsp;&nbsp;노인분들과 병원 관계자에게 주간 리포트 발송</ProjectAbstract>
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
                                    <ProjectTeamRight>- Web Frontend/Backend Develop</ProjectTeamRight>
                                </ProjectTeam>
                                <ProjectTeam>
                                    <ProjectTeamLeft>이강복</ProjectTeamLeft>
                                    <ProjectTeamRight>- ML/DL Develop</ProjectTeamRight>
                                </ProjectTeam>
                                <ProjectTeam>
                                    <ProjectTeamLeft>하인혜</ProjectTeamLeft>
                                    <ProjectTeamRight>- ML/DL Develop</ProjectTeamRight>
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
                                <ProjectAbstract>• 온라인 시험 플랫폼 UI 설계 및 구현(10~20페이지 분량)</ProjectAbstract>
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
                                    <ProjectTeamRight>- PM</ProjectTeamRight>
                                </ProjectTeam>
                                <ProjectTeam>
                                    <ProjectTeamLeft>이동혁</ProjectTeamLeft>
                                    <ProjectTeamRight>- PM</ProjectTeamRight>
                                </ProjectTeam>
                                <ProjectTeam>
                                    <ProjectTeamLeft>임정민</ProjectTeamLeft>
                                    <ProjectTeamRight>- Web Develop</ProjectTeamRight>
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


/*
<Section>
<Header>
    자기소개서
</Header>
<LetterTitle>
    <LetterName>본인이 버킷플레이스와 Frontend 직무를 선택한 이유는 무엇이며, 만약 입사하게 된다면 어떻게 회사 발전에 기여할 수 있는지 작성해주세요. </LetterName>
</LetterTitle>
<ProjectContentWrapper>
    <LetterContent>
        <LetterContentLeft>
            저는 최근 오늘의집 기술 블로그에서 MSA 전환 프로젝트를 보며 저도 같이 일원이 되어 해결하고 싶다는 생각이 들었습니다.
            <br /><br />
            Ruby on Rails의 의존성을 줄이고 React의 전환을 이루어낸 프론트엔드팀에서 저는 React 라이브러리의 전문성을 지닌 사람으로서 팀에 이바지할 수 있다는 생각을 하였습니다.
            <br /><br />
            저는 21년 초 첫 프로젝트로 React 라이브러리를 사용하였고 이후 홍익대학교 컴퓨터 공학과 연구실에서 노인 데이터 관제 웹 애플리케이션 개발, 졸업 프로젝트인 부정행위 탐지기반 실시간 온라인 시험 애플리케이션의 프론트엔드를 단독으로 구현한 경험이 있습니다.
            <br /><br />
            또한, 저는 문제해결능력에 강점이 있습니다. 졸업 프로젝트의 팀장으로서 프론트엔드와 백엔드 뿐만 아니라 딥 러닝 모델 결합 과정에서 발생하는 다양한 문제들을 저의 아이디어로 해결한 경험이 다수 있고 제가 맡은 일이 아니어도 책임감 있게 다른 팀원과 의견을 공유하며 배움을 얻고 아이디어를 제공하는 적극적인 태도로 프로젝트에 임해왔습니다.
            <br /><br />
            저의 이러한 태도와 강점을 통해 버킷플레이스 프론트엔드 팀에 합류하여 MSA 전환과 같은 과업들을 같이 해결해나가고 싶습니다.                                <br /><br />
        </LetterContentLeft>
    </LetterContent>
</ProjectContentWrapper>
<LetterTitle>
    <LetterName>본인의 SW개발 활동 경험 중 다른 사람과 함께 같은 목표를 위해 노력한 경험 또는 어려운 기술적 문제를 해결한 경험에 대해 얘기해 주세요. </LetterName>
</LetterTitle>
<ProjectContentWrapper>
    <LetterContent>
        <LetterContentLeft>
            저는 졸업프로젝트로 부정행위 탐지 딥 러닝 모델 기반 실시간 시험 플랫폼을 개발한 경험이 있습니다.
            <br /><br />
            이는 실시간 시험을 칠 수 있는 웹 서비스로 시선 추적 딥 러닝 모델과 동일 인물 탐지 딥 러닝 모델 두 개를 결합하고 WebRTC를 이용한 화면공유 기능을 사용하여 모니터 밖의 시험 자료 응시, 대리시험, 모니터 내 자료 응시 3가지의 부정행위를 바로 잡고 온라인 시험의 부정행위를 줄이고자 하는 목적의 프로젝트였습니다.
            <br /><br />
            저는 그 중 실시간 시험 웹 서비스 개발과 딥 러닝 모델 결합, WebRTC를 이용한 화면공유 기능 구현 위 3가지 역할을 맡았습니다.
            <br /><br />
            프로젝트를 오랜 기간 하면서 다양한 시행착오가 있었지만 가장 대표적인 두 가지 사례를 언급하고자 합니다.
            <br /><br />
            첫 번째는 시선 추적 좌표를 관리자에게 어떻게 전달할 것인가? 에 대한 의문이었습니다.
            <br /><br />
            시선 추적 모델은 웹캠 영상 프레임을 모델에 넣으면 시선 좌표가 나오는 형태였는데, 학생 웹캠 영상 프레임을 시선 추적 모델에 넣어 실시간으로 좌표를 받아서 관리자에게 보내야 했습니다.
            <br /><br />
            여기서 주제에 대한 의문이 생겼습니다. 학생의 웹캠 영상 프레임을 받기 위해 WebSocket 통신을 하고 있었는데, 이는 1:1 통신이었기 때문에 학생과 연결된 상태에서 관리자에게 시선 좌표를 보내려면 학생과의 WebSocket 연결을 끊어야 했습니다.
            <br /><br />
            이를 해결하기 위해 2주간 다양한 WebSocket 관련 문서를 읽으며 공부하고, 다양한 사례를 찾아보며 시도를 한 결과 학생에게 시선 좌표를 전달해준 뒤 P2P 형태로 관리자에게 전달하는 방법을 고안해냈습니다.
            <br /><br />
            쉽게 설명하면 학생의 시선 좌표를 학생 본인이 받은 다음, 관리자에게 학생이 보이지 않는 채팅으로 시선 좌표를 보내는 형태였습니다.
            <br /><br />
            이는 성공적으로 작동하였습니다.
            <br /><br />
            두 번째는 모델 접근성의 문제였습니다.
            <br /><br />
            시선 추적 모델은 작동하기 위해 사전에 거쳐야 하는 Pine-Tuning, 카메라 파라미터 조정 등이 있어 시험을 치르기 전에 거쳐야 하는 과정이 번거로웠습니다.
            <br /><br />
            저는 시선 추적의 정확도가 떨어지더라도 이러한 과정을 줄이는 것이 사용자에게 편리함을 줄 것으로 판단하였고, 팀원은 과정 중 한 개라도 제외하게 된다면 정확도에 치명적인 영향을 줄 것이라 하며 반대하였습니다.
            <br /><br />
            따라서 저희는 직접 정확도를 실험을 통해 비교하기로 하였습니다. 카메라 파라미터 조정을 하는 기존 방식과 카메라 파라미터 부분을 제외한 방식을 비교하였는데, 기존에 있던 방식은 시선 이탈을 탐지하는 확률이 90%에 육박하였으나, 카메라 파라미터 부분을 제외하니 탐지율이 50~60%에 그쳤습니다.
            <br /><br />
            저희 팀은 수치화된 탐지율을 보고 번거롭더라도 탐지를 잘하는 모델을 선택하는 데 합의했고, 수치화된 데이터를 보니 모두 결과를 납득할 수 있었습니다.
            <br /><br />
            이후 프로젝트는 성공적으로 마무리되었고 프로젝트 수업에서 A+ 성적을 받는 쾌거를 이루어냈습니다.
            <br /><br />
        </LetterContentLeft>
    </LetterContent>
</ProjectContentWrapper>
<LetterTitle>
    <LetterName>본인이 끝까지 파고들어 본 가장 의미있었던 개발 경험과 이를 통해 성취한 것과 배운 점은 무엇인지 작성해주세요. </LetterName>
</LetterTitle>
<ProjectContentWrapper>
    <LetterContent>
        <LetterContentLeft>
            저는 작년 6월부터 12월까지 홍익대학교 컴퓨터공학과 연구실(APL)에서 IMSAFE 프로젝트를 진행한 적이 있습니다.
            <br /><br />
            이는 개인 프로젝트가 아닌 회사, 병원과 협업하여 하는 프로젝트로, 노인들의 낙상, 발열, 수면 데이터 등을 분석하고 응급 상황 시 병원 관계자들과 보호자에게 알람을 보내 더 큰 사고를 예방하는 프로젝트였습니다.
            <br /><br />
            저는 그중 병원 관계자들이 데이터를 관제할 수 있는 웹 페이지를 8주 내로 기획, UI/UX, 프론트엔드 개발 업무를 맡았습니다.
            <br /><br />
            저는 평일 7시간 정도를 이 업무에 투자하였고, 주 1회씩 사수에게 피드백을 받아 6주 만에 업무를 완성하였습니다.
            <br /><br />
            계획된 시간보다 일을 신속히 마무리한 것을 좋게 보신 교수님은 추후 다른 인원에게 배정될 업무였던 백엔드 개발, 알람 시스템 구축, 데이터 분석 후 리포트 작성 등 다양한 업무를 추가로 배정하였습니다.
            <br /><br />
            비록 프로젝트 중간에 투입되었지만, 프로젝트가 마무리될 때는 데이터 관리/알람을 총괄하는 핵심 프로젝트 원이 되었습니다.
            <br /><br />
            또한, 당시 기초적인 프론트엔드 개발 역량만을 가지고 있던 저는 서버 개발, 데이터 분석 등 다양한 직무의 경험을 할 수 있었고 특정 회사에서 졸업 후 거취에 대해 제의가 오기도 했습니다.
            <br /><br />
            이를 통해 한 가지에 꾸준히 집중하고 노력하면 좋은 결과가 따른다는 것을 알게 되었고, 다양한 직무의 경험을 하면서 처음 도전하는 일에 대한 두려움이 비교적 사라졌습니다.
            <br /><br />
        </LetterContentLeft>
    </LetterContent>
</ProjectContentWrapper>

</Section>
*/