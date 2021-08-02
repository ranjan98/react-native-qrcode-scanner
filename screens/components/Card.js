import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default Card = (props) => {
    return (
        <>
            <View style={styles.container}>
                <Text selectable={true}>{props.text}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        elevation: 1,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 50,
        alignItems: 'center',
    },
});
