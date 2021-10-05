import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineComment,
} from "react-icons/ai";

const NavbarWrap = styled.div`
  z-index: 5;
  height: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100vw !important;
  background: #ffffff;
`;
const NavContainer = styled.div`
  width: 992px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Pretendard-Regular, sans-serif;
`;

const NavFrontWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavLogo = styled.img`
  height: 1.5rem;
  cursor: pointer;
`;

const NavLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
`;

const NavStyledLink = styled(Link)`
  font-size: 0.875rem !important;
  text-decoration: none;
  color: #555 !important;
  margin-right: 10px;
`;

const NavProfileWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavIconsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavStyledIcon = styled.div`
  font-size: 2rem !important;
  color: #555 !important;
  display: flex;
  align-items: center;
  cursor: pointer;

  & + & {
    margin-left: 1rem; // 근접해 있는것에 대해 style을 주고 싶을 때 사용하는 문법
  } // sass scss에 대해 공부해보기
`;

const NavProfileImg = styled.img`
  width: 2rem;
  height: 2rem;
  padding-left: 1rem;
`;

function NavbarComponent() {
  return (
    <>
      <NavbarWrap>
        <NavContainer>
          <NavFrontWrap>
            <NavLogo src="https://careerly.co.kr/_next/static/images/img-logo-789fb5a9000960c8e86ed6e1a0f54a2f.png" />
            <NavLinkWrap>
              <NavStyledLink>프로필 탐색</NavStyledLink>
              <NavStyledLink>인턴채용공고</NavStyledLink>
            </NavLinkWrap>
          </NavFrontWrap>
          <NavProfileWrap>
            <NavIconsWrap>
              <NavStyledIcon>
                <AiOutlineSearch />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineComment />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineBell />
              </NavStyledIcon>
            </NavIconsWrap>
            <NavProfileImg src="	https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png" />
          </NavProfileWrap>
        </NavContainer>
      </NavbarWrap>
    </>
  );
}

export default NavbarComponent;
