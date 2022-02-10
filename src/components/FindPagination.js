import React, { FC, ChangeEvent, useEffect, useState } from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
import {
  Pagination,
  // usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from '@ajna/pagination';

const FindPagination = ({ currentPage, onPageChange, pagesCount, pages }) => {
  function handlePageChange(page) {
    onPageChange(page);
  }

  return (
    // <ChakraProvider>
    <Pagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    >
      <PaginationContainer>
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationPageGroup>
          {pages.map(page => (
            <PaginationPage key={`pagination_page_${page}`} page={page} />
          ))}
        </PaginationPageGroup>
        <PaginationNext>Next</PaginationNext>
      </PaginationContainer>
    </Pagination>
    // </ChakraProvider>
  );
};

export default FindPagination;
