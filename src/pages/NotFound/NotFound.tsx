import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styled';

const NotFound: FC = () => (
  <Styled.NotFoundBlock>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </Styled.NotFoundBlock>
);

export default NotFound;
