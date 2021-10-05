import React from "react";
import BoardContainer from "../container/board/BoardContainer";
import NavbarContainer from "../container/common/navbar/NavbarContainer";
import styled from "styled-components";
import FullCenterContainer from "../components/common/container/FullCenterContainer";

function Board() {
  return (
    <>
      <NavbarContainer />
      <FullCenterContainer>
        <BoardContainer />
      </FullCenterContainer>
    </>
  );
}

export default Board;
