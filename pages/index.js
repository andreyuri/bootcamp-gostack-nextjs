import React from 'react';

import Link from 'next/link'
import Head from 'next/head'

import withAnalytics from '../src/hocs/withAnalytics'

// import { Container } from './styles';

function Home() {
  return <div>
    <Head>
      <title>Home</title>
    </Head>
    <h1>Hello World</h1>
    <img src="/static/panda.jpg" width="200" />
    <Link href="users">
      <a>Usuários</a>
    </Link>
  </div>;
}

export default withAnalytics()(Home);