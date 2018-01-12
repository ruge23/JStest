import assert from 'assert';
import Scheduler from '../lib/scheduler.js'

const scheduler = new Scheduler();

describe('#Plane Schedule', function(){
    
    describe('ScheduleAt', function(){
        it('First schedule', function(){
            assert.ok(scheduler.ScheduleAt(new Date(400000)));
        });

        it('Second schedule', function(){
            assert.ok(scheduler.ScheduleAt(new Date(1800000)));
        });

        it('Failing schedule', function(){
            assert.ok(!scheduler.ScheduleAt(new Date(1800000)));
        });
    });
    describe('CouldScheduleAt', function() {
        it('Check for schedule' ,function() {
            assert.ok(scheduler.CouldScheduleAt(new Date(200000000)));
        });
        it('Check for wrong schedule' ,function() {
            assert.ok(!scheduler.CouldScheduleAt(new Date(1000000)));
        });
    });
    describe('Schedule', function() {
        it('Ask for schedule' ,function() {
            assert.ok(scheduler.Schedule());
        });
    });
    describe('UnscheduleAt', function() {
        it('Unschedule a fly' ,function() {
            assert.ok(scheduler.UnscheduleAt(new Date(400000)));
        });
        it('Fail unschedule' ,function() {
            assert.ok(!scheduler.UnscheduleAt(new Date(400000)));
        });
    });
});