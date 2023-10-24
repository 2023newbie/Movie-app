# Movie Website (ReactJS/NodeJS)

An movie website where display all the lastest released movies by it's category fetched from the movie API and Backend. We can click on the picture of the movie to show all information related to that movie and its trailer embeded from Youtube. We also can search the list of movies by keyword and additional filter conditions.

## Demo

\*Note: Please open link back-end first.

- Back-end demo: [Link](https://movie-server-jief.onrender.com/)
- Front-end demo: [Link](https://movie-client-f902e.web.app/)

## Project Breakdown

### Backend api server

- Directory: Backend
- Features: 
  - [x] Building api server (MVC model)
  - [x] Read and fetch data from data file (JSON format)
  - [x] Write controller to handle list film for different types of movies
  - [x] Handle logic to search list of films matched to some conditions
  - [x] Paging mechanism
  - [x] Authenticate and protect route based on dummy token

### Frontend app

- Directory: Frontend
- Features:

  - [x] Developing Main page and Search page
  - [x] Display diffrent list types of movies
  - [x] Hanlde data and video trailer when click on any film
  - [x] Search and display data based on filtered conditions
  - [x] React-router

### Deployment on local

#### Prerequisites

- NodeJS
- npm

#### Client-side (Dir: Frontend)

```
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm start       // run it locally
```

#### Admin-side (Dir: Backend)

```
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm start // run it locally
```