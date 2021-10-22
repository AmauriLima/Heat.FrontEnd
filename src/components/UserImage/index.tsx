import React from 'react';
import { UserImageWrapper } from './style';
// import githubIcon from '../../assets/images/github.svg';

interface IUser {
  avatar_url?: string,
  name?: string,
  large?: boolean | false,
}

function UserImage({ avatar_url, name, large }: IUser) {
  return (
    <UserImageWrapper large={large}>
      <img src={avatar_url} alt={name} />
    </UserImageWrapper>
  );
}

export default UserImage;
