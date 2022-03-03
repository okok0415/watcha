import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon} from "./Icons/Home.svg";
import { ReactComponent as AlreadyIcon} from "./Icons/Already.svg";
import { ReactComponent as ContinueIcon} from "./Icons/Continue.svg";
import { ReactComponent as SearchIcon} from "./Icons/Search.svg";
import { ReactComponent as WishIcon} from "./Icons/Wish.svg";
import { ReactComponent as StarIcon} from "./Icons/Star.svg";
const Container = styled.nav`
    position : fixed;
    top: 0;
    left: 0;
    z-index: 501;
    background : ${props => props.theme.sidebarBGColor};
    width: 240px;
    height: 100%;
    border-right : 1px ${props => props.theme.sidebarBorderColor} solid;

`
const Logo = styled.div`
    display : block;
    margin: 24px 0 0 26px;
`
const Img = styled.img.attrs({
    src : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk2IiBoZWlnaHQ9IjU5IiB2aWV3Qm94PSIwIDAgMTk2IDU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc4LjI3MTMgMTIuOTE4NFYyMC43NzFIODYuMDk0NlY1Ni4xOTU2SDk1Ljg0MzJWMjAuNzcxSDEwMy4yMThWMTIuOTE4NEg3OC4yNzEzWk0xNTMuNDY0IDI5LjYzODlIMTQ2LjAwNFYxMi45NzYzSDEzNi4yODVWNTYuMjUzMkgxNDYuMDA0VjM3LjQ5MTJIMTUzLjQ2NFY1Ni4yNTMySDE2My4xODNWMTIuOTc2M0gxNTMuNDY0VjI5LjYzODlaTTExOS42MTMgMTIuNDUyN0gxMTcuOTJDMTA5LjE0MiAxMi40NTI3IDEwNS42MzEgMTYuOTMxNiAxMDUuNjMxIDI0LjIwM1Y0NC44NTIxQzEwNS42MzEgNTIuMTIzOSAxMDkuMTQyIDU2Ljc3NyAxMTguMTA4IDU2Ljc3N0gxMTkuODAxQzEyOC43MDQgNTYuNzc3IDEzMS44MzkgNTEuNDI1MiAxMzEuODM5IDQ1LjM3NjNWMzcuOTg5MUgxMjIuMzA5VjQ0Ljg1MjFDMTIyLjMwOSA0Ny40MTIzIDEyMS40MzEgNDguOTgyNiAxMTguOTIzIDQ4Ljk4MjZDMTE2LjQ3NyA0OC45ODI2IDExNS42NjMgNDcuNTI4NiAxMTUuNjYzIDQ0Ljc5NDZWMjQuMTQ0NkMxMTUuNjYzIDIxLjQxMDUgMTE2LjQ3NyAyMC4wMTUgMTE4LjkyMyAyMC4wMTVDMTIxLjQ5MyAyMC4wMTUgMTIyLjMwOSAyMS41MjY5IDEyMi4zMDkgMjQuMTQ0NlYyOS4xNDdIMTMxLjgzOVYyMy42MjFDMTMxLjgzOSAxNi40MDg3IDEyOC40NTMgMTIuNDUyNyAxMTkuNjEzIDEyLjQ1MjdaTTY4Ljc4MiA0MS40MjI0TDY1Ljk1NTggMjMuMzMxNkg2NC4yODQxTDYxLjQ1NzYgNDEuNDIyNEg2OC43ODJaTTcyLjMyNjIgMTIuOTE4NEw3OS45NzU5IDU2LjE5NTZINzEuMDkwMkw3MC4wMDkgNDkuMjc1M0g2MC4yMzA4TDU5LjE0OTMgNTYuMTk1Nkg1MC4yNjM2TDU3LjkxMzYgMTIuOTE4NEg3Mi4zMjYyWk0xODQuMzkxIDQxLjQyMjRMMTgxLjU2NCAyMy4zMzE2SDE3OS44OTNMMTc3LjA2NiA0MS40MjI0SDE4NC4zOTFaTTE4Ny45MzUgMTIuOTE4NEwxOTUuNTg1IDU2LjE5NTZIMTg2LjY5OUwxODUuNjE4IDQ5LjI3NTNIMTc1Ljg0TDE3NC43NTkgNTYuMTk1NkgxNjUuODczTDE3My41MjIgMTIuOTE4NEgxODcuOTM1WiIgZmlsbD0iI0ZGMDU1OCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjI1MDEgMC43NTc4MTJMMzkuMzUyMSA0Mi4yMDY3TDM4LjU3MzMgNDIuMjQ2NkwzMS42ODA3IDEyLjkyMjRIMjMuMTY0TDE4LjAwNzggNDMuMzA3MkwxNi45MDI3IDQzLjM2MzlMMTIuMjg2MiAxMi45MjI0SDAuNDE0MDYyTDExLjIxNTEgNTguMjM5N0wyMy4yODkxIDU3LjQ1NTdMMjcuMjE3MyAyOS4zMjY4TDI4LjM2OTQgMjkuMjY1M0wzMy42Mjk1IDU2Ljc3NjFMNDUuMTg1NSA1Ni4wMjA2TDU0LjM2MjUgMC43NTc4MTJINDIuMjUwMVoiIGZpbGw9IiNGRjA1NTgiLz4KPC9zdmc+Cg==',
    alt : 'Watcha'
})`
    vertical-align: top;
    width: 88px;
    height: 26px;
`

const Section = styled.section`
    padding: 0 16px;
    margin: 30px 0 0;

`
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    margin: 0 0 16px;
`

const SecondUl = styled(Ul).attrs({
    aria_label : '보관함'
})``

const Li = styled.li`
    align-self : stretch;
    list-style: none;
    padding : 0;
    margin: 0;
`
const Lili = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    align-self: stretch;
    width: 100%;
    padding: 8px 12px;
    border: 0;
    border-radius: 8px;
    outline: none;
    appearance: none;
    font-size: 14px;
    font-weight: 400;
    background : ${props => props.theme.sidebarAccentColor};
    color : ${props => props.theme.textColor};
    svg {
        width : 20px;
        height: 20px;
        margin: 0 10px 0 0;
    }
`

function Sidebar () {

    return (
        <>
            <Container>
                <Link to="/browse/video">
                    <Logo>
                        <Img/>
                    </Logo>
                </Link>
                <Section>
                    <Ul>
                            <Li>
                                <Lili>
                                    <HomeIcon/>
                                    홈
                                </Lili>
                            </Li>
                            <Li>
                                <Lili>
                                    <SearchIcon/>
                                    검색
                                </Lili>
                            </Li>
                            <Li>
                                <Lili>
                                    <StarIcon/>
                                    평가하기
                                </Lili>
                            </Li>
                    </Ul>
                </Section>


            </Container>
        </>
    )
}

export default Sidebar;
