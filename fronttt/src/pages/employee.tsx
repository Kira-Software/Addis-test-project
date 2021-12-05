import React from "react";
import styled from "styled-components";
import { Nav } from "../components/navbar";
import { Footer } from "../components/footer";
import { AddEmployee } from "../components/addEmployee";
import { DisplayEmployee } from "../components/displayEmployee";

const NavBar = styled.nav`
  width: 100%;
  height: 100px;
  background-color: #4589b5;
`;

const Add = styled.div`
  float: left;
  width: 50%;
`;

const Display = styled.div`

`;

const Foot = styled.div`
  margin-top: 100px;
`;

export const Employee: React.FC = () => {
  return (
    <div>
      <Nav />
      <Add>
        <AddEmployee />
      </Add>

      <Display>
        <DisplayEmployee />
      </Display>

      <Foot>
        <Footer />
      </Foot>
    </div>
  );
};
