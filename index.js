const express = require('express');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
  // Request headers you wish to allow
  // eslint-disable-next-line max-len
  res.setHeader(
    'Access-Control-Allow-Headers',
    'responsetype, Origin, X-Requested-With, Content-Type, Accept, x-cal-account, x-cal-accounts, x-cal-user, x-cal-refresh,x-cal-period, x-cal-count, x-cal-duration, x-cal-xml, x-cal-ical, x-cal-authenticated, authorization'
  );
  // Request headers you wish to expose
  // eslint-disable-next-line max-len
  res.setHeader(
    'Access-Control-Expose-Headers',
    'responsetype, Origin, X-Requested-With, Content-Type, Accept, x-cal-account, x-cal-accounts, x-cal-user, x-cal-refresh,x-cal-period, x-cal-count, x-cal-duration, x-cal-xml, x-cal-ical, x-cal-authenticated, authorization'
  );

  // X-Requested-With,content-type
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)

  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/check', (req, res) => {
  res.status(200).json({ data: 'Sample' });
});

app.post('/check', (req, res) => {
  res.status(200).json({ data: 'Sample', body: req.body });
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server ready' });
});

const PORT = process.env.PORT || 4080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} ....`);
});
