import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserAvatarThunk } from '../../../../core/thunks/user';

const AvatarForm: FC = () => {
  const [file, setFile] = useState<File>();
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const eFile = event.currentTarget.files[0];
    if (eFile) setFile(eFile);
  };

  const updateAvatar = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(updateUserAvatarThunk(file));
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={updateAvatar}>update</button>
    </div>
  );
};

export default AvatarForm;
