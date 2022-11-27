import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(239, 239, 239);
  background-image: url(https://wallpapercave.com/wp/wp3340286.jpg);
  background-attachment: cover;
  background-position: center center;
  background-size: cover;
`;

export const LoginForm = styled.div`
  padding: 60px 20px;
  max-width: 380px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  .login_form {
    .ant-form-item-required {
      color: #fff;
    }
    span {
      color: #fff;
    }
    .register_navigate {
      color: #fff;
    }
  }
`;
