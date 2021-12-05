import React, { useState, useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getEmployee } from "../Redux/reducer/employee";

const Display = styled.div`
  // height: 1000px;
  // overflow: auto;
`;
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

  const dispatch = useDispatch();
  const employee = useSelector(
    (state: RootStateOrAny) => state.employee.employee
  );
  useEffect(() => {
    dispatch(getEmployee());
  }, []);


  //console.log(employee);
  return (
    <Display>
      <h1>Employee List</h1>
      {employee &&
        employee.map((item, idx) => {
          return (
            <Card key={idx}>
              <p>Name: {item.employeeName} </p>
              <p>Birth Date: {item.dateofBirth} </p>
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
    </Display>
  );
};
