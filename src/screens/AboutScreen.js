import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const AboutScreenUseRedux = props => {
    const [counter, setCounter] = useState(0);
    const decrement = () => {
        setCounter(prevState => prevState - 1);
    }
    return (
        <View>
            <Text>Value of counter: {counter}</Text>

            <View style={styles.containerButton}>
                <TouchableOpacity
                    onPress={() => setCounter(prevState => prevState + 1)}
                    style={[styles.button, styles.buttonIncrement]}
                >
                    <Text style={{color: 'white'}}>Increment</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={decrement}
                    style={[styles.button, styles.buttonDecrement]}
                >
                    <Text style={{color: 'white'}}>Decrement</Text>
                </TouchableOpacity>
            </View>
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
