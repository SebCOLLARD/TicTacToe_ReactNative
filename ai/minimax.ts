var ai:number = -1;
var user:number = 1;

function winChecker(gameBoard):number {
    var winner:number = 100;
    var board = gameBoard;

    var rowSum:number = 0;
    for (var rowI:number = 0; rowI < 3; rowI++) {
        rowSum = board[rowI][0] + board[rowI][1] + board[rowI][2];
        if (rowSum == 3) {
            winner = 1;
        } else if (rowSum == -3) {
            winner = -1;
        }
    }

    var colSum:number = 0;
    for (var colI:number = 0; colI < 3; colI++) {
        colSum = board[0][colI] + board[1][colI] + board[2][colI];
        if (colSum == 3) {
            winner = 1;
        } else if (colSum == -3) {
            winner = -1;
        }
    }

    var diagonalL:number = board[0][0] + board[1][1] + board[2][2];
    var diagonalR:number = board[0][2] + board[1][1] + board[2][0];
    if (diagonalL == 3 || diagonalR == 3) {
        winner = 1;
    } else if (diagonalL == -3 || diagonalR == -3) {
        winner = -1;
    }

    var freeSpot:number = 0;
    for (var i:number = 0; i  < 3; i++) {
        for (var j:number = 0; j < 3; j++) {
            if (board[i][j] == 0)
                freeSpot++;
        }
    }

    if (winner == 100 && freeSpot == 0)
        return 0;
    else
        return winner;
}

function minimax(board, depth:number, maximazing:boolean):number {
    var result:number = winChecker(board);

    if (result !== 100) {
        if (result == 1)
            return 10;
        else if (result == -1)
            return -10;
        else
            return 0;
    }

    if (maximazing) {
        var bestscore:number = -Infinity;

        for (var i:number = 0; i < 3; i++) {
            for (var j:number = 0; j < 3; j++) {
                if (board[i][j] == 0) {
                    board[i][j] = ai;
                    var score:number =minimax(board, depth - 1, false);
                    board[i][j] = 0;
                    bestscore = Math.max(score, bestscore);
                }
            }
        }
        return bestscore;
    } else {
        var bestscore:number = Infinity;

        for (var i:number = 0; i < 3; i++) {
            for (var j:number = 0; j < 3; j++) {
                if (board[i][j] == 0) {
                    board[i][j] = user;
                    var score:number =minimax(board, depth - 1, true);
                    board[i][j] = 0;
                    bestscore = Math.min(score, bestscore);
                }
            }
        }
        return bestscore;
    }
}

export default function bestMove(board) {
    var bestscore:number = -Infinity;
    var move = {};

    for (var i:number = 0; i < 3; i++) {
        for (var j:number = 0; j < 3; j++) {
            if (board[i][j] == 0) {
                board[i][j] = ai;
                var score:number = minimax(board, 3, false);
                board[i][j] = 0;
                if (score > bestscore) {
                    bestscore = score;
                    move = {i, j};
                }
            }
        }
    }
    if (move.i !== undefined || move.j !== undefined) {
        console.log("CORD AI :::::::::::::: I = ", move.i, " J = ", move.j);
        board[move.i][move.j] = ai;
    }
}