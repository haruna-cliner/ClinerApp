import React from 'react';
import {Text} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import {View} from 'react-native';
import Colors from '../../themes/colors';

const Avatar = ({name}) => {
    return (
        <View style={[tw`rounded-full justify-center items-center`, {
            width: 100,
            height: 100,
            backgroundColor: Colors.primaryText,
        }]}>
            <Text style={tw`text-4xl text-black`}>
                {name && name.substr('0', 1).toLocaleUpperCase()}
            </Text>
        </View>
    );
};

export default Avatar;
