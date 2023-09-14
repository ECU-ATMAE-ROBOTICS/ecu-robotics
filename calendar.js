document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const calendarBody = document.getElementById('calendar-body');
    const currentMonthElement = document.getElementById('current-month');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const eventNameInput = document.getElementById('event-name');
    const eventDateInput = document.getElementById('event-date');
    const addEventButton = document.getElementById('add-event');
    const eventList = document.getElementById('events');

    function generateCalendar(year, month) {
        // Clear the calendar
        calendarBody.innerHTML = '';

        // Set the current month text
        currentMonthElement.textContent = `${getMonthName(month)} ${year}`;

        // Get the first day of the month
        const firstDay = new Date(year, month, 1).getDay();

        // Get the last day of the month
        const lastDay = new Date(year, month + 1, 0).getDate();

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    const cell = document.createElement('td');
                    row.appendChild(cell);
                } else if (date <= lastDay) {
                    const cell = document.createElement('td');
                    cell.textContent = date;
                    row.appendChild(cell);
                    date++;
                }
            }
            calendarBody.appendChild(row);
        }
    }

    function getMonthName(month) {
        const monthNames = [
            'January', 'February', 'March',
            'April', 'May', 'June',
            'July', 'August', 'September',
            'October', 'November', 'December'
        ];
        return monthNames[month];
    }

    prevMonthButton.addEventListener('click', function () {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        generateCalendar(currentYear, currentMonth);
    });

    nextMonthButton.addEventListener('click', function () {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        generateCalendar(currentYear, currentMonth);
    });

    addEventButton.addEventListener('click', function () {
        const eventName = eventNameInput.value;
        const eventDate = eventDateInput.value;

        if (eventName.trim() === '' || eventDate.trim() === '') {
            alert('Please fill in both event name and date.');
            return;
        }

        const eventItem = document.createElement('li');
        eventItem.textContent = `${eventName} - ${eventDate}`;
        eventList.appendChild(eventItem);

        eventNameInput.value = '';
        eventDateInput.value = '';

        // Dynamically add events to the calendar
        const dayCell = calendarBody.querySelector(`td:contains("${parseInt(eventDate)}")`);
        if (dayCell) {
            if (!dayCell.querySelector('.events-cell')) {
                dayCell.innerHTML += '<div class="events-cell"></div>';
            }
            const eventsCell = dayCell.querySelector('.events-cell');
            eventsCell.innerHTML += `<div class="event">${eventName}</div>`;
        }
    });

    generateCalendar(currentYear, currentMonth);
});
