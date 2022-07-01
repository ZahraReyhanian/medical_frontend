import React from "react";
import styled from "styled-components";
import {
  Container,
  SectionContainer,
} from "../../components/styles/GlobalStyles";
import TitleComponent from "../../components/title/TitleComponent";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BodyMain } from "../../components/styles/TextStyles";
import SmallDetailCard from "../../components/cards/SmallDetailCard";
import QuizStartCard from "../../components/cards/QuizStartCard";

const StartQuiz = () => {
  return (
    <QuizDetailContainer>
      <Container>
        <Row>
          <QuizColRight md={7} sm={12}>
            <TitleWrapper>
              <a href="/">آزمون های روانشناسی</a>
              <span> / </span>
              <TitleComponent title=" انواع شخصیت" align={"right"} />
            </TitleWrapper>
            <DescriptionRow>
              <SmallDetail md={6} sm={12}>
                <SmallDetailCard
                  icon="/images/icons/question.png"
                  description="تعداد سوالات : 40"
                />
              </SmallDetail>
              <SmallDetail md={6} sm={12}>
                <SmallDetailCard
                  icon="/images/icons/time.png"
                  description="مدت زمان : 5 دقیقه"
                />
              </SmallDetail>
              <DescriptionWrapper md={12} sm={12}>
                <BodyDescription>
                  شخصیت درون گرایی دارید یا برون گرا هستید؟ ما انسان‌ها دارای
                  ویژگی‌های شخصیتی مختلفی هستیم، که این ویژگی‌های باعث می شود،
                  در موقعیتی یکسان رفتارهای متفاوتی از دیگران داشته باشیم. یکی
                  از این خصوصیات شخصیتی که تاثیر زیادی نیز بر همه جنبه‌های زندگی
                  ما دارد، "درون‌گرایی" و "برون‌گرایی" است. البته هیچکس دورن گرا
                  یا برون گرای مطلق نیست و هرکس دارای درجه ای از هردوی این هاست
                  و هرگاه میزان درونگرایی فرد از برونگرایی او بیشتر باشد در دسته
                  ی درونگرا قرار می گیرد و هر گاه درجه ی برونگرایی بیشتر شود او
                  برونگرا نام می گیرد. تیپ شخصیتی شما کدام است؟ برای شناخت تیپ
                  شخصیتی خود و آگاهی از این که برون گرا هستید یا درون گرا، تست
                  روانشناسی زیر را انجام داده و در پایان ضمن شناخت تیپ شخصیتی
                  خود از توصیه های ارائه شده برای بهبود تعاملات خود استفاده
                  نمایید. این پرسشنامه شامل 33 سوال است لطفا هر سوال را با دقت
                  بخوانید و با توجه به ویژگی های فردی خود با یکی از گزینه های
                  زیر پاسخ دهید.
                </BodyDescription>
              </DescriptionWrapper>
            </DescriptionRow>
          </QuizColRight>
          <QuizColLeft md={5} sm={12}>
            <ImageContainer>
              <QuizImage src="/images/download.jpg" />
            </ImageContainer>
            <StartWrapper>
              <QuizStartCard />
            </StartWrapper>
          </QuizColLeft>
        </Row>
      </Container>
    </QuizDetailContainer>
  );
};

export default StartQuiz;

const QuizDetailContainer = styled(SectionContainer)`
  padding-top: 2rem;
`;

const QuizColRight = styled(Col)`
  padding-left: 3rem;
`;

const QuizColLeft = styled(Col)``;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 0 0.6rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const QuizImage = styled.img`
  filter: drop-shadow(25px 25px 20px rgba(0, 0, 0, 0.13));
  border-radius: 13px;
  width: 24rem;
  height: 16rem;
`;

const DescriptionRow = styled(Row)``;

const SmallDetail = styled(Col)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const DescriptionWrapper = styled(Col)`
  margin-top: 3rem;
`;
const BodyDescription = styled(BodyMain)`
  text-align: justify;
`;

const StartWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
