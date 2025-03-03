// Данные тем и заданий (должны быть такие же, как в topics.js)
const topics = [
    {
        id: 1,
        name: "Виды инфомрации",
        tasks: [
            {
                id: 1,
                question: "Установи вид информации в следующих ситуациях:",
                type: "select", // Тип задания: выпадающий список
                options: [
                    { text: "Ярослава читает афишу", correct: "Визуальная" },
                    { text: "Дима ест солёный огурец", correct: "Вкусовая" },
                    { text: "Артём услышал вой сирены", correct: "Слуховая" },
                    { text: "Влад прыгнул в холодный бассейн", correct: "Тактильная" },
                    { text: "Настя наслаждается ароматом свежих булочек", correct: "Обонятельная" }
                ],
                userAnswers: [] // Ответы пользователя
            }
        ]
    },
    {
        id: 2,
        name: "Проверка слайдера",
        tasks: [
            {
                id: 2,
                question: "Установи вид информации в следующих ситуациях:",
                type: "select", // Тип задания: выпадающий список
                options: [
                    { text: "Ярослава читает афишу", correct: "Визуальная" },
                    { text: "Дима ест солёный огурец", correct: "Вкусовая" },
                    { text: "Артём услышал вой сирены", correct: "Слуховая" },
                    { text: "Влад прыгнул в холодный бассейн", correct: "Тактильная" },
                    { text: "Настя наслаждается ароматом свежих булочек", correct: "Обонятельная" }
                ],
                userAnswers: [] // Ответы пользователя
            }
        ]
    }
];

// Получаем параметры из URL
const urlParams = new URLSearchParams(window.location.search);
const topicId = parseInt(urlParams.get('topic'));
const taskId = parseInt(urlParams.get('task'));

// Находим тему и задание
const topic = topics.find(t => t.id === topicId);
const task = topic.tasks.find(t => t.id === taskId);

// Получаем элементы DOM
const topicNameElement = document.getElementById('topic-name');
const taskContainer = document.getElementById('task-container');
const prevButton = document.getElementById('prev-task');
const nextButton = document.getElementById('next-task');

// Отображение задания
function renderTask() {
    topicNameElement.textContent = topic.name;
    taskContainer.innerHTML = `<h3>Задание ${task.id}: ${task.question}</h3>`;

    if (task.type === "multiple-choice") {
        task.options.forEach(option => {
            taskContainer.innerHTML += `
                <label>
                    <input type="checkbox" name="task-${task.id}" value="${option}">
                    ${option}
                </label><br>
            `;
        });
    } else if (task.type === "text") {
        taskContainer.innerHTML += `
            <input type="text" id="task-${task.id}" placeholder="Введите ответ">
        `;
    }

    taskContainer.innerHTML += `<button onclick="checkTask()">Проверить</button>`;
}

// Проверка задания
function checkTask() {
    if (task.type === "multiple-choice") {
        const checkboxes = taskContainer.querySelectorAll(`input[name="task-${task.id}"]:checked`);
        task.userAnswers = Array.from(checkboxes).map(cb => cb.value);
        if (arraysEqual(task.userAnswers.sort(), task.correctAnswers.sort())) {
            taskContainer.classList.add('correct');
            taskContainer.classList.remove('incorrect');
        } else {
            taskContainer.classList.add('incorrect');
            taskContainer.classList.remove('correct');
        }
    } else if (task.type === "text") {
        const input = taskContainer.querySelector(`#task-${task.id}`);
        task.userAnswer = input.value.trim();
        if (task.userAnswer.toLowerCase() === task.correctAnswer.toLowerCase()) {
            taskContainer.classList.add('correct');
            taskContainer.classList.remove('incorrect');
        } else {
            taskContainer.classList.add('incorrect');
            taskContainer.classList.remove('correct');
        }
    }
}

// Сравнение массивов
function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, index) => val === b[index]);
}

// Навигация по заданиям
prevButton.addEventListener('click', () => {
    if (taskId > 1) {
        window.location.href = `task.html?topic=${topicId}&task=${taskId - 1}`;
    }
});

nextButton.addEventListener('click', () => {
    if (taskId < topic.tasks.length) {
        window.location.href = `task.html?topic=${topicId}&task=${taskId + 1}`;
    }
});

// Скачивание результатов
document.getElementById('download-results').addEventListener('click', () => {
    let textContent = `Результаты выполнения заданий по теме "${topic.name}":\n\n`;
    topic.tasks.forEach(t => {
        textContent += `Задание ${t.id}: ${t.question}\n`;
        if (t.type === "multiple-choice") {
            textContent += `Правильные ответы: ${t.correctAnswers.join(", ")}\n`;
            textContent += `Ваши ответы: ${t.userAnswers.join(", ")}\n`;
        } else if (t.type === "text") {
            textContent += `Правильный ответ: ${t.correctAnswer}\n`;
            textContent += `Ваш ответ: ${t.userAnswer}\n`;
        }
        textContent += "\n";
    });

    const blob = new Blob([textContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `results-${topic.name}.txt`;
    link.click();
});

// Инициализация
renderTask();