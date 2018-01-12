export default class Scheduler {

    constructor(minutesBetweenPlanes) {
      // time spend for a single plane in Date()
      this.runwayUseTime = minutesBetweenPlanes * 60000 || 1200000;
  
      // the data is save in memory
      this.planesSchedule = [];
    }
  
    // returns true if there’s room to schedule at ‘time’
    CouldScheduleAt(date) {
      if (this.planesSchedule.length === 0) return true;
      let i = 0;
      while (this.planesSchedule[i] < date && i < this.planesSchedule.length) i += 1;
  
      if (i === this.planesSchedule.length) {
        // the date asked is later than the last scheduled
        return this.planesSchedule[i - 1].getTime() + this.runwayUseTime <= date.getTime();
      }
  
      const pre = i - 1;
      const post = i;
  
      return (
        this.planesSchedule[pre].getTime() + this.runwayUseTime <= date.getTime() &&
        this.planesSchedule[post].getTime() - this.runwayUseTime >= date.getTime()
      );
    }
  
    // returns true if we successfully scheduled
    ScheduleAt(date) {
      if (this.CouldScheduleAt(date)) {
        let i = 0;
        while (this.planesSchedule[i] < date) i += 1;
        this.planesSchedule.splice(i, 0, date);
        return true;
      }
      return false;
    }
  
    // Choose an available time to schedule at, and return that time
    Schedule() {
      let date;
      for (let i = 0; i < this.planesSchedule.length; i += 1) {
        date = new Date(this.planesSchedule[i].getTime() + this.runwayUseTime);
        if (this.CouldScheduleAt(date)) return date;
      }
      return false; // Should never happend
    }
  
    // returns true if we successfully unscheduled something
    UnscheduleAt(date) {
      return this.planesSchedule.some((flyTime, i) => {
        if (date.getTime() === flyTime.getTime()) {
          this.planesSchedule.splice(i, 1);
          return true;
        }
        return false;
      });
    }
  }