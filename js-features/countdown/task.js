let time = 59; // Задаём начальное время
const timer = setInterval(() => {
document.getElementById('timer').textContent = time <= 0
? clearInterval(timer) & alert('«Вы победили в конкурсе!»')// Останавливаем таймер, поскольку время истекло и выводим фразу
: time--; // С каждой секундой уменьшаем время
}, 1000)