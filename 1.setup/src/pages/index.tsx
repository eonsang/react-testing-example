import React from 'react';

export type bookType = {
    title: string,
    imageUrl: string,
    description: string
}

const Index = ({ book }: {book: bookType}) => (
  <div>
    {book.title}
  </div>
);

export default Index;

export async function getServerSideProps() {
  const res = await fetch('https://my.backend/book');
  const book: bookType = await res.json();

  return {
    props: {
      book,
    },
  };
}
