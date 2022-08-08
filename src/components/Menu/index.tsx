import * as Styled from "./styles"
import logo  from "../../assets/logo_paterns/logo.png"
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons";

const Menu = () => {
  return (
    <Styled.MenuContainer>
      <img src={logo} alt="Logo" />
      <div>
        <HomeIcon />
        <SettingsIcon />
      </div>
      <LogoutIcon />
    </Styled.MenuContainer>
  );
};

export default Menu;
