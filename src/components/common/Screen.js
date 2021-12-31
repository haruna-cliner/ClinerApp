import React from 'react';
import {StyleSheet, SafeAreaView, View, StatusBar, NativeModules, Platform} from 'react-native';
import Colors from '../../themes/colors';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

function Screen({
                    children,
                    style,
                    viewStyle,
                    statusBar = 'light-content',
                    bgStatus = Colors.actionDark,
                    hidden = false,
                }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <StatusBar hidden={hidden} translucent style={statusBar} backgroundColor={bgStatus}/>
            <View style={[styles.view, viewStyle]}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    view: {
        paddingTop: STATUSBAR_HEIGHT,
        flex: 1,
    },
});

export default Screen;