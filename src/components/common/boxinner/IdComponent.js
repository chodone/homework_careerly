import React from "react";

import styled from "styled-components";

const UserWrap = styled.a`
  width: 100%;
  height: 40px;
  margin-top: 16px;
  margin-bottom: 12px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  text-decoration: none;
  box-sizing: border-box;
`;

const UserImg = styled.img`
  width: 38px;
  height: 38px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #dbdbdb !important;
  border-color: #eee !important;
  margin-right: 16px;
  box-sizing: border-box;
`;

const UserInfo = styled.div`
  height: 39px;
  font-size: 1rem;
  box-sizing: border-box;
`;

const UserProfile = styled.p`
  text-decoration: none;
  color: #999 !important;
  font-size: 0.875rem !important;
  margin: 0px;
  box-sizing: border-box;
`;

const UserName = styled.span`
  color: #333 !important;
  font-family: Pretendard, sans-serif;
  font-weight: 700 !important;
  margin-right: 8px;
  line-height: 1.5;
  box-sizing: border-box;
`;

const PostTime = styled.p`
  color: #999 !important;
  font-size: 0.75rem !important;
  line-height: 1.5;
  margin: 0px;
  box-sizing: border-box;
`;

function IdComponent() {
  return (
    <UserWrap href="#href">
      <UserImg src="https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png" />
      <UserInfo>
        <UserProfile>
          <UserName>조성욱</UserName>
          Data Scientist
        </UserProfile>
        <PostTime>1시간 전</PostTime>
      </UserInfo>
    </UserWrap>
  );
}

export default IdComponent;
