import {User, type UserProps} from '@gravity-ui/uikit';
import React from 'react';

const USER_AVATAR: UserProps['avatar'] = {text: 'Charles Darwin', theme: 'brand'};

export const UserSandbox: React.FC<UserProps> = ({name, description, size}) => {
    return <User avatar={USER_AVATAR} name={name} description={description} size={size} />;
};
