# Pictsy Project

Small image-based web app using React and Imgur.

### Focus

App uses the imgur API to pull images based upon users' inputs in real time.  Users can then search through the top results given for that term and filter it based upon whether the images are animated, viral, or both.

### API key

To use App, user must register an App with Imgur (the callback url is unneeded and can be anything) and receive  an anonymous ClientID.  The ID is then used as an HTTP header to access the Imgur API.  Inside of the 'index.js' file in the 'src' folder, replace the variable 'apiKey' in the imgSearch function with your ClientID.

But, for simplicity's sake, since the API keys are essentially free, C+P:

```
'9ed18dc91dbbcc7'.
```

### Install/Use

Install using

```
npm i
```

Run using

```
npm start
```

Open your browser to localhost:8080 and enjoy.