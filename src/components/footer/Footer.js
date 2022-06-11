import React, { useEffect, useState } from "react";
import {
  FooterWrapper,
  FooterLeft,
  FooterRight,
  FotterTitle,
  FooterInfo,
  InfoTitle,
  Address,
  Phone,
  PhoneInfo,
  SiteLinks,
  SocialLinks,
  SocialLinkItem,
} from "./Footer.elements";
import { Row, Col, Container } from "react-bootstrap";
import { Call, Instagram, LocationOn, Telegram } from "@material-ui/icons";
import { footerData } from "../data/footerDate";
import MenuButton from "../buttons/MenuButton";

const Footer = () => {
  // const [info, setInfo] = useState({});

  // useEffect(() => {
  //   getCallUs((isOk, data) => {
  //     if (!isOk) return console.log(data.message);
  //     else {
  //       console.log(data.data.callUs);
  //       setInfo(data.data.callUs);
  //     }
  //   });
  // }, []);
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <FooterLeft>
              <FotterTitle>مرکز پزشکی روانشناسی نوین</FotterTitle>
              <FooterInfo>
                <InfoTitle>آدرس</InfoTitle>
                <Address>
                  <LocationOn />
                  {"بابلسر، خیابان شریفی، ساختمان سیمیا"}
                </Address>
                <InfoTitle>تلفن</InfoTitle>
                <PhoneInfo>
                  <Phone>
                    <Call />
                    {"09117172758"}
                  </Phone>
                  <Phone>
                    <Call />
                    {"011-32368568"}
                  </Phone>
                </PhoneInfo>
              </FooterInfo>
            </FooterLeft>
          </Col>
          <Col md={6} sm={12}>
            <FooterRight>
              <FotterTitle>پیوند های مهم</FotterTitle>
              <FooterInfo>
                <SiteLinks>
                  {footerData.map((item) => (
                    <MenuButton item={item} />
                  ))}
                </SiteLinks>
                <SocialLinks>
                  <SocialLinkItem>
                    <a target="_blank" href={"https://t.me/" + "zryhn"}>
                      <Telegram />
                    </a>
                  </SocialLinkItem>
                  <SocialLinkItem>
                    <a
                      target="_blank"
                      href={"https://instagram.com/" + "_.zahra.rh99_"}
                    >
                      <Instagram />
                    </a>
                  </SocialLinkItem>
                </SocialLinks>
              </FooterInfo>
            </FooterRight>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
