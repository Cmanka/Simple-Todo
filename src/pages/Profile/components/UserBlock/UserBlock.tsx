import React, { FC } from 'react';
import * as Styled from './styled';
import { UserBlockProps } from './types';

const UserBlock: FC<UserBlockProps> = ({
  user,
  avatar,
  avatarIsLoading,
}: UserBlockProps) => {
  return (
    <>
      <div>
        <strong>First name:</strong>
        {user.firstName}
      </div>
      <div>
        <strong>Last name:</strong>
        {user.lastName}
      </div>
      <div>
        <strong>Email:</strong>
        {user.email}
      </div>
      <div>
        <strong>Image:</strong>
        {avatarIsLoading ? (
          <span>Avatar is loading...</span>
        ) : avatar ? (
          <Styled.Image src={avatar} />
        ) : (
          <span>no avatar</span>
        )}
      </div>
    </>
  );
};

export default UserBlock;
