import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

function AppIcon({name, size = 24, iconColor = '#fff', ...others}) {
    return (
        <Icon name={name} color={iconColor} size={size}  {...others} />
    );
}

export default AppIcon;
