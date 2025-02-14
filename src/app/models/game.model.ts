export interface Player {
    name: string;
    symbol: 'X' | 'O';
}

export interface Board {
    cells: (string | null)[];
}

export class Game {
    private board: Board;
    private currentPlayer: Player;
    private winner: Player | null;

    constructor(playerX: Player, playerO: Player) {
        this.board = { cells: Array(9).fill(null) };
        this.currentPlayer = playerX;
        this.winner = null;
    }

    makeMove(index: number): boolean {
        if (this.board.cells[index] === null && !this.winner) {
            this.board.cells[index] = this.currentPlayer.symbol;
            this.checkWinner();
            this.switchPlayer();
            return true;
        }
        return false;
    }

    private switchPlayer(): void {
        this.currentPlayer = this.currentPlayer.symbol === 'X' ? { name: 'Player O', symbol: 'O' } : { name: 'Player X', symbol: 'X' };
    }

    private checkWinner(): void {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (this.board.cells[a] && this.board.cells[a] === this.board.cells[b] && this.board.cells[a] === this.board.cells[c]) {
                this.winner = this.currentPlayer;
                break;
            }
        }
    }

    getBoard(): Board {
        return this.board;
    }

    getCurrentPlayer(): Player {
        return this.currentPlayer;
    }

    getWinner(): Player | null {
        return this.winner;
    }

    resetGame(playerX: Player, playerO: Player): void {
        this.board = { cells: Array(9).fill(null) };
        this.currentPlayer = playerX;
        this.winner = null;
    }
}