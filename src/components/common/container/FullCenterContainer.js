import React from "react";
import styled from "styled-components";

const ContainerWrap = styled.div`
  width: 100%;
  height: calc(100vh - 4rem); //브라우저의 높이 - 60px
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FullCenterContainer({ children }) {
  //children 주의!!
  return (
    <>
      <ContainerWrap>{children}</ContainerWrap>
    </>
  );
}

export default FullCenterContainer;
