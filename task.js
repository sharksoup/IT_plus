// Данные тем и заданий
const topics = [
    {
        id: 1,
        name: "Типы информации, 2 задания",
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
            },
            {
                id: 2,
                question: "Информацию, достаточную для решения поставленной задачи, называют?",
                type: "radio",
                options: [
                    { text: "Понятной", correct: false },
                    { text: "Полной", correct: true }, // Правильный ответ
                    { text: "Адекватной", correct: false },
                    { text: "Особенной", correct: false }
                ],
                userAnswer: "" // Ответ пользователя
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
const checkAnswerButton = document.getElementById('check-answer');
const prevButton = document.getElementById('prev-task');
const nextButton = document.getElementById('next-task');

// Отображение задания
function renderTask() {
    topicNameElement.textContent = topic.name;
    taskContainer.innerHTML = `<h3>Задание ${task.id}: ${task.question}</h3>`;

    if (task.type === "select") {
        task.options.forEach((option, index) => {
            taskContainer.innerHTML += `
                <div>
                    <p>${option.text}</p>
                    <select id="answer-${index}">
                        <option value="">Выберите ответ</option>
                        <option value="Визуальная">Визуальная</option>
                        <option value="Вкусовая">Вкусовая</option>
                        <option value="Слуховая">Слуховая</option>
                        <option value="Тактильная">Тактильная</option>
                        <option value="Обонятельная">Обонятельная</option>
                    </select>
                </div>
            `;
        });
    }
}
function renderTask() {
    topicNameElement.textContent = topic.name;
    taskContainer.innerHTML = `<h3>Задание ${task.id}: ${task.question}</h3>`;

    if (task.type === "select") {
        task.options.forEach((option, index) => {
            taskContainer.innerHTML += `
                <div>
                    <p>${option.text}</p>
                    <select id="answer-${index}">
                        <option value="">Выберите ответ</option>
                        <option value="Визуальная">Визуальная</option>
                        <option value="Вкусовая">Вкусовая</option>
                        <option value="Слуховая">Слуховая</option>
                        <option value="Тактильная">Тактильная</option>
                        <option value="Обонятельная">Обонятельная</option>
                    </select>
                </div>
            `;
        });
    } else if (task.type === "radio") {
        task.options.forEach((option, index) => {
            taskContainer.innerHTML += `
                <label>
                    <input type="radio" name="task-${task.id}" value="${option.text}" id="answer-${index}">
                    ${option.text}
                </label><br>
            `;
        });
    }
}
// Проверка задания
function checkTask() {
    if (task.type === "select") {
        task.userAnswers = [];
        let allCorrect = true;

        task.options.forEach((option, index) => {
            const select = document.getElementById(`answer-${index}`);
            const userAnswer = select.value;
            task.userAnswers.push(userAnswer);

            if (userAnswer !== option.correct) {
                allCorrect = false;
                select.style.border = "1px solid red"; // Подсветка неправильного ответа
            } else {
                select.style.border = "1px solid green"; // Подсветка правильного ответа
            }
        });

        if (allCorrect) {
            taskContainer.classList.add('correct');
            taskContainer.classList.remove('incorrect');
        } else {
            taskContainer.classList.add('incorrect');
            taskContainer.classList.remove('correct');
        }
    }
    if (task.type === "select") {
        task.userAnswers = [];
        let allCorrect = true;

        task.options.forEach((option, index) => {
            const select = document.getElementById(`answer-${index}`);
            const userAnswer = select.value;
            task.userAnswers.push(userAnswer);

            if (userAnswer !== option.correct) {
                allCorrect = false;
                select.style.border = "1px solid red";
            } else {
                select.style.border = "1px solid green";
            }
        });

        if (allCorrect) {
            taskContainer.classList.add('correct');
            taskContainer.classList.remove('incorrect');
        } else {
            taskContainer.classList.add('incorrect');
            taskContainer.classList.remove('correct');
        }
    } else if (task.type === "radio") {
        const selectedRadio = document.querySelector(`input[name="task-${task.id}"]:checked`);
        if (selectedRadio) {
            task.userAnswer = selectedRadio.value;
            const selectedOption = task.options.find(opt => opt.text === task.userAnswer);

            if (selectedOption && selectedOption.correct) {
                taskContainer.classList.add('correct');
                taskContainer.classList.remove('incorrect');
            } else {
                taskContainer.classList.add('incorrect');
                taskContainer.classList.remove('correct');
            }
        } else {
            alert("Выберите ответ!");
        }
    }
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

// Проверка ответа
checkAnswerButton.addEventListener('click', checkTask);

// Скачивание результатов
document.getElementById('download-results').addEventListener('click', () => {
    let textContent = `Результаты выполнения заданий по теме "${topic.name}":\n\n`;
    topic.tasks.forEach(t => {
        textContent += `Задание ${t.id}: ${t.question}\n`;
        if (t.type === "select") {
            t.options.forEach((option, index) => {
                textContent += `- ${option.text}: ${t.userAnswers[index] || "Нет ответа"}\n`;
            });
        } else if (t.type === "radio") {
            textContent += `- Ваш ответ: ${t.userAnswer || "Нет ответа"}\n`;
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