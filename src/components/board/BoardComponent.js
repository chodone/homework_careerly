import React from "react";
import styled from "styled-components";
import Board from "../../pages/Board";
import BoxPostComponent from "../common/boxinner/BoxPostComponent";
import FunctionComponent from "../common/boxinner/FunctionComponent";
import IdComponent from "../common/boxinner/IdComponent";
import RecommendComponent from "../common/boxinner/RecommendComponent";

const BoardWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
`;

const BoardContainer = styled.div`
  max-width: 48rem;
  padding-left: 0;
  padding-right: 0;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh !important;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #333;
  text-align: left;
  box-sizing: border-box;
`;

const BoardBoxWrap = styled.div`
  max-width: 36rem;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 1rem;
  padding-top: 1rem;
  box-sizing: border-box;
  font-family: Pretendard-Regular, sans-serif;
`;

const BoardBox = styled.div`
  margin-bottom: 0.75rem;
  height: 280px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
`;

function BoardComponent() {
  return (
    <>
      <BoardWrap>
        <BoardContainer>
          <BoardBoxWrap>
            <BoardBox>
              <IdComponent />
              <BoxPostComponent />
              <RecommendComponent />
              <FunctionComponent />
            </BoardBox>
          </BoardBoxWrap>
        </BoardContainer>
      </BoardWrap>
    </>
  );
}

export default BoardComponent;
