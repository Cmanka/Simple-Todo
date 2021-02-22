import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectUserAvatarLoadingState,
  selectUserAvatarState,
  selectUserDataState,
  selectUserLoadingState,
} from '../../core/selectors/user';
import AvatarForm from './components/AvatarForm/AvatarForm';
import UserBlock from './components/UserBlock/UserBlock';
import * as Styled from './styled';

const ProfilePage: FC = memo(() => {
  const user = useSelector(selectUserDataState);
  const userIsLoading = useSelector(selectUserLoadingState);
  const userAvatar = useSelector(selectUserAvatarState);
  const avatarIsLoading = useSelector(selectUserAvatarLoadingState);

  return (
    <>
      {userIsLoading ? (
        <Styled.Title>User is loading...</Styled.Title>
      ) : (
        <Styled.ProfilePage>
          <Styled.Title>User detail information</Styled.Title>
          <UserBlock
            user={user}
            avatar={userAvatar}
            avatarIsLoading={avatarIsLoading}
          />
          <AvatarForm />
        </Styled.ProfilePage>
      )}
    </>
  );
});

export default ProfilePage;
