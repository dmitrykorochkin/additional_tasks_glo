
const goodTime = document.createElement('div')
const day = document.createElement('div')
const time = document.createElement('div')
const divNewYear = document.createElement('div')

const updateDate = () => {
   
        const presentDay = new Date()
        const nowData = new Date().getDay()
        const presentHour = new Date().getHours()
        const presentTime = new Date().toLocaleTimeString('ru');
        const dateNow = new Date().getTime()
        const newYear = new Date(presentDay.getFullYear() + 1, 0, 1);
        
        const timeRemaining = Math.floor((newYear - dateNow) / 1000)
        
        const days = Math.floor(timeRemaining / 60 / 60 / 24)
        let message = '';


        if (presentHour > 23 || presentHour < 7) {
            message = 'Доброй ночи!';
          } else if (presentHour > 6 && presentHour < 12) {
            message = 'Доброе утро!';
          } else if (presentHour > 11 && presentHour < 19) {
            message = 'Добрый день!';
          } else if (presentHour > 18 && presentHour < 24) {
            message = 'Добрый вечер!';
          }


    const dayWeek = (index) => {
        let days = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']; 
        return days[index]; 
    }
    
    goodTime.className = 'good-time'
    goodTime.textContent = message;
    document.body.appendChild(goodTime);
    
    day.className = 'day'
    day.textContent = `Сегодня: ${(dayWeek(nowData))}`
    document.body.appendChild(day)
    
    time.className = 'time'
    time.textContent = `Текущее время: ${presentTime}`
    document.body.appendChild(time)
    
    divNewYear.className = 'new-year'
    divNewYear.textContent = `До нового года: ${days} дней`
    document.body.appendChild(divNewYear)
}

setInterval(updateDate, 1000)




