import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../components/styles/GlobalStyles";
import TitleComponent from "../../components/title/TitleComponent";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ArticleCard from "../../components/cards/ArticleCard";
import useAxios from "../../hooks/useAxios";
import { allArticleAxios } from "../../api/api_article";

import ReactPaginate from "react-paginate";

const AllArticle = () => {
  const [data, pageCount, error, loading, axiosFetch] = useAxios();

  const getData = (currentPage) => {
    axiosFetch({
      axiosInstance: allArticleAxios,
      method: "get",
      url: "/articles/?page=" + currentPage,
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
          <TitleComponent title="مقاله های پزشکی" align="right" />
        </TitleWrapper>
      </Row>
      <AllArticleRow>
        {loading && <p>در حال بارگزاری ...</p>}

        {!loading && error && <p className="errMsg">{error}</p>}

        {!loading && !error && data.results?.length && (
          <>
            {data.results.map((article, i) => {
              return (
                <AllArticleCol md={4} sm={12}>
                  <ArticleCard
                    title={article.title}
                    description={article.short_body}
                    image={
                      article.image ? article.image : "/images/card_img.jpg"
                    }
                    author={article.user}
                    date={article.updated_at}
                    link={"/articles/" + article.id}
                  />
                </AllArticleCol>
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
      </AllArticleRow>
    </Container>
  );
};

export default AllArticle;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const AllArticleRow = styled(Row)``;

const AllArticleCol = styled(Col)`
  margin: 1rem 0;
`;
