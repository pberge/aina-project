import App from './app'
import NewsController from './Controllers/NewsController'

const app = new App(
  [
    new NewsController(),
  ],
  3000,
);
 
app.listen()