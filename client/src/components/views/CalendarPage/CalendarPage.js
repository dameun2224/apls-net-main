import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import NavBar from '../NavBar/NavBar';
import './CalendarPage.css';

class CalendarPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="calendar-container">
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            className="full-calendar"
            events={[
              { title: 'event 1', date: '2023-09-01' },
              { title: 'event 2', date: '2023-09-02' },
            ]}
            locale={'ko'}
          />
        </div>
      </div>
    );
  }
}

export default CalendarPage;
