# YouTube Clone with React + Vite

This project is a YouTube clone built using React and Vite, providing a fast and efficient development environment. The project utilizes Vite for building and bundling, offering hot module replacement (HMR) to enhance the development experience. ESLint is integrated to ensure code quality and consistency throughout the project.

## Features

- **Responsive Design**: The layout is fully responsive, ensuring a seamless experience across different devices.
- **Video Playback**: Users can watch videos with basic playback controls such as play, pause, and volume adjustment.
- **Search Functionality**: Allows users to search for videos and display results dynamically.
- **Video Recommendations**: Displays a list of recommended videos based on the current selection.
- **Comment Section**: Users can view and add comments on videos.
- **Like/Dislike Feature**: Users can like or dislike videos.
- **User Authentication**: Basic user authentication to access personalized features like history and playlists.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/benhamida24244/youtube-clone.git
   cd youtube-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Plugins Used

This project utilizes the following Vite plugins to enhance the React development experience:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: This plugin uses [Babel](https://babeljs.io/) for Fast Refresh, ensuring a smooth development process with live updates.
  
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: An alternative to the Babel plugin, this uses [SWC](https://swc.rs/) for Fast Refresh, offering faster builds and improved performance.

## Folder Structure

- **src/**: Contains all the source code for the application.
  - **components/**: Reusable UI components.
  - **pages/**: Different pages like Home, Video Player, and Search Results.
  - **assets/**: Images, icons, and other static files.
  - **utils/**: Utility functions and helpers.

## ESLint Configuration

ESLint is configured to follow best practices and maintain code consistency. The rules are based on the recommended settings for React and JavaScript.

## Future Enhancements

- **Playlists**: Enable users to create and manage playlists.
- **User Profiles**: Add user profiles to personalize the experience.
- **Notifications**: Implement notifications for new content or user interactions.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvement.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.