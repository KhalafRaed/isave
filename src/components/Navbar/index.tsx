import { Avatar as AntdAvatar } from "antd";
import { useUserContext } from "../../lib/User";
import { Dropdown } from "antd";
import { getNameInitials } from "../../lib/utils/strings.utils";
import { navbarItems } from "./constants";
import "./styles.css";

const Navbar = () => {
  const { user } = useUserContext();
  return (
    <div className="navbar">
      <div>ISave</div>
      <div>
        <Dropdown menu={{ items: navbarItems }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <AntdAvatar style={{ backgroundColor: "#f56a00" }} size="large">
              {getNameInitials(user?.displayName)}
            </AntdAvatar>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
