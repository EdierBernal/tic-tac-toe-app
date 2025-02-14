# Tic Tac Toe Game in Angular

This is a simple Tic Tac Toe game built with Angular. The game allows two players to take turns marking their spaces in a 3x3 grid. The first player to align three of their marks horizontally, vertically, or diagonally wins the game.

## Project Structure

The project is structured as follows:

```
tic-tac-toe-app
└── tic-tac-toe-app
    ├── src
        ├── app
            ├── app.component.html      # Main template for the application
            ├── app.component.ts         # Root component logic
            ├── app.module.ts            # Root module of the application
            ├── game
                ├── game.component.html  # Template for the game component
                ├── game.component.ts     # Game component logic
                └── game.component.css     # Styles for the game component
            └── models
                └── game.model.ts         # Game state models
        ├── assets                        # Assets folder for images, etc.
        ├── environments
            ├── environment.prod.ts       # Production environment settings
            └── environment.ts            # Development environment settings
        ├── index.html                    # Main HTML file
        ├── main.ts                       # Entry point for the application
        ├── polyfills.ts                  # Polyfills for browser compatibility
        └── styles.css                    # Global styles
    ├── angular.json                      # Angular CLI configuration
    ├── package.json                      # npm configuration
    ├── tsconfig.json                    # TypeScript configuration
    └── README.md                        # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd tic-tac-toe-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   ng serve
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:4200
   ```

## Usage

- Players take turns clicking on the grid to place their marks (X or O).
- The game checks for a winner after each move.
- If all spaces are filled without a winner, the game ends in a draw.
- Players can refresh the page to start a new game.

## License

This project is licensed under the MIT License.