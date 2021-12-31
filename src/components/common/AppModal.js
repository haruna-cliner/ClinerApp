import React, {useState} from 'react';
import {Alert, Modal, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Overlay} from 'react-native-elements';

export default function AppModal({modalVisibility, children,style}) {
    return (
        <Overlay
            style={style}
            animationType="slide"
            transparent={true}
            visible={modalVisibility}
            fullScreen={false}
            isVisible={modalVisibility}>
            <View style={tw`justify-center items-center`}>
                {children}
            </View>
        </Overlay>
    );
}