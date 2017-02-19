import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 1234;

app.use('/assets', express.static(`${__dirname}/../public`));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendfile('public/index.html');
});

app.listen(port, () => {
  console.log('******************** Server started on PORT:', port, '********************');
});
