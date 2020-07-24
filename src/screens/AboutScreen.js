import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {increment, decrement} from '../store/actions/counterActions'

const AboutScreenUseRedux = props => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counterReducer.counter);
    const valueToIncrement = useSelector(state => state.counterReducer.valueToIncrement);
    const decrementFunction = () => {
        dispatch(decrement());
    }
    return (
        <View>
            <Text>Value of counter: {counter}</Text>

            <View style={styles.containerButton}>
                <TouchableOpacity
                    onPress={() => dispatch(increment())}
                    style={[styles.button, styles.buttonIncrement]}
                >
                    <Text style={{color: 'white'}}>Increment</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={decrementFunction}
                    style={[styles.button, styles.buttonDecrement]}
                >
                    <Text style={{color: 'white'}}>Decrement</Text>
                </TouchableOpacity>
            </View>

            <Text>{valueToIncrement}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIncrement: {
        backgroundColor: 'green'
    },
    buttonDecrement: {
        backgroundColor: 'red'
    }
})

export default AboutScreenUseRedux;
