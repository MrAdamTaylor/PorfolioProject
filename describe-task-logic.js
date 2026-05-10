// База данных задач для каждого участника и навыка
const tasksDB = {
    "Алексей Соколов": {
        "Game documentation & design docs": [
            "Составил 120-страничный GDD для проекта 'Хроники Элдервуда'",
            "Описал механики крафта и прокачки для roguelike 'Бездна'",
            "Создал техзадание для программистов по системе инвентаря"
        ],
        "Narrative & script writing": [
            "Написал сценарий основной кампании (8 глав) для 'Космический рейнджер'",
            "Разработал ветвистый диалог с 5 концовками",
            "Создал лор и энциклопедию мира"
        ],
        "Prototyping": [
            "Сделал бумажный прототип экономики за 2 дня",
            "Собрал playable prototype на Unity под iOS",
            "Провёл 3 итерации геймплейного прототипа по обратной связи"
        ],
        "2D/3D basic art for grayboxing": [
            "Создал graybox-уровни для 5 локаций",
            "Настроил примитивы для теста физики",
            "Подготовил болванки анимаций для программистов"
        ]
    },
    "Мария Волкова": {
        "Concept art": [
            "Нарисовала 30 концептов персонажей для фэнтези-RPG",
            "Создала moodboard и цветовые схемы для уровней",
            "Разработала дизайн боссов: дракон, лич, тролль"
        ],
        "Pixel art animation": [
            "Анимировала бег, атаку и смерть главного героя (16 кадров)",
            "Создала анимации окружения: вода, факелы, облака",
            "Оптимизировала спрайты под размер 64x64"
        ],
        "Color theory & lighting": [
            "Настроила глобальное освещение для подземелья",
            "Разработала палитру для ночных уровней",
            "Провела ревью цветокоррекции всех спрайтов"
        ],
        "Environment design": [
            "Спроектировала лесной биом с интерактивными объектами",
            "Создала тайловые наборы для пустыни и замка",
            "Заполнила уровень декоративными пропсами"
        ]
    },
    "Дмитрий Клюев": {
        "C# / Unity optimization": [
            "Оптимизировал отрисовку: батчинг сократил Draw Call с 800 до 200",
            "Переписал систему спавна врагов на Object Pool",
            "Уменьшил потребление памяти на 40% через сжатие текстур"
        ],
        "ECS architecture": [
            "Внедрил ECS для обработки 5000+ юнитов без просадок FPS",
            "Разделил логику здоровья и урона на компоненты",
            "Написал систему параллельных задач для физики"
        ],
        "Debugging & profiling": [
            "Нашёл и исправил утечку памяти в UI",
            "Профилировал загрузку уровней, ускорил на 30%",
            "Добавил логирование ошибок с отправкой в телеграм"
        ],
        "Game physics": [
            "Настроил кастомную гравитацию для платформера",
            "Реализовал триггеры зон и физические взаимодействия",
            "Оптимизировал рейкасты для вражеского AI"
        ]
    },
    "Анна Морозова": {
        "Sound design (SFX)": [
            "Создала 150 звуков: шаги, удары, заклинания",
            "Записала и обработала фоли-эффекты для окружения",
            "Настроил пространственный звук (3D) для всех источников"
        ],
        "Music composition": [
            "Написала главную тему (оркестровая) длительностью 3 мин",
            "Создала динамический боевой микс",
            "Адаптировала музыку под смену сцен"
        ],
        "Foley & recording": [
            "Записала звуки разрушения предметов с реальным реквизитом",
            "Обработала голоса актёров озвучки для 5 персонажей",
            "Синхронизировала шаги с анимацией"
        ],
        "Audio middleware (FMOD/Wwise)": [
            "Интегрировала FMOD в проект Unity",
            "Настроила миксинг и эффекты (реверберация, фильтры)",
            "Сделала параметрические события для изменения питча"
        ]
    },
    "Игорь Петров": {
        "Project management": [
            "Вёл команду из 6 человек в Jira, спринты по 2 недели",
            "Организовал релиз игры в срок с 3 обновлениями",
            "Составил бюджет и распределил ресурсы"
        ],
        "Marketing & PR": [
            "Запустил кампанию в соцсетях: охват 500 тыс. человек",
            "Организовал стримы у 10 блогеров",
            "Написал пресс-релизы для игровых порталов"
        ],
        "Analytics & KPIs": [
            "Настроил сбор метрик через Google Analytics для игры",
            "Анализировал конверсию установок (CR с 15% до 25%)",
            "Отслеживал LTV и Retention, предложил улучшения"
        ],
        "Publishing (Steam)": [
            "Подготовил и опубликовал страницу игры в Steam",
            "Настроил achievement и трейдинг карточками",
            "Провёл успешный запуск в раннем доступе"
        ]
    },
    "Елена Кравцова": {
        "User research & testing": [
            "Провела 20 юзабилити-тестов с реальными игроками",
            "Составила отчёт по навигации и переработала меню",
            "Внедрила heatmap для анализа кликов"
        ],
        "Figma / Adobe XD": [
            "Создала интерактивный прототип инвентаря",
            "Дизайн всех экранов: главное меню, настройки, магазин",
            "Подготовила UI-кит и гайдлайны для разработчиков"
        ],
        "Interactive prototyping": [
            "Сделала кликабельный прототип HUD в Figma",
            "Анимировала переходы между экранами",
            "Интегрировала прототип в Unity для демонстрации"
        ],
        "Mobile adaptation": [
            "Адаптировала UI под экраны от iPhone SE до iPad",
            "Настроила поддержку геймпада с перепривязкой кнопок",
            "Оптимизировала лэйауты под тач-управление"
        ]
    }
};

// Получаем элементы модального окна
const modal = document.getElementById('taskModal');
const closeBtn = document.querySelector('.close-modal');
const memberSpan = document.getElementById('memberName');
const skillSpan = document.getElementById('skillName');
const tasksListUl = document.getElementById('tasksList');

// Функция открытия модалки с задачами
function showTasks(member, skill) {
    const tasks = tasksDB[member]?.[skill] || ["Нет конкретных задач для этого навыка."];
    memberSpan.textContent = member;
    skillSpan.textContent = skill;
    tasksListUl.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        tasksListUl.appendChild(li);
    });
    modal.style.display = 'flex';
}

// Закрытие модального окна
function closeModal() {
    modal.style.display = 'none';
}

// Навешиваем обработчики на все элементы .skill-item после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const member = item.getAttribute('data-member');
            const skill = item.getAttribute('data-skill');
            if (member && skill) {
                showTasks(member, skill);
            }
        });
    });

    // Закрытие по крестику и по фону
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
    });
});

// Мобильное меню (оставляем работоспособность)
const menuBtn = document.querySelector('.mobile-menu');
const navUl = document.querySelector('nav ul');
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });
}