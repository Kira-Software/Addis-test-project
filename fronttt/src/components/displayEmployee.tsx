import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = styled.div`
  width: 40%;
  height: 200px;
  overflow: auto;
  border: solid 1px blue;
  border-radius: 20px;
  margin-top: 20px;
  //float: right;
  //margin-right: 9%;

  p {
    font-weight: bold;
    margin-left: 100px;
  }
`;
const Icons = styled.span`
  float: right;
  margin-right: 100px;
`;

const Icon = styled.span`
  margin-left: 30px;
  cursor: pointer;
`;

export const DisplayEmployee: React.FC = () => {
  const [data, setData] = useState([
    {
      employeename: "Kirubel",
      birthdate: "1999-05-31",
      gender: "male",
      salary: "10000",
    },
    {
      employeename: "Someone",
      birthdate: "1997-05-31",
      gender: "male",
      salary: "15000",
    },
  ]);

  const handleDelete = () => {
    window.confirm("are you sure that you want to delete this employee?");
  };

  return (
    <div>
      <h1>Employee List</h1>
      {data.map((item, idx) => {
        return (
          <Card key={idx}>
            <p>Name: {item.employeename} </p>
            <p>Birth Date: {item.birthdate} </p>
            <p>Gender: {item.gender} </p>
            <p>Salary: {item.salary} </p>
            <Icons>
              <Icon>
                <Link to="/edit">
                  {" "}
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />{" "}
              </Icon>
            </Icons>
          </Card>
        );
      })}
    </div>
  );
};
