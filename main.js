        // Получаем текущую дату и время
        const currentDate = new Date();
        
        // Форматируем текущую дату
        const formattedDate = currentDate.toLocaleDateString('ru-RU');
        
        // Форматируем текущее время
        const formattedTime = currentDate.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Устанавливаем текст в элементы
        document.getElementById('date').textContent = formattedDate + ' ' + formattedTime;

        function updateOnline() {
            const baseOnline = Math.floor(Math.random() * 20) + 10;
            document.getElementById('online').textContent = baseOnline;
        }
        updateOnline();
        setInterval(updateOnline, 60000);

document.addEventListener('contextmenu', (e) => e.preventDefault());

window.addEventListener('load', function () {
  console.log('Страница готова!')
})

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

document.getElementById('wIeAw').onclick = function() {
            const newContent = `
            <div class="container">
                <h1 style="text-align: center; font-family: "Russo One", sans-serif;">Условия Пользования</h1>
                <hr style="border: none; border-top: 2px solid black; text-align: center; margin: 20px 0;"/>
                <p><strong>1. Общие положения</strong></p>
                <p>
                    Данные условия регламентируют порядок использования пользователями нашего сайта. 
                    Пользуясь сайтом, вы соглашаетесь с настоящими условиями.
                </p>

                <p><strong>2. Регистрация на сайте</strong></p>
                <p>
                    Для доступа к некоторым функциям сайта вам может потребоваться зарегистрироваться. 
                    При регистрации вы обязуетесь предоставить полную и точную информацию о себе.
                </p>

                <p><strong>3. Ответственность пользователя</strong></p>
                <p>
                    Вы несете ответственность за все действия, происходящие под вашим аккаунтом. 
                    В случае подозрения на злоупотребление вашей учетной записью, немедленно сообщите об этом службе поддержки.
                </p>

                <p><strong>4. Использование материалов сайта</strong></p>
                <p>
                    Все материалы, размещенные на сайте, защищены не авторским правом. 
                    Запрещается копирование, распространение или изменение материалов без разрешения владельца.
                    Лень было исправлять...
                </p>

                <p><strong>5. Изменение условий</strong></p>
                <p>
                    Администрация сайта оставляет за собой право изменять условия использования в любое время. 
                    Об изменения будут оповещены пользователи.
                </p>

                <p><strong>6. Контактная информация</strong></p>
                <p>
                    Если у вас возникли какие-либо вопросы относительно условий пользования, 
                    пожалуйста, свяжитесь с нами по электронной почте: support@example.com.
                </p>
                <button style="border-radius: 5px; background-color: rgba(100, 0, 0, 0.3); color: #fff; padding: 5px; border: 1px solid var(--red); margin: 30px 0; font-weight: bold; font-size: 0.7em; cursor : cell ;" onclick="location.reload();">Вернуться на главную</button>
            </div>
            `;
            document.body.innerHTML = newContent;
};

document.getElementById('IoU28si').onclick = function() {
            const newContent = `
            <div class="container">
                <iframe src="https://docs.google.com/document/d/1pd8neV1QshUWcHFVOon8WUY9t-c-qTKcAElyiK3M-XE/edit?usp=sharing" width="1100" height="718" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                <button style="border-radius: 5px; background-color: rgba(100, 0, 0, 0.3); color: #fff; padding: 5px; border: 1px solid var(--red); margin: 30px 0; font-weight: bold; font-size: 0.7em; cursor : cell ;" onclick="location.reload();">Вернуться на главную</button>
            </div>
            `;
            document.body.innerHTML = newContent;

};

document.getElementById('UdI2Uj').onclick = function() {
            const newContent = `
            <div class="container">
                <iframe src="https://docs.google.com/document/d/1maEx3m24TexUQNoiU4blpCpxjWCo5wFfTAPtaXWDsuA/edit?usp=sharing" width="1100" height="718" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                <button style="border-radius: 5px; background-color: rgba(100, 0, 0, 0.3); color: #fff; padding: 5px; border: 1px solid var(--red); margin: 30px 0; font-weight: bold; font-size: 0.7em; cursor : cell ;" onclick="location.reload();">Вернуться на главную</button>
            </div>
            `;
            document.body.innerHTML = newContent;
};

document.getElementById('seAw').onclick = function() {
            const newContent = `
            <div class="container">
                <div class="console">
                    <h2>Выберете действие</h2>
                    <a style="display: block;" href="#Classic"> > Правила Classic </a>
                    <a style="display: block;" href="#NoRules"> > Правила NoRules </a>
                    <a style="display: block;" href="#Anarchy"> > Правила Anarchy </a>
                    <a style="display: block;" href="#MRP"> > Правила MediumRP </a>
                </div>
            </div>
            `;
            document.body.innerHTML = newContent;
};

document.getElementById('AdminCellNoRules').onclick = function() {
            const newContent = `
            <div class="container">
                <div class="console">
                    <h2>Для подачи заявки:</h2>
                    <p> > Зайдите на оффициальный дискорд сервер DeltaEx</p>
                    <p> > Перейдите в канал #🎟️ Тикеты</p>
                    <p> > Создайте заявку выбрав нужную вам категорию </p>
                    <p> > Ожидайте дальнейшие указания от Агентсва поддержки. </p>
                    <div class="discord-box">
                        <h3>Присоединяйтесь к нашему Discord-серверу</h3>
                        <a href="https://discord.gg/pvCkR9NPfM" class="discord-link">DISCORD DeLTA PROJECT</a>
                        <p>Наш Дискорд Сервер проекта.</p>
                    </div>
            </div>
            `;
            document.body.innerHTML = newContent;
};