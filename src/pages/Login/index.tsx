import Input from "../../components/Input";
import Logo from "../../assets/logo_paterns/logo.png";
import * as Styled from "./styles";

const Login = () => {
  return (
    <Styled.LoginContainer>
      <Styled.CardLogin>
        <div>
          <img src={Logo} alt="" />
          <h1>Maycon Burguer</h1>
        </div>
        <Input />
        <Input />
        <button></button>
      </Styled.CardLogin>
    </Styled.LoginContainer>
  );
};

export default Login;
