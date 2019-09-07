import React from 'react';
import styled from 'styled-components';
import MainLayout from './../components/layouts/MainLayout';

const NotFoundMessageContainer = styled.article`
  display: flex;
    align-items: center;
    justify-content: center;
  min-height: 900px;
  min-heignt: 90vh;
`;

const NotFoundMessage = styled.h1`
  background: var(--black-smoke);
  box-shadow: var(--shadow);
  color: var(--white);
  padding: 3rem;
`;

const NotFoundPage = () => (
  <MainLayout title="Page Not Found! | myAnime.page">
    <NotFoundMessageContainer>
      <NotFoundMessage>Oops! This page doesn't exist!</NotFoundMessage>
    </NotFoundMessageContainer>
  </MainLayout>
);

export default NotFoundPage;