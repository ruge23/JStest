import restify from 'restify';
import Scheduler from './lib/scheduler';

const server = restify.createServer();

const scheduler = new Scheduler();

server.post('/check/:date', (req, res) => {
  const date = new Date(req.params.date);
  res.send(scheduler.CouldScheduleAt(date));
});

server.post('/schedule/:date', (req, res) => {
  const date = new Date(req.params.date);
  res.send(scheduler.ScheduleAt(date));
});

server.post('/unschedule/:date', (req, res) => {
  const date = new Date(req.params.date);
  res.send(scheduler.UnscheduleAt(date));
});

server.get('/schedule', (req, res) => {
  res.send(scheduler.Schedule());
});

server.listen('3000');