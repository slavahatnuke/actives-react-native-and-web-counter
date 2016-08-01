import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default () => ({
    counter = 0,
    onUp =() => null,
    onDown =() => null,
    onToggle =() => null,
}) => {
    return <View>
        <Text>Counter: {counter}</Text>

        <TouchableHighlight onPress={onUp}>
            <Text>up</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={onDown}>
            <Text>down</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={onToggle}>
            <Text>toggle</Text>
        </TouchableHighlight>
    </View>;
}