import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Avatar, Badge} from 'react-native-elements';
import AppIcon from './AppIcon';
import Colors from '../../themes/colors';
import tw from 'tailwind-react-native-classnames';

const AvatarWithBadge = ({value, icon, handlePress, status = 'status'}) => {
    return (
        <TouchableWithoutFeedback onPress={() => handlePress && handlePress()}>
            <View style={tw`justify-center mr-3`}>
                <AppIcon name={icon} size={24} iconColor={Colors.white}/>
                <Badge
                    status={status}
                    value={value}
                    containerStyle={{position: 'absolute',top : -5 , left : -4}}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AvatarWithBadge;
