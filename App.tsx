import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons as Icon } from 'react-native-vector-icons';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPlayer:1,
            gameBoard : [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]
        }
    }

    renderIcon(row, col) {
        var value:number = this.state.gameBoard[row][col];

        switch(value) {
            case 1: return(<Icon name="close-outline" style={styles.tileX} />);
            case -1: return(<Icon name="ellipse-outline" style={styles.tileO} />);
            default: return(<View/>);
        }
    }

    onPressTile(row, col) {
        console.log("ROW ::: ", row)
        console.log("COL ::: ", col)

        var board = this.state.gameBoard;
        if (board[row][col] == 0) {
            board[row][col] = this.state.currentPlayer;
            this.setState({ gmaeBoard: board });
            this.setState({ currentPlayer: this.state.currentPlayer * -1 });
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.rowTile}>
                <TouchableOpacity onPress={() => this.onPressTile(0, 0)} style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0, borderColor: "#000" }]}>
                    { this.renderIcon(0,0) }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onPressTile(0, 1)} style={[styles.tile, { borderTopWidth: 0 }]}>
                    { this.renderIcon(0,1) }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onPressTile(0, 2)} style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}>
                    { this.renderIcon(0,2) }
                </TouchableOpacity>
            </View>
            
            <View style={styles.rowTile}>
                <TouchableOpacity onPress={() => this.onPressTile(1, 0)} style={[styles.tile, { borderLeftWidth: 0 }]}>
                    { this.renderIcon(1,0) }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onPressTile(1, 1)} style={styles.tile}>
                    { this.renderIcon(1,1) }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onPressTile(1, 2)} style={[styles.tile, { borderRightWidth: 0}]}>
                    { this.renderIcon(1,2) }
                </TouchableOpacity>
            </View>
            
            <View style={styles.rowTile}>
                <TouchableOpacity onPress={() => this.onPressTile(2, 0)} style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}>
                    { this.renderIcon(2,0) }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onPressTile(2, 1)} style={[styles.tile, { borderBottomWidth: 0 }]}>
                    { this.renderIcon(2,1) }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onPressTile(2, 2)} style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}>
                    { this.renderIcon(2,2) }
                </TouchableOpacity>
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
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    rowTile: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    tileX: {
        color: "red",
        fontSize: 60,
    },
    tileO: {
        color: "green",
        fontSize: 60,
    }
});
