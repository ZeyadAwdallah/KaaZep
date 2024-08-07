
<div align="center">
  <img src="public/icons/Kaazep.svg" alt="Logo" width="500"/>
</div>

# Kaazep: A Turn-Based Social Deduction Game

## Overview

Kaazep is an engaging and interactive web-based social deduction game where players take turns to deduce and guess who among them is the 'Kaazep'. The game is built using React and TypeScript and is powered by the lightning-fast Vite build tool, ensuring an optimized performance for a seamless user experience. The game can be downloaded and played as an app on various devices thanks to its PWA (Progressive Web App) capabilities.

## Key Features

1. **Game Logic and Player Interaction**:
   - Each player takes turns to deduce and guess the 'Kaazep'.
   - Players can interact and vote on who they think the 'Kaazep' is based on the clues and interactions throughout the game.

2. **Customization**:
   - Players can customize categories and items for the game, adding a personal touch and variety to each playthrough.
   
3. **Progressive Web App (PWA)**:
   - Built using Vite for fast builds and optimized performance.
   - The game can be installed and played offline on various devices.

## Components

### 1. **ImposterScreen**

   This component is responsible for handling the screen where the 'Kaazep' (imposter) is determined and interacts with the game.

   **Props**:
   - `setNextScreen`: Function to set the next screen.
   - `quest`: The question or task at hand.
   - `selectedStage`: Array of selected stages.
   - `Userz`: Array of users with their details including name, ID, score, and if they are the imposter.

   **Functionality**:
   - Identifies the imposter among the users.
   - Updates the score of the imposter based on interactions.

### 2. **CustomizeScreen**

   This component allows players to customize the categories and items in the game.

   **Props**:
   - `initialStages`: Initial stages to be customized.
   - `onSaveChanges`: Function to save the updated stages.
   - `onBack`: Function to navigate back to the previous screen.

   **Functionality**:
   - Add, delete, and modify categories and items.
   - Save changes to local storage for persistence.

### 3. **HomeScreen**

   The home screen where players can add their names and start the game.

   **Props**:
   - `onGameStart`: Function to start the game.
   - `setPlayers`: Function to set the players.
   - `players`: Array of player names.
   - `setUsers`: Function to set the users.
   - `Users`: Array of users with their details.

   **Functionality**:
   - Add and delete player names.
   - Initialize the game with the entered players.

### 4. **QuestionScreen**

   This component handles the question phase where players interact and try to deduce who the imposter is.

   **Props**:
   - `Userz`: Array of users with their details.
   - `setNextScreen`: Function to set the next screen.

   **Functionality**:
   - Rotates between players to ask questions.
   - Provides a mechanism to move to the next screen for voting.

### 5. **ResultScreen**

   This component displays the results of the game, including the scores of each player.

   **Props**:
   - `Userz`: Array of users with their details.
   - `setNextScreen`: Function to set the next screen.

   **Functionality**:
   - Shows the final scores of each player.
   - Provides an option to start a new game.

### 6. **SecretScreen**

   This component handles the secret information phase where each player is informed if they are the 'Kaazep'.

   **Props**:
   - `Userz`: Array of users with their details.
   - `quest`: The question or task at hand.
   - `setNextScreen`: Function to set the next screen.

   **Functionality**:
   - Displays secret information to each player.
   - Provides a mechanism to move to the next screen.

### 7. **StagesScreen**

   This component allows players to select and customize stages for the game.

   **Props**:
   - `onGameBack`: Function to navigate back to the previous screen.
   - `handleRandomName`: Function to handle random name selection.

   **Functionality**:
   - Display and select stages.
   - Customize stages and items.
   - Save customized stages to local storage.

### 8. **VoteScreen**

   This component handles the voting phase where players vote on who they think the imposter is.

   **Props**:
   - `Userz`: Array of users with their details.
   - `setNextScreen`: Function to set the next screen.

   **Functionality**:
   - Display players for voting.
   - Update scores based on votes.
   - Move to the next screen after voting.

### 9. **Category Module**

   Utility functions for managing categories and stages, including saving to and loading from local storage.

   **Functions**:
   - `saveStagestoLocalStorage`: Save stages to local storage.
   - `loadStagesFromLocalStorage`: Load stages from local storage.

## Getting Started

To run the project locally:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.

## Conclusion

Kaazep is designed to provide a fun and interactive social deduction experience. With its customizable stages, seamless PWA integration, and engaging gameplay, it promises an enjoyable time for all players.
