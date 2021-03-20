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

    initGame() {
        var board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.setState({ gameBoard: board });
    }

    renderIcon(row:number, col:number) {
        var value:number = this.state.gameBoard[row][col];

        switch(value) {
            case 1: return(<Icon name="close-outline" style={styles.tileX} />);
            case -1: return(<Icon name="ellipse-outline" style={styles.tileO} />);
            default: return(<View/>);
        }
    }

    onPressTile(row:number, col:number) {
        // console.log("ROW ::: ", row)
        // console.log("COL ::: ", col)

        var board = this.state.gameBoard;
        if (board[row][col] == 0) {
            board[row][col] = this.state.currentPlayer;
            this.setState({ gmaeBoard: board });
            this.setState({ currentPlayer: this.state.currentPlayer * -1 });
        }
        var win:number = this.winChecker();
        if (win == 1) {
            alert("Player X is the winner !");
            this.initGame();
        } else if (win == -1) {
            alert("Player O is the winner !");
            this.initGame();
        }
    }

    winChecker():number {
        // console.log("JE SUIS LE WIN CHECKER");
        var board = this.state.gameBoard;

        var rowSum:number = 0;
        for (var rowI:number = 0; rowI < 3; rowI++) {
            rowSum = board[rowI][0] + board[rowI][1] + board[rowI][2];
            if (rowSum == 3) {
                console.log("ROW X win this game !");
                return 1;
            } else if (rowSum == -3) {
                console.log("ROW O win this game !");
                return -1;
            }
        }

        var colSum:number = 0;
        for (var colI:number = 0; colI < 3; colI++) {
            colSum = board[0][colI] + board[1][colI] + board[2][colI];
            if (colSum == 3) {
                console.log("COL X win this game !");
                return 1;
            } else if (colSum == -3) {
                console.log("COL O win this game !");
                return -1;
            }
        }

        var diagonalL:number = board[0][0] + board[1][1] + board[2][2];
        var diagonalR:number = board[0][2] + board[1][1] + board[2][0];
        if (diagonalL == 3 || diagonalR == 3) {
            console.log("Diagonal X win this game !");
            return 1;
        } else if (diagonalL == -3 || diagonalR == -3) {
            console.log("Diagonal O win this game !");
            return -1;
        }

        return 0;
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

            <Text></Text>

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