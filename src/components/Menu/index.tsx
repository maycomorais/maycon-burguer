import * as Styled from "./styles";
import logo from "../../assets/logo_paterns/logo.png";
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

interface MenuProps {
  path: "home" | "settings";
}

const Menu = ({ path }: MenuProps) => {
  const navigate = useNavigate()

  return (
    <Styled.MenuContainer>
      <img src={logo} alt="Logo" />
      <nav>
        <Styled.MenuItems active={path === "home"}>
          <Styled.MenuItemButton active={path === "home"}>
            <HomeIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItems>
        <Styled.MenuItems active={path === "settings"}>
          <Styled.MenuItemButton active={path === "settings"}>
            <SettingsIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItems>
      </nav>
      <Styled.MenuItems logout>
        <Styled.MenuItemButton onClick={() => navigate("/login")}>
          <LogoutIcon />
        </Styled.MenuItemButton>
      </Styled.MenuItems>
    </Styled.MenuContainer>
  );
};

export default Menu;
