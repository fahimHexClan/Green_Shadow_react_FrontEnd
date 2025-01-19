import React from 'react';
import { Link } from 'react-router-dom';

// Define the props interface
interface MenuItemProps {
  linkurl: string;
  linktext: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ linkurl, linktext }) => {
  return (
    <Link to={linkurl}>{linktext}</Link>
  );
};

export default MenuItem;
