import Input from "../../components/Input";
import Logo from "../../assets/logo_paterns/logo.png";
import * as Styled from "./styles";
import Button from "../../components/Button";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface LoginProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLogged }: LoginProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleLogin = () => {
    if (email === "admin@admin.com" && senha === "admin") {
      setLogged(true);
      navigate("/");
      toast.success("Login efetuado com sucesso");
      return;
    }

    toast.error("Usuário ou Senha não encontrados :(");

  };

  return (
    <Styled.LoginContainer>
      <Styled.CardLogin>
        <Styled.CardLoginHeader>
          <img src={Logo} alt="" />
          <h1>Maycon Burguer</h1>
        </Styled.CardLoginHeader>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputSize="login"
          placeholder="e-mail"
          type="email"
        />
        <Input
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          inputSize="login"
          placeholder="Senha"
          type="password"
        />
        <Button text="ENTRAR" size="x-large" onClick={handleLogin} />
        <Styled.Paragraph>ou</Styled.Paragraph>
        <Styled.ButtonGoogle
          onClick={() => toast.error("Sessão em desenvolvimento")}
        >
          <img
            src="https://aws1.discourse-cdn.com/auth0/optimized/3X/8/a/8a06490f525c8f65d4260204bc3bc7b0e1fb0ba7_2_500x500.png"
            alt="Login com Google"
          />
          <p>Login com Google</p>
        </Styled.ButtonGoogle>
        <Styled.ButtonFacebook
          onClick={() => toast.error("Sessão em desenvolvimento")}
        >
          <img
            src="https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_512.png"
            alt="Login com Facebook"
          />
          <p>Login com Facebook</p>
        </Styled.ButtonFacebook>
        <a href="#">
          <Styled.Paragraph
            onClick={() => toast.error("Sessão em desenvolvimento")}
          >
            Esqueceu a senha?
          </Styled.Paragraph>
        </a>
      </Styled.CardLogin>
    </Styled.LoginContainer>
  );
};

export default Login;
