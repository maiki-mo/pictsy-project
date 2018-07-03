# Pictsy Project

Small image-based web app using React and Imgur.

### Focus

App uses the imgur API to pull images based upon users' inputs in real time.  Users can then search through the top results given for that term and filter it based upon whether the images are animated, viral, or both.

### API

To use App, user must register an App with Imgur and recieve an anonymous ClientID.  The ID is then used as an HTTP header to access the Imgur API.  Inside of the 'index.js' file in the 'src' folder, replace the variable 'apiKey' in the imgSearch function with your ClientID.