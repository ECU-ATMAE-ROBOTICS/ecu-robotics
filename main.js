let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}
  

function addEventToCalendar(eventDetails) {
  // Initialize the Google Calendar API client and authenticate the user.
  // (You'll need to set up proper authentication and API initialization.)

  // Create the event.
  const event = {
      'summary': eventDetails.title,
      'description': eventDetails.description,
      'start': {
          'dateTime': eventDetails.startTime,
          'timeZone': 'your-timezone',
      },
      'end': {
          'dateTime': eventDetails.endTime,
          'timeZone': 'your-timezone',
      },
  };

  // Use the API to insert the event into the calendar.
  // gapi.client.calendar.events.insert({
  //     'calendarId': 'primary', // Use the appropriate calendar ID
  //     'resource': event,
  // }).then(function(response) {
  //     console.log('Event created: ' + response.htmlLink);
  // });
}
