import { Menu } from "antd";
import { RouterState } from "connected-react-router";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../store/reducers";

function useActive(currentPath: String, path: String) {
  return currentPath === path ? "ant-menu-item-selected" : "";
}

const Navigation = () => {
  const router = useSelector<AppState, RouterState>((state) => state.router);
  const pathname = router.location.pathname;
  const isHome = useActive(pathname, "/");
  const isShop = useActive(pathname, "/shop");
  const isSignin = useActive(pathname, "/signin");
  const isSignup = useActive(pathname, "/signup");

  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item className={isHome} key="home">
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item className={isShop} key="shop">
        <Link to="/shop">商城</Link>
      </Menu.Item>
      <Menu.Item className={isSignin} key="signin">
        <Link to="/signin">登录</Link>
      </Menu.Item>
      <Menu.Item className={isSignup} key="signup">
        <Link to="/signup">注册</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
