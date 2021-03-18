import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons as Icon } from 'react-native-vector-icons';

export default class App extends React.Component {

    render() {
        return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.rowTile}>
                <View style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0, borderColor: "#000" }]}>
                    <Icon name="close-outline" style={styles.tileX} />
                </View>
                <View style={[styles.tile, { borderTopWidth: 0 }]}></View>
                <View style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}></View>
            </View>
            
            <View style={styles.rowTile}>
                <View style={[styles.tile, { borderLeftWidth: 0 }]}></View>
                <View style={styles.tile}></View>
                <View style={[styles.tile, { borderRightWidth: 0}]}></View>
            </View>
            
            <View style={styles.rowTile}>
                <View style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}></View>
                <View style={[styles.tile, { borderBottomWidth: 0 }]}></View>
                <View style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}></View>
            </View>

        </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tile: {
        borderWidth: 10,
        width: 100,
        height: 100
    },
    rowTile: {
        flexDirection: "row"
    },
    tileX: {
        color: "red",
        fontSize: 60,
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center"
    }
});
