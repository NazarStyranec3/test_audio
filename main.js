// Огортаємо все в подію завантаження DOM, щоб JS бачив кнопки
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Створюємо об'єкт WaveSurfer
    const wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'rgba(255, 255, 255, 0.3)',
        progressColor: '#3390ec',
        cursorWidth: 0,
        barWidth: 3,
        barGap: 3,
        barRadius: 3,
        height: 50,
        url: 'audio/audio_week.mp3', // Перевір, щоб файл був тут!
    });

    // 2. Отримуємо елементи
    const playBtn = document.getElementById('playPauseBtn');
    const icon = document.getElementById('icon');

    // 3. Відслідковування кліку (додаємо лог для перевірки в консолі)
    playBtn.addEventListener('click', function() {
        console.log("Кнопку натиснуто!"); // Якщо це з'явиться в консолі (F12) — клік працює
        wavesurfer.playPause();
    });

    // 4. Зміна іконок
    wavesurfer.on('play', () => {
        icon.textContent = '⏸';
    });

    wavesurfer.on('pause', () => {
        icon.textContent = '▶';
    });

    // Повернення на початок після завершення
    wavesurfer.on('finish', () => {
        icon.textContent = '▶';
        wavesurfer.setTime(0); 
    });

    // Перевірка на помилку завантаження файлу
    wavesurfer.on('error', (err) => {
        console.error("Помилка WaveSurfer:", err);
    });
});