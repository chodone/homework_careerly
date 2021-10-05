import React from "react";
import styled from "styled-components";

const RecommenderStatus = styled.a`
  display: flex;
  width: 574px;
  height: 20px;
  position: relative;
  align-items: center;
  text-decoration: none;
  color: #333 !important;
  margin-left: 15px;
  margin-top: 10px;
  box-sizing: border-box;
`;

const RecommenderOne = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  min-width: 1.25rem;
  left: 1.8rem;
  overflow: hidden;
  position: absolute;
  border-radius: 50%;
  border: 1px solid #dbdbdb !important;
  margin-right: 4px;
  display: flex;
`;

const RecommenderTwo = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  min-width: 1.25rem;
  left: 0.9rem;
  overflow: hidden;
  position: absolute;
  border-radius: 50%;
  border: 1px solid #dbdbdb !important;
  margin-right: 4px;
  display: flex;
`;

const RecommenderThree = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  min-width: 1.25rem;
  left: 0rem;
  overflow: hidden;
  position: absolute;
  border-radius: 50%;
  border: 1px solid #dbdbdb !important;
  margin-right: 4px;
  display: flex;
`;

const RecommenderImg = styled.img`
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
`;

const RecommmendText = styled.p`
  position: absolute;
  left: 3.3rem;
  margin: 0;
  font-size: 0.75rem !important;
  line-height: 1.5;
`;

const RecommendCount = styled.span`
  font-weight: 700 !important;
  color: #333 !important;
`;

function RecommendComponent() {
  return (
    <RecommenderStatus href="#href">
      <RecommenderOne>
        <RecommenderImg
          src="https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"
          alt="recommend1"
        />
      </RecommenderOne>
      <RecommenderTwo>
        <RecommenderImg
          src="https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"
          alt="recommend2"
        />
      </RecommenderTwo>
      <RecommenderThree>
        <RecommenderImg
          src="https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"
          alt="recommend3"
        />
      </RecommenderThree>
      <RecommmendText>
        <RecommendCount>19명</RecommendCount>이 추천했어요.
      </RecommmendText>
    </RecommenderStatus>
  );
}

export default RecommendComponent;
