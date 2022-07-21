import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../components/styles/GlobalStyles";
import TitleComponent from "../../components/title/TitleComponent";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import QuizIntroCard from "../../components/cards/QuizIntroCard";
import { allQuizAxios } from "../../api/api_quiz";
import useAxios from "../../hooks/useAxios";
import ReactPaginate from "react-paginate";

const AllQuiz = () => {
  const [data, pageCount, error, loading, axiosFetch] = useAxios();

  const getData = (currentPage) => {
    axiosFetch({
      axiosInstance: allQuizAxios,
      method: "get",
      url: "/psychology/tests/?page=" + currentPage,
    });
  };

  useEffect(() => {
    getData(1);
  }, []);

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;

    getData(currentPage);

    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Row>
        <TitleWrapper>
          <TitleComponent title="آزمون های روانشناسی" align="right" />
        </TitleWrapper>
      </Row>
      <AllQuizRow>
        {loading && <p>در حال بارگزاری ...</p>}

        {!loading && error && <p className="errMsg">{error}</p>}

        {!loading && !error && data.results?.length && (
          <>
            {data.results.map((quiz, i) => {
              return (
                <AllQuizCol md={6} sm={12}>
                  <QuizIntroCard
                    title={quiz.title}
                    image={quiz.image}
                    description={quiz.description}
                    url={"/tests/" + quiz.id}
                    questions={quiz.questions}
                    time="5"
                  />
                </AllQuizCol>
              );
            })}
          </>
        )}
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
        {/*         
        <AllQuizCol md={6} sm={12}>
          <QuizIntroCard
            title="شخصیت شناسی"
            image="/images/download.jpg"
            description="شخصیت درون گرایی دارید یا برون گرا هستید؟
ما انسان‌ها دارای ویژگی‌های شخصیتی مختلفی هستیم، که این ویژگی‌های باعث می شود، در موقعیتی یکسان رفتارهای متفاوتی از دیگران داشته باشیم. "
          />
        </AllQuizCol>
        <AllQuizCol md={6} sm={12}>
          <QuizIntroCard
            title="شخصیت شناسی"
            image="/images/download.jpg"
            description="شخصیت درون گرایی دارید یا برون گرا هستید؟
ما انسان‌ها دارای ویژگی‌های شخصیتی مختلفی هستیم، که این ویژگی‌های باعث می شود، در موقعیتی یکسان رفتارهای متفاوتی از دیگران داشته باشیم. "
          />
        </AllQuizCol>
        <AllQuizCol md={6} sm={12}>
          <QuizIntroCard
            title="شخصیت شناسی"
            image="/images/download.jpg"
            description="شخصیت درون گرایی دارید یا برون گرا هستید؟
ما انسان‌ها دارای ویژگی‌های شخصیتی مختلفی هستیم، که این ویژگی‌های باعث می شود، در موقعیتی یکسان رفتارهای متفاوتی از دیگران داشته باشیم. "
          /> */}
        {/* </AllQuizCol> */}
      </AllQuizRow>
    </Container>
  );
};

export default AllQuiz;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const AllQuizRow = styled(Row)``;

const AllQuizCol = styled(Col)`
  margin: 1rem 0;
`;
