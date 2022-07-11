import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/styles/GlobalStyles";
import TitleComponent from "../../components/title/TitleComponent";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BodyMain } from "../../components/styles/TextStyles";

const Article = () => {
  const [title, setTitle] = useState("مشاوره انگیزشی");
  const [date, setDate] = useState("12-1-2022");
  const [author, setAuthor] = useState("دکتر مهدی ریحانیان");
  const [image, setImage] = useState("/images/test/test.png");
  const [description, setDescription] = useState("");

  return (
    <ArticleContainer>
      <Container>
        <Row>
          <TitleComponent align="right" title={title} />
          <ArticleDetail>
            <ArticleDate>ارسال شده در {date}</ArticleDate>
            <DotWrapper>.</DotWrapper>
            <ArticleAuthor>{author}</ArticleAuthor>
          </ArticleDetail>
          <ImageWrapper>
            <ArticleImage src={image} />
          </ImageWrapper>
          <DescriptionWrapper>
            <ArticleDescription>
              <p dir="rtl">
                <span style={{ fontSize: "18px" }}>
                  مصرف مواد برای بسیاری از مصرف کنندگان در ابتدا خوشایند بوده و
                  برای آن ها جنبه های به ظاهر مثبتی دارد در واقع اگر اثرات مثبت
                  اولیه نمی بود، اکثر افراد مصرف مواد را ادامه نمی دادند. اثراتی
                  مثل افزایش انرژی، کاهش نیاز به خواب ، بیشتر شدن اعتماد به نفس
                  ، بهبود روحیه و پنها ن شدن برخی صفات اذیت کننده) مثل کم رویی،
                  گوشه گیری( از جمله اثرات مهمی هستند که بسیاری از مصرف کنندگان
                  به آن ها اشاره دارند .<br />
                  <br />
                  در جریان درمان شما نباید از بیان و ذکر این اثرات خجالت کشیده
                  یا آن ها را پنهان کنید . در هر حال درابتدای امر، شاید باور شما
                  بر این بوده که مواد مخدر فوایدی نیز دارد و به شما کمک میکرد.
                </span>
                <br />
                <br />
                &nbsp;
              </p>
            </ArticleDescription>
          </DescriptionWrapper>
        </Row>
      </Container>
    </ArticleContainer>
  );
};

export default Article;

const ArticleContainer = styled.div`
  padding: 0 12rem;
`;

const ArticleDetail = styled.div`
  font-weight: 100;
  padding-right: 18px;
`;

const ArticleDate = styled.span``;

const DotWrapper = styled.span`
  padding: 0 1rem;
`;

const ArticleAuthor = styled.span``;

const ImageWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const ArticleImage = styled.img``;

const DescriptionWrapper = styled.div`
  margin: 3rem 0;
`;

const ArticleDescription = styled(BodyMain)`
  line-height: 32px;
`;
