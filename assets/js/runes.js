// Получаем все ссылки с якорями
const links = document.querySelectorAll('a[href^="#"]');

// Обходим каждую ссылку и назначаем обработчик события щелчка
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем переход по ссылке

    const target = document.querySelector(this.getAttribute('href')); // Получаем целевой элемент по атрибуту href
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' }); // Плавно прокручиваем к целевому элементу

      // Добавляем класс .active, чтобы плавно подсветить элемент
      target.classList.add('active');

      // Удаляем класс .active после завершения анимации
      setTimeout(() => {
        target.classList.remove('active');
      }, 500); // Измените значение 1000 на желаемую продолжительность анимации в миллисекундах
    }
  });
});