const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', {
        month: 'long',
        year: 'numeric'
    });
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    // Previous month's dates
    for (let i = firstDayIndex - 1; i >= 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, -i);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }

    // Current month's dates
    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const isToday = date.toDateString() === new Date().toDateString();
        const isFriday = date.getDay() === 5; // 5 = Friday
        const activeClass = isToday ? 'active' : '';
        const fridayClass = isFriday ? 'friday' : '';

        datesHTML += `<div class="date ${activeClass} ${fridayClass}" data-date="${date.toISOString()}">${i}</div>`;
    }

    // Next month's filler dates
    const totalCells = firstDayIndex + totalDays;
    const nextDays = (7 - (totalCells % 7)) % 7;
    for (let i = 1; i <= nextDays; i++) {
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }

    datesElement.innerHTML = datesHTML;
    attachFridayClickHandlers(); // Attach click to Fridays
}

const attachFridayClickHandlers = () => {
    const fridayDates = document.querySelectorAll('.date.friday');
    fridayDates.forEach(dateEl => {
        dateEl.addEventListener('click', () => {
            const selectedDate = new Date(dateEl.dataset.date);
            alert(`📅 You clicked on a Friday: ${selectedDate.toDateString()}`);
            document.querySelector('.timetable').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();

// Download timetable
function downloadTimetable() {
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Friday-Robotics-Club-Timetable.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    alert('Timetable downloaded successfully! 🤖');
}

// Hover animation
document.addEventListener('DOMContentLoaded', function () {
    const activitySlots = document.querySelectorAll('.activity-slot');
    activitySlots.forEach(slot => {
        slot.addEventListener('mouseenter', function () {
            this.style.background = '#e3f2fd';
        });
        slot.addEventListener('mouseleave', function () {
            this.style.background = '#f8f9fa';
        });
    });
});
