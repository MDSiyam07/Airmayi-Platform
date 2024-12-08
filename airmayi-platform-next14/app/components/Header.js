import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
          <HomeOutlined style={{ fontSize: '24px' }} />
      </Link>
      <h1>Airmayi Platform</h1>
    </header>
  );
};

export default Header;