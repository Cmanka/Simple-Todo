import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userAvatar, userProfile } from '../../core/actions/user';
import {
  selectUserAvatarLoadingState,
  selectUserAvatarState,
  selectUserDataState,
  selectUserLoadingState,
} from '../../core/selectors/user';
import * as Styled from './styled';

const ProfilePage: FC = memo(() => {
  const user = useSelector(selectUserDataState);
  const userIsLoading = useSelector(selectUserLoadingState);
  const avatar = useSelector(selectUserAvatarState);
  const avatarIsLoading = useSelector(selectUserAvatarLoadingState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userIsLoading) dispatch(userProfile());
    if (!avatarIsLoading) dispatch(userAvatar());
  }, []);

  return (
    <>
      {userIsLoading ? (
        <Styled.Title>User is loading...</Styled.Title>
      ) : (
        <Styled.ProfilePage>
          <Styled.Title>User detail information</Styled.Title>
          <div>
            <strong>First name:</strong>
            {user?.firstName}
          </div>
          <div>
            <strong>Last name:</strong>
            {user?.lastName}
          </div>
          <div>
            <strong>Email:</strong>
            {user?.email}
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
          <Link to="/profile_edit">Edit</Link>
        </Styled.ProfilePage>
      )}
    </>
  );
});

export default ProfilePage;
