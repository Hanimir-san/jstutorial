time = new Date();

const getWeekday = function(date) {
    const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    return days[new Date().getDay()];
}

const getLocalDate = function(date) {
    let day = date.getDay()
    if (day === 0) {
        return 7
    }
    else {
        return day
    }
}

const dateAgo = function(date, days) {
    let dateCopy = new Date(date)
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

const getLastDayOfMonth = function (year, month) {
    let date = new Date(year, month+1, 0);
    return date.getDate();
}

const getSecondsToday = function () {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today;

    return Math.round(diff/1000);
}

const getSecondsToTomorrow = function () {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let diff = tomorrow - now;

    return Math.round(diff/1000);
}

const formatDate = function (inputDate) {
    let now = new Date();

    let diff = now - inputDate;
    let seconds = Math.floor(diff / 1000)
    let minutes = Math.floor(diff/ 1000 / 60)
    let hours = Math.floor(diff /1000 /60 / 60) 
    if (seconds < 1){
        return "right now";
    } 
    else if (minutes < 1) {
        return `${seconds} seconds ago`;
    }
    else if (hours < 1){
        return `${minutes} minutes ago`;
    }
    else {
        return `${now.getDate()}.${now.getMonth()}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
    }
}

// alert(getWeekday(time));
// alert(getLocalDate(time));
// alert(dateAgo(time, 2));
// alert(getLastDayOfMonth(2020, 1));
alert(getSecondsToday());
alert(getSecondsToTomorrow()); 

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );