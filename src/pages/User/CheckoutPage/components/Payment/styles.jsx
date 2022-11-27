import styled, { css } from "styled-components";
import { Radio } from "antd";
import { BiCheck } from "react-icons/bi";

export const BankItem = styled(Radio.Button)`
  border-radius: 3px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 80px;
  width: 120px;
  cursor: pointer;

  & .icon {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: rgb(13, 92, 182);
    color: #fff;
    border-radius: 50%;
    display: none;
  }

  ${(props) =>
    props.active &&
    css`
      border: 1px solid rgb(13, 92, 182);
      & .icon {
        display: block;
      }
    `}
`;

export const ImageContainer = styled.div`
  border-radius: 3px;
  padding: 5px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80px;
  width: 120px;
  cursor: pointer;

  &:hover {
    border: 1px dashed rgb(13, 92, 182);
    opacity: 0.8;
  }
`;

export const Card = styled.div`
  height: 182.873px;
  margin: 0px auto;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.4s linear 0s;
  width: 290px;
  border-radius: 14.5px;
  background: linear-gradient(25deg, rgb(153, 153, 153), rgb(153, 153, 153));
`;

export const CardFront = styled.div`
  background: linear-gradient(25deg, rgb(153, 153, 153), rgb(153, 153, 153));
`;

export const CardChip = styled.div`
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc2IiB2aWV3Qm94PSIwIDAgMTAwIDc2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjEwMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGM0QwOEYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkFENzY2IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNOTIuNzI3IDc1LjQ1NWgtODUuNDU1Yy00IDAtNy4yNzMtMy4yNzMtNy4yNzMtNy4yNzN2LTYwLjkwOWMwLTQgMy4yNzMtNy4yNzMgNy4yNzMtNy4yNzNoODUuNDU1YzQgMCA3LjI3MyAzLjI3MyA3LjI3MyA3LjI3M3Y2MC45MDljMCA0LTMuMjczIDcuMjczLTcuMjczIDcuMjczIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0iTTcyLjEyMyAyOC40ODVoMjcuODc4di0xLjgxOGgtMjkuNjQ4Yy0uOTY1IDAtMS44MzIuNjAxLTIuMTcyIDEuNTA0LTIuMjg3IDYuMDcyLTIuNDMzIDEyLjU5NC0uNDM4IDE5Ljg0Mi40NTUgMS42NTQuNDM1IDMuNC0uMSA1LjAzLTIuMDM2IDYuMTk1LTcuNzc5IDE5Ljk4OC0xOC41NTEgMTkuOTg4LTExLjAwOCAwLTE2LjA5Ni0xNS42OTktMTcuMzM0LTIxLjk1Mi0uMTU1LS43ODQtLjEyMi0xLjU5Mi4xMDctMi4zNTcgMS42OTUtNS42NDggMi4wOTQtMTAuNjQtLjAxNi0xOS41OS0uMjA1LS44Ny0uMTgyLTEuNzgzLjA0OC0yLjY0NiA0LjQ4LTE2Ljc1NSAxMi44ODItMjAuMTQ3IDEyLjk2NS0yMC4xNzkuMzU2LS4xMzIuNTkzLS40NzIuNTkzLS44NTJ2LTUuNDU1aC0xLjgxOHYzLjc3NmMwIC42NS0uMzMyIDEuMjUyLS44ODQgMS41OTYtMi44MDMgMS43NDItOC45MDQgNi45MzYtMTIuNTU3IDIwLjQ1Ni0uMTguNjY4LS43ODEgMS4xMzYtMS40NzMgMS4xMzNsLTI4LjcyMi0uMTM5djEuODE4bDI3LjQxNi4xMzNjMS40NjguMDA3IDIuNzM1IDEuMDQxIDMuMDM3IDIuNDc4IDEuNDE2IDYuNzQxIDEuMjE5IDExLjAzOS4wODIgMTUuNDU4LS4zMTYgMS4yMy0xLjQyIDIuMDk2LTIuNjkgMi4xMDlsLTI3Ljg0NC4yN3YxLjgxOWwyOC42MDUtLjI3OGMuNjkzLS4wMDcgMS4yOTYuNDczIDEuNDM1IDEuMTUyIDEuNDQyIDcuMDQxIDYuODg3IDIzLjA3IDE5LjA1IDIzLjA3IDYuMzY4IDAgMTIuMDYyLTQuMjUgMTYuNDY3LTEyLjI5IDIuNjQ0LTQuODI4IDQuMDY3LTkuNTkxIDQuNTQxLTExLjM0NmgyOS45MDF2LTEuODE4aC0yOC4wMTZjLTEuMTU4IDAtMi4xODMtLjc3Mi0yLjQ4OS0xLjg4OS0xLjY5Mi02LjE2NC0xLjc2MS0xMS43NTUtLjItMTYuOTU5LjM3MS0xLjIzNSAxLjUzOC0yLjA2MSAyLjgyNy0yLjA2MXptLTE3LjE1LTIxLjkxNGMuMDQ1LjAyMiA0LjUxOSAyLjMyMiA5LjI1MyAxMC4wNDEuMTcyLjI4LjQ3LjQzNC43NzYuNDM0LjE5OCAwIC4zOTktLjA2NC41NzEtLjIwMi4zNjUtLjI5Mi40MTYtLjgzNy4xNzItMS4yMzUtMy41Ny01LjgwNS03LjAyNC04LjcxLTguNzc1LTkuOTMxLS40My0uMjk5LS42OC0uNzkyLS42OC0xLjMxNXYtNC4zNjNoLTEuODE4djUuNzU4YzAgLjM0NS4xOTUuNjU5LjUwMi44MTN6IiBmaWxsPSIjMEMwMjAwIi8+PC9zdmc+);
  background-repeat: no-repeat;
  background-size: contain;
  height: 26.3636px;
  left: 10%;
  position: absolute;
  top: 10%;
  width: 41.4286px;
`;

export const CardNumber = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: ${(props) => props.changeColor || "#ccc"};
  left: 10%;
  position: absolute;
  top: 45%;
`;

export const CardName = styled.div`
  bottom: 15%;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.changeColor || "#ccc"};
  left: 10%;
  line-height: 1;
  overflow: hidden;
  position: absolute;
  text-align: left;
  text-overflow: ellipsis;
  text-transform: uppercase;
  width: 60%;
`;

export const CardExpiry = styled.div`
  bottom: 15%;
  font-size: 0px;
  line-height: 1;
  position: absolute;
  right: 10%;
`;

export const CardExpiryTittle = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: ${(props) => props.changeColor || "#ccc"};
  margin-bottom: 5px;
`;

export const CardExpiryValue = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.changeColor || "#ccc"};
`;
