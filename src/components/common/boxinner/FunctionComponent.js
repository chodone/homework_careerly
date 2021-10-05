import React from "react";
import styled from "styled-components";

const FunctionWrap = styled.div`
  width: 570px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FunctionRecommend = styled.a`
  display: flex;
  padding: 20px 15px;
  text-decoration: none;
  color: #333 !important;
`;

const FunctionImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 4px;
`;

const FunctionRecommendText = styled.p`
  margin: 0;
  line-height: 1.5;
  font-size: 0.75rem !important;
  font-weight: 400;
`;

const FunctionShareComments = styled.div`
  display: flex;
  align-items: center;
`;

const FunctionShareDiv = styled.div`
  display: flex;
  align-items: center;
`;

const FunctionShareAnchor = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333 !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
  padding-bottom: 0.75rem !important;
  padding-top: 0.75rem !important;
`;

const FunctionShareText = styled.p`
  font-size: 0.75rem !important;
  color: #333 !important;
  margin-top: 0;
  margin-bottom: 0;
`;

const FunctionShareCount = styled.span`
  font-size: 0.75rem !important;
  color: #333 !important;
  font-weight: 700 !important;
  margin-left: 0.25rem !important;
  margin-top: 0;
  margin-bottom: 0;
`;

const FunctionStick = styled.div`
  width: 0.0625rem;
  height: 0.75rem;
  background-color: #dbdbdb !important;
`;

const FunctionComment = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333 !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
  padding-bottom: 0.75rem !important;
  padding-top: 0.75rem !important;
`;

const FunctionCommentText = styled.p`
  font-size: 0.75rem !important;
  color: #333 !important;
  margin-top: 0;
  margin-bottom: 0;
`;

const FunctionCommentCount = styled.p`
  margin-left: 0.25rem !important;
  font-size: 0.75rem !important;
  color: #333 !important;
  font-weight: 700 !important;
  margin-top: 0;
  margin-bottom: 0;
`;

function FunctionComponent() {
  return (
    <FunctionWrap>
      <FunctionRecommend href="#href">
        <FunctionImg
          src="https://careerly.co.kr/_next/static/images/icn_bulb_line_teal-400_20-5bd11236c0f7f1e75452e7ea98523505.png"
          alt="recommend_icon"
        />
        <FunctionRecommendText>추천해요</FunctionRecommendText>
      </FunctionRecommend>
      <FunctionShareComments>
        <FunctionShareDiv>
          <FunctionShareAnchor href="#href">
            <FunctionImg
              src="https://careerly.co.kr/_next/static/images/icn_share_line_teal-400_20-0e80c7fa3b61aef1833979eaad8df0a1.png"
              alt="share_icon"
            />
            <FunctionShareText>공유하기</FunctionShareText>
            <FunctionShareCount>63</FunctionShareCount>
          </FunctionShareAnchor>
        </FunctionShareDiv>
        <FunctionStick></FunctionStick>

        <FunctionComment href="#href">
          <FunctionImg
            src="	https://careerly.co.kr/_next/static/images/icn_chat_line_teal-400_20-93d3e378c1623aa5fee3da15583f6aa6.png"
            alt="comments_icon"
          />
          <FunctionCommentText>댓글</FunctionCommentText>
          <FunctionCommentCount>16</FunctionCommentCount>
        </FunctionComment>
      </FunctionShareComments>
    </FunctionWrap>
  );
}

export default FunctionComponent;
