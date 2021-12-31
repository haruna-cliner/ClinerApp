import React from 'react';
import {Image, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Button} from 'react-native-elements';
import Colors from '../../themes/colors';


const HeaderTop = ({title, onPress, imageLeft}) => {
    return (<View style={tw`flex-row justify-between py-1`}>
        <Image style={[{width: 100, height: 40}]} source={imageLeft}/>
        <Button
            onPress={onPress}
            buttonStyle={tw`bg-transparent`}
            titleStyle={{color: Colors.primaryText}}
            title={title}/>
    </View>);
};

export default HeaderTop;