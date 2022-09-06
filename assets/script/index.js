"use strict";

const formatDate = (date) => {
    let timePassed = new Date() - date;

    if (timePassed < 1000) {
        return 'Прямо сейчас';
    }
    else if (timePassed < 60000) {
        return `${Math.round(timePassed / 1000)} сек. назад`;
    }
    else if (timePassed < 3600000) {
        return `${Math.round(timePassed / 1000 / 60)} мин. назад`;
    }
    else {
        return `0${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

alert( formatDate(new Date(new Date - 86400* 4 * 1000)) ); // вчерашняя дата вроде 31.12.2016, 20:00
