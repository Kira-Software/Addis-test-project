import React from "react";
import { Nav } from "../components/navbar";
import {Footer} from "../components/footer"
import styled from "styled-components";

const Text = styled.span`
  input {
    width: 300px;
    height: 30px;
  }
`;

const Radio = styled.span`
  input {
    width: 20px;
    height: 20px;
    margin-right: 50px;
  }
`;

const Button = styled.span`
  button {
    width: 200px;
    height: 30px;
    color: blue;
    border-radius: 10px;
    margin-left: 30px;
    cursor: pointer;
  }
`;

const Editform = styled.div`
  margin-left: 20%;
  margin-top: 50px;
`;

export const Edit = () => {
  return (
    <div>
      <Nav />
      <Editform>
        <h3>Edit page</h3>

        <table cellPadding={10}>
          <tr>
            <td>Name</td>
            <td>
              <Text>
                <input type="text" placeholder="Employee Name" id="name" />
              </Text>
            </td>
          </tr>
          <tr>
            <td>Birth Date</td>
            <td>
              <Text>
                <input type="date" />
              </Text>
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              <Radio>
                <label>Male: </label>
                <input type="radio" value="Male" name="gender" />

                <label>Female: </label>
                <input type="radio" value="Female" name="gender" />
              </Radio>
            </td>
          </tr>
          <tr>
            <td>Salary</td>
            <td>
              <Text>
                <input type="number" id="name" />
              </Text>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Button>
                {" "}
                <button>Edit</button>
              </Button>
            </td>
          </tr>
        </table>
      </Editform>
      {/* <Footer /> */}
    </div>
  );
};
