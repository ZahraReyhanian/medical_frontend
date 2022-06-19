const item1 = {
  title: "پزشکی",
  icon: "/images/icons/stethoscope.svg",
  link: "/medical",
};

const item2 = {
  title: "روانشناسی",
  icon: "/images/icons/head-side-thinking.svg",
  link: "/psychology",
};

const authItem = {
  title: "ورود| ثبت نام",
  icon: "/images/icons/profile.svg",
  link: "/login",
};

const profile = {
  title: "پروفایل",
  icon: "/images/icons/profile.svg",
  link: "/profile",
};

const logout = {
  title: "خروج",
  icon: "/images/icons/sign-out.svg",
  link: "/logout",
};

export const menuData = [
  item1,
  item2,
  {
    title: "",
    icon: "/images/icons/account.svg",
    link: "/account",
  },
];

export const menuDataHamburger = [item1, item2, authItem];

export const tooltipData = [authItem];

export const menuDataHamburgerAuthUser = [item1, item2, profile, logout];

export const tooltipDataAuthUser = [profile, logout];
