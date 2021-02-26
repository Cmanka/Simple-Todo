import React, { FC, memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  userProfileUpdate,
  userUpdateAvatar,
} from '../../../../core/actions/user';
import { selectUserDataState } from '../../../../core/selectors/user';
import * as Styled from './styled';
import { ProfileFormValues } from './types';

const ProfileForm: FC = memo(() => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserDataState);
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm<ProfileFormValues>({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });

  useEffect(() => {
    register(
      { name: 'firstName' },
      {
        required: 'First name is required',
        minLength: {
          value: 2,
          message: 'Min length is 2',
        },
      }
    );
    register(
      { name: 'lastName' },
      {
        required: 'Last name is required',
        minLength: {
          value: 2,
          message: 'Min length is 2',
        },
      }
    );
    register({ name: 'file' });
  }, [register]);

  const onSubmit = handleSubmit((data) => {
    dispatch(
      userProfileUpdate({
        firstName: data.firstName,
        lastName: data.lastName,
        email: user.email,
        uid: user.uid,
      })
    );
    if (data.file[0]) dispatch(userUpdateAvatar(data.file[0]));

    history.push('/profile');
  });

  return (
    <Styled.ProfileForm>
      <h1>Edit profile form</h1>
      <form onSubmit={onSubmit}>
        <Styled.InputDiv>
          <label htmlFor="firstName">
            <strong>First name</strong>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            ref={register}
          />
          {errors.firstName && (
            <Styled.ErrorMessage>
              {errors.firstName.message}
            </Styled.ErrorMessage>
          )}
        </Styled.InputDiv>
        <Styled.InputDiv>
          <label htmlFor="lastName">
            <strong>Last name</strong>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="enter last name"
            ref={register}
          />
          {errors.lastName && (
            <Styled.ErrorMessage>{errors.lastName.message}</Styled.ErrorMessage>
          )}
        </Styled.InputDiv>
        <Styled.InputDiv>
          <input type="file" name="file" ref={register} />
        </Styled.InputDiv>
        <Styled.InputDiv>
          <button type="submit">Edit</button>
        </Styled.InputDiv>
      </form>
    </Styled.ProfileForm>
  );
});

export default ProfileForm;
