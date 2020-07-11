import React from 'react';
import styled from 'styled-components';

import Link from 'next/link'
import Head from 'next/head'

import withAnalytics from '~/hocs/withAnalytics'

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

// import { Container } from './styles';

function Home() {
  return <div>
    <Head>
      <title>Home</title>
    </Head>
    <Title>Hello World</Title>
    <img src="/static/panda.jpg" width="200" />
    <Link href="users">
      <a>Usuários</a>
    </Link>
  </div>;
}

export default withAnalytics()(Home);