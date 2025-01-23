import React from 'react';
import { Link } from 'react-router-dom';

// Define the props interface   ...
type Props = {
  linktext: string;
  url: string;
  className: string;
  children?: React.ReactNode; 
};

function MenuItem(props: Props) {
  return (
    <Link to={props.url} className={props.className}>
      {props.children} 
      {props.linktext} 
    </Link>
  );
}

export default MenuItem;
