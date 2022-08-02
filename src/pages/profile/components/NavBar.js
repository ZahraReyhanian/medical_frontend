import React, { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { toast } from "react-toastify";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import useAxiosAuth from "../../../hooks/useAxiosAuth";

const NavBar = ({ image, username }) => {
  const [imageFile, setImageFile] = useState();
  const [imagePath, setImagePath] = useState();
  const [anchorMenu, setAnchorMenu] = useState();
  const [avatar, setAvatar] = useState("/images/avatar/photo.png");
  const inputRef = useRef();

  const getImage = () => {
    if (imagePath) return imagePath;
    return avatar;
  };

  useEffect(() => {
    if (image) setAvatar(image);
  }, []);

  let api = useAxiosAuth();

  const handleToggleMenu = (e) => {
    if (anchorMenu) setAnchorMenu(null);
    else setAnchorMenu(e.currentTarget);
  };

  const uploadUserPhoto = async (url, data) => {
    try {
      let response = await api.post(url, data);

      console.log(response.data);
      toast.success("پروفایل با موفقیت بروزرسانی شد");
      setAvatar(data.avatar);
    } catch (err) {
      console.log(err.message);
    } finally {
    }
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePath(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      const formData = new FormData();
      formData.append("avatar", e.target.files[0]);
      uploadUserPhoto("/api/userprofile/", formData);
    }
  };

  return (
    <NavbarWrapper>
      <Nav>
        <Profile>
          <Grid
            container
            direction={"row-reverse"}
            onClick={handleToggleMenu}
            style={{ cursor: "pointer", justifyContent: "center" }}
          >
            <img src={getImage()} alt={"profile"} />
            <Grid item container direction={"column"}>
              <Typography>{username}</Typography>
            </Grid>
            <input
              ref={inputRef}
              type={"file"}
              style={{ display: "none" }}
              onChange={handleAvatarChange}
            />
          </Grid>
          {/* <img src="/images/profile.jpg" alt="" /> */}
        </Profile>
        <NavItems>
          <NavItem>
            <NavLink to="/profile" exact activeClassName="active">
              پروفایل
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/setting" exact activeClassName="active">
              تنظیمات
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/saved" exact activeClassName="active">
              ذخیره شده ها
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/paid" exact activeClassName="active">
              آزمون های خریداری شده
            </NavLink>
          </NavItem>
        </NavItems>

        <Menu
          open={anchorMenu}
          onClose={() => setAnchorMenu(null)}
          anchorEl={anchorMenu}
        >
          <MenuItem
            onClick={() => {
              inputRef.current.click();
            }}
          >
            ویرایش عکس پروفایل
          </MenuItem>
        </Menu>
      </Nav>
    </NavbarWrapper>
  );
};

export default NavBar;

const NavbarWrapper = styled.div`
  font-size: 1.2rem;
`;
const Profile = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  img {
    width: 70%;
    width: 140px;
    height: 140px;
    border-radius: 100%;
    border: 5px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      width: 110px;
      height: 110px;
    }

    @media screen and (max-width: 576px) {
      width: 90px;
      height: 90px;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1000px) {
  }
`;
const NavItems = styled.ul`
  width: 100%;
  padding: 0;
  margin: 5rem 0 0 0;
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
const NavItem = styled.li`
  list-style: none;
  text-align: center;

  a {
    border-radius: 5px;
    text-decoration: none;
    font-size: inherit;
    color: inherit;
    display: block;
    padding: 0.5rem 0;
    position: relative;
    font-weight: 400;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 0.4rem;
      height: 100%;
      background-color: #0381ff33;
      transform-origin: bottom;
      transform: scale(0);
      overflow-x: hidden;
      transition: transform 0.4s,
        0.2s width 0.2s cubic-bezier(1, -0.16, 0.6, 1.32);
    }
    &:hover::before {
      width: 100%;
      transform: scale(1);
    }
    @media screen and (max-width: 576px) {
      font-size: 16px;
    }
  }
  .active {
    background-color: #037fff;
    color: #fff;
  }
`;
