import React from 'react';

import Link from 'next/link'

// import { Container } from './styles';

function Home() {
  return <div>
    <h1>Hello World</h1>
    <Link href="users">
      <a>Usuários</a>
    </Link>
  </div>;
}

export default Home;