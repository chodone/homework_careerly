import React from "react";
import styled from "styled-components";

const BoxPostInner = styled.div`
  width: 540px;
  height: 120px;
  margin: 0 0 0 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const BoxPostText = styled.div`
  text-align: left;
  color: #333;
  line-height: 1.5;
  font-size: 1rem;
  box-sizing: border-box;
`;

const BoxPostTextDetail = styled.p`
  color: #333 !important;
  line-height: 1.8 !important;
  font-size: 0.875rem !important;
  word-wrap: break-word;
  display: block;
  white-space: pre-line;
  margin: 0;
`;

const BoxReadMore = styled.span`
  color: #999 !important;
  line-height: 1.8 !important;
  cursor: pointer;
`;

function BoxPostComponent() {
  return (
    <BoxPostInner>
      <BoxPostText>
        <BoxPostTextDetail>
          비프 브루기뇽 만들기
          <br />
          <br />
          준비된 고기 센불에 강하게 시어링 한다. 시어링후 라돈(베이컨),으깬
          마늘5알, 토마토소스를 넣고 볶는다. 그후 부르고뉴 와인을 넣고...
          <BoxReadMore>더 보기</BoxReadMore>
        </BoxPostTextDetail>
      </BoxPostText>
    </BoxPostInner>
  );
}

export default BoxPostComponent;
