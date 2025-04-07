// Данные тем и заданий
const topics = [
    {
        id: 1,
        name: "Типы информации, 12 заданий",
        tasks: [
            {
                id: 1,
                question: "Установи вид информации в следующих ситуациях:",
                type: "select1",
                options: [
                    { text: "Ярослава читает афишу", correct: "Визуальная" },
                    { text: "Дима ест солёный огурец", correct: "Вкусовая" },
                    { text: "Артём услышал вой сирены", correct: "Слуховая" },
                    { text: "Влад прыгнул в холодный бассейн", correct: "Тактильная" },
                    { text: "Настя наслаждается ароматом свежих булочек", correct: "Обонятельная" }
                ],
                userAnswers: []
            },
            {
                id: 2,
                question: "Информацию, достаточную для решения поставленной задачи, называют?",
                type: "radio",
                options: [
                    { text: "Понятной", correct: false },
                    { text: "Полной", correct: true },
                    { text: "Адекватной", correct: false },
                    { text: "Особенной", correct: false }
                ],
                userAnswer: ""
            },
            {
                id: 3,
                question: "Заполни таблицу. Каким свойством не обладает информация в следующих случаях?",
                type: "drag-and-drop",
                options: [
                    { text: "полнота", correct: "Объявление, часть которого оторвана" },
                    { text: "актуальность", correct: "Программа школьных мероприятий на прошлый год" },
                    { text: "доступность", correct: "Информация, которая доступна только директору школы" },
                    { text: "понятность", correct: "Письмо на непонятном языке" },
                    { text: "достоверность", correct: "Расписание занятий, в котором сделали замену уроков" }
                ],
                userAnswers: {}
            },
            {
                id: 4,
                question: "Составь в правильном порядке схему передачи информации.",
                type: "drag-and-drop-order", // Новый тип задания: перетаскивание в правильном порядке
                options: [
                    "источник информации",
                    "кодирующее устройство",
                    "код",
                    "канал связи",
                    "декодирующее устройство",
                    "приёмник информации"
                ],
                correctOrder: [
                    "источник информации",
                    "кодирующее устройство",
                    "код",
                    "канал связи",
                    "декодирующее устройство",
                    "приёмник информации"
                ],
                userOrder: [] // Порядок, выбранный пользователем
            },
            {
                id: 5,
                question: "Установи соответствие:",
                type: "select2",
                options: [
                    { text: "Сохранение рисунка на жесткий диск", correct: "Хранение информации" },
                    { text: "Беседа друзей", correct: "Передача информации" },
                    { text: "Расчет зарплаты", correct: "Обработка информации" },
                    { text: "Проведение анкетирования школьников", correct: "Сбор информации" },
                ],
                userAnswers: []
            },
            {
                id: 6, // Новый ID
                question: "В какой философской концепции информация и информационные процессы присущи только человеку?",
                type: "radio",
                options: [
                    { text: "Антропоцентрическая", correct: false },
                    { text: "Атрибутивная", correct: false },
                    { text: "Функциональная", correct: false },
                    { text: "Аналитическая", correct: true }
                ],
                userAnswer: ""
            },
            {
                id: 7,
                question: "Запиши номера неинформационных процессов в порядке убывания. В ответе укажи число без знаков препинания.",
                description: `
                    1. Написание письма.<br>
                    2. Обработка цветного металла.<br>
                    3. Прослушивание песни.<br>
                    4. Пошив костюма.
                `,
                type: "text-input",
                correctAnswer: "42",
                userAnswer: ""
            },
            {
                id: 8,
                question: "Одноклассники работают с текстом. Глеб сохранил текстовый документ в 8-битной кодировке КОИ-8, а Костя сохранил этот же документ в 16-битной кодировке Unicode. В кодировке КОИ-8 текст занимает на 5 Кбайт памяти меньше. Определи количество символов в этом тексте.",
                type: "text-input",
                correctAnswer: "5120",
                userAnswer: "",
                hint: "Подсказка: Разница в размере (в байтах) = количество символов × разница в размере одного символа (1 байт)"
            },
            {
                id: 9,
                question: "Заполни таблицу, указав источник и приёмник информации для каждого процесса.",
                type: "table-fill",
                tableData: [
                    {
                        process: "Рысь оставляет метки, защищая свою территорию",
                        correctSource: "Рысь",
                        correctReceiver: "Другое животное"
                    },
                    {
                        process: "Бабушка читает новости в Telegram",
                        correctSource: "Telegram",
                        correctReceiver: "Бабушка"
                    },
                    {
                        process: "Программное управление полётом ракеты на компьютере",
                        correctSource: "Компьютер",
                        correctReceiver: "Ракета"
                    },
                    {
                        process: "Абитуриент решает систему уравнений",
                        correctSource: "Система уравнений",
                        correctReceiver: "Абитуриент"
                    }
                ],
                userAnswers: [] // Будет хранить ответы пользователя в формате: {source: "", receiver: ""}
            },
            {
                id: 10,
                question: "Укажи информационный носитель в данном примере:",
                description: "научно-популярный кинофильм «Трёхмерное моделирование».",
                type: "radio",
                options: [
                    { text: "киноплёнка", correct: true },
                    { text: "термоплёнка", correct: false },
                    { text: "магнитная лента", correct: false },
                    { text: "фотоплёнка", correct: false }
                ],
                userAnswer: null // Будет хранить индекс выбранного ответа
            },
            {
                id: 11,
                question: "Выбери ситуации из жизни, в которых осуществляется получение информации.",
                type: "checkbox-multiple",
                options: [
                    { text: "Бабушка пробует на вкус суп", correct: true },
                    { text: "Брат и сестра делают совместное фото", correct: false },
                    { text: "Приятели слушают аудиокнигу", correct: true },
                    { text: "Школьник делает записи в календаре погоды", correct: false },
                    { text: "Абитуриент изучает график сдачи ЕГЭ", correct: true }
                ],
                userAnswers: [] // Будет хранить индексы выбранных ответов
            },
            {
                id: 12,
                question: "Ученицы работают с текстом. Лиза сохранила текстовое сообщение в 8-битной кодировке КОИ-8, а Ульяна сохранила это же сообщение в 16-битной кодировке Unicode. В кодировке КОИ-8 текст занимает на 13 Кбайт памяти меньше. Найди количество символов в этом сообщении.",
                type: "text-input",
                correctAnswer: "13312",
                userAnswer: "",
                hint: "Решение:\n1. Переведите 13 Кбайт в байты: 13 × 1024 = 13312 байт\n2. Разница в размере на 1 символ: 2 байта (Unicode) - 1 байт (КОИ-8) = 1 байт\n3. Количество символов = 13312 байт / 1 байт = 13312",
                explanation: "Правильный ответ: 13312 символов. Разница в 13 Кбайт (13312 байт) возникает из-за того, что каждый символ в Unicode занимает на 1 байт больше, чем в КОИ-8. Поэтому количество символов равно разнице в размере файлов."
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

    if (task.type === "select1") {
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
    } else if (task.type === "select2") {
            task.options.forEach((option, index) => {
                taskContainer.innerHTML += `
                    <div>
                        <p>${option.text}</p>
                        <select id="answer-${index}">
                            <option value="">Выберите ответ</option>
                            <option value="Хранение ифнормации">Хранение ифнормации</option>
                            <option value="Передача информации">Передача информации</option>
                            <option value="Обработка информации">Обработка информации</option>
                            <option value="Сбор информации">Сбор информации</option>
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
    } else if (task.type === "drag-and-drop") {
        // Создаем таблицу для задания
        taskContainer.innerHTML += `
            <table>
                <thead>
                    <tr>
                        <th>Информация</th>
                        <th>Свойство</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Расписание занятий, в котором сделали замену уроков</td>
                        <td><div class="drop-zone" data-correct="достоверность"></div></td>
                    </tr>
                    <tr>
                        <td>Объявление, часть которого оторвана</td>
                        <td><div class="drop-zone" data-correct="полнота"></div></td>
                    </tr>
                    <tr>
                        <td>Программа школьных мероприятий на прошлый год</td>
                        <td><div class="drop-zone" data-correct="актуальность"></div></td>
                    </tr>
                    <tr>
                        <td>Письмо на непонятном языке</td>
                        <td><div class="drop-zone" data-correct="понятность"></div></td>
                    </tr>
                    <tr>
                        <td>Информация, которая доступна только директору школы</td>
                        <td><div class="drop-zone" data-correct="доступность"></div></td>
                    </tr>
                </tbody>
            </table>
            <div id="drag-items">
                ${task.options.map(option => `
                    <div class="drag-item" draggable="true" data-value="${option.text}">${option.text}</div>
                `).join('')}
            </div>
        `;

        // Инициализация функции Drag and Drop
        initDragAndDrop();
    } else if (task.type === "drag-and-drop-order") {
        // Создаем зоны для перетаскивания
        taskContainer.innerHTML += `
            <div id="drop-zones">
                ${task.correctOrder.map((_, index) => `
                    <div class="drop-zone" data-index="${index}"></div>
                `).join('')}
            </div>
            <div id="drag-items">
                ${task.options.map(option => `
                    <div class="drag-item" draggable="true" data-value="${option}">${option}</div>
                `).join('')}
            </div>
        `;

        // Инициализация Drag and Drop
        initDragAndDrop();
    }
    else if (task.type === "text-input") {
        taskContainer.innerHTML += `
            <p>${task.description}</p>
            <input type="text" id="text-answer" placeholder="Введите ответ">
        `;
    }
    else if (task.type === "table-fill") {
        let tableHTML = `
            <table class="info-process-table">
                <thead>
                    <tr>
                        <th>Информационный процесс</th>
                        <th>Источник информации</th>
                        <th>Приёмник информации</th>
                    </tr>
                </thead>
                <tbody>
        `;

        task.tableData.forEach((row, index) => {
            tableHTML += `
                <tr>
                    <td>${row.process}</td>
                    <td><input type="text" class="source-input" data-index="${index}" placeholder="Источник"></td>
                    <td><input type="text" class="receiver-input" data-index="${index}" placeholder="Приёмник"></td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;

        taskContainer.innerHTML += tableHTML;
        
        // Инициализация пустых ответов пользователя
        task.userAnswers = task.tableData.map(() => ({ source: "", receiver: "" }));
    }
    else if (task.type === "checkbox-multiple") {
        taskContainer.innerHTML += `
            <div class="checkbox-options">
                ${task.options.map((option, index) => `
                    <label class="checkbox-label">
                        <input type="checkbox" name="task-${task.id}" value="${index}" 
                               ${task.userAnswers.includes(index) ? 'checked' : ''}>
                        ${option.text}
                    </label>
                `).join('')}
            </div>
        `;

        // Добавляем обработчик для чекбоксов
        const checkboxes = document.querySelectorAll(`input[name="task-${task.id}"]`);
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    task.userAnswers.push(parseInt(this.value));
                } else {
                    task.userAnswers = task.userAnswers.filter(item => item !== parseInt(this.value));
                }
            });
        });
    }
}

// Инициализация Drag and Drop
function initDragAndDrop() {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropZones = document.querySelectorAll('.drop-zone');

    dragItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', dragOver);
        zone.addEventListener('drop', drop);
    });
}

// Обработчики событий для Drag and Drop
let draggedItem = null;

function dragStart(event) {
    draggedItem = this;
    this.classList.add('dragging');
    event.dataTransfer.setData('text/plain', this.textContent);
}

function dragEnd() {
    draggedItem = null;
    this.classList.remove('dragging');
}

function dragOver(event) {
    event.preventDefault();
    this.style.backgroundColor = '#e0e0e0';
}

function drop(event) {
    event.preventDefault();
    if (draggedItem) {
        this.textContent = draggedItem.textContent;
        this.setAttribute('data-answer', draggedItem.textContent);
        this.style.backgroundColor = '#f9f9f9';

        // Обновляем порядок ответов пользователя
        const index = this.getAttribute('data-index');
        task.userOrder[index] = draggedItem.textContent;
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
        

    } else if (task.type === "select2") {
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
    } else if (task.type === "drag-and-drop") {
        const dropZones = document.querySelectorAll('.drop-zone');
        let allCorrect = true;

        dropZones.forEach(zone => {
            const correctAnswer = zone.getAttribute('data-correct');
            const userAnswer = zone.getAttribute('data-answer');

            if (userAnswer === correctAnswer) {
                zone.classList.add('correct');
                zone.classList.remove('incorrect');
            } else {
                zone.classList.add('incorrect');
                zone.classList.remove('correct');
                allCorrect = false;
            }
        });

        if (allCorrect) {
            taskContainer.classList.add('correct');
            taskContainer.classList.remove('incorrect');
        } else {
            taskContainer.classList.add('incorrect');
            taskContainer.classList.remove('correct');
        }
    } else if (task.type === "drag-and-drop-order") {
        let allCorrect = true;

        task.correctOrder.forEach((correctAnswer, index) => {
            const userAnswer = task.userOrder[index];
            const dropZone = document.querySelector(`.drop-zone[data-index="${index}"]`);

            if (userAnswer === correctAnswer) {
                dropZone.classList.add('correct');
                dropZone.classList.remove('incorrect');
            } else {
                dropZone.classList.add('incorrect');
                dropZone.classList.remove('correct');
                allCorrect = false;
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
    else if (task.type === "text-input") {
        const input = document.getElementById('text-answer');
        task.userAnswer = input.value.trim();
        
        if (task.userAnswer === task.correctAnswer) {
            taskContainer.classList.add('correct');
            taskContainer.classList.remove('incorrect');
            input.style.border = "1px solid green";
        } else {
            taskContainer.classList.add('incorrect');
            taskContainer.classList.remove('correct');
            input.style.border = "1px solid red";
        }
    }
    else if (task.type === "table-fill") {
        const sourceInputs = document.querySelectorAll('.source-input');
        const receiverInputs = document.querySelectorAll('.receiver-input');
        let allCorrect = true;

        sourceInputs.forEach((input, index) => {
            const userSource = input.value.trim();
            const userReceiver = receiverInputs[index].value.trim();
            
            task.userAnswers[index] = {
                source: userSource,
                receiver: userReceiver
            };

            // Проверка правильности
            const isSourceCorrect = userSource.toLowerCase() === task.tableData[index].correctSource.toLowerCase();
            const isReceiverCorrect = userReceiver.toLowerCase() === task.tableData[index].correctReceiver.toLowerCase();

            if (isSourceCorrect && isReceiverCorrect) {
                input.style.border = "1px solid green";
                receiverInputs[index].style.border = "1px solid green";
            } else {
                input.style.border = "1px solid red";
                receiverInputs[index].style.border = "1px solid red";
                allCorrect = false;
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
    else if (task.type === "checkbox-multiple") {
        const checkboxes = document.querySelectorAll(`input[name="task-${task.id}"]`);
        let allCorrect = true;
        
        // Проверяем каждый вариант
        checkboxes.forEach((checkbox, index) => {
            const isChecked = checkbox.checked;
            const isCorrectOption = task.options[index].correct;
            const label = checkbox.parentElement;
            
            if (isChecked && isCorrectOption) {
                // Правильно выбранный вариант
                label.style.color = "green";
                label.style.fontWeight = "bold";
            } else if (isChecked && !isCorrectOption) {
                // Неправильно выбранный вариант
                label.style.color = "red";
                label.style.fontWeight = "bold";
                allCorrect = false;
            } else if (!isChecked && isCorrectOption) {
                // Невыбранный правильный вариант
                label.style.color = "green";
                label.style.fontWeight = "bold";
                allCorrect = false;
            } else {
                // Невыбранный неправильный вариант
                label.style.color = "";
                label.style.fontWeight = "";
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
        
        if (t.type === "select" || t.type === "select2") {
            t.options.forEach((option, index) => {
                const userAnswer = t.userAnswers[index] || "Нет ответа";
                const status = userAnswer === option.correct ? "✓" : "✗";
                textContent += `- ${option.text}: ${userAnswer} ${status}\n`;
            });
        } 
        else if (t.type === "radio") {
            const status = t.userAnswer === t.options.find(opt => opt.correct)?.text ? "✓" : "✗";
            textContent += `- Ваш ответ: ${t.userAnswer || "Нет ответа"} ${status}\n`;
        } 
        else if (t.type === "drag-and-drop" || t.type === "drag-and-drop-order") {
            textContent += `- Ваши ответы: ${JSON.stringify(t.userAnswers || t.userOrder, null, 2)}\n`;
        } 
        else if (t.type === "text-input") {
            const status = t.userAnswer === t.correctAnswer ? "✓" : "✗";
            textContent += `- Ваш ответ: ${t.userAnswer || "Нет ответа"} ${status} (Правильный: ${t.correctAnswer})\n`;
        } 
        else if (t.type === "table-fill") {
            textContent += `- Ваши ответы:\n`;
            t.userAnswers.forEach((answer, idx) => {
                textContent += `  Строка ${idx + 1}: Источник - ${answer.source || "Нет ответа"}, Приёмник - ${answer.receiver || "Нет ответа"}\n`;
            });
        } 
        else if (t.type === "checkbox-multiple") {
            textContent += `- Выбранные варианты:\n`;
            t.options.forEach((option, index) => {
                const isSelected = t.userAnswers.includes(index);
                const status = option.correct === isSelected ? "✓" : "✗";
                textContent += `  ${option.text}: ${isSelected ? "Да" : "Нет"} ${status}\n`;
            });
        } 
        else if (t.type === "drag-drop-table") {
            textContent += `- Ваши ответы:\n`;
            t.userAnswers.forEach((row, i) => {
                textContent += `  Строка ${i + 1}: ${row[0] || "Пусто"} | ${row[1] || "Пусто"}\n`;
            });
        } 
        else if (t.type === "multiple-text-input") {
            textContent += `- Ваши ответы:\n`;
            t.inputs.forEach((input, i) => {
                const status = input.userAnswer === input.correctAnswer ? "✓" : "✗";
                textContent += `  ${input.label} ${input.userAnswer || "Нет ответа"} ${status} (Правильный: ${input.correctAnswer})\n`;
            });
        }
        
        textContent += "\n";
    });

    // Добавляем общую статистику
    const totalTasks = topic.tasks.length;
    const completedTasks = topic.tasks.filter(t => {
        if (t.type === "checkbox-multiple") {
            return t.userAnswers.length > 0;
        }
        return t.userAnswer || t.userAnswers?.length > 0;
    }).length;
    
    textContent += `\nВыполнено заданий: ${completedTasks} из ${totalTasks}\n`;
    textContent += `Процент выполнения: ${Math.round((completedTasks / totalTasks) * 100)}%\n`;

    const blob = new Blob([textContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `results-${topic.name.replace('232323')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// КНОПКА ОЧИСТКИ ОТВЕТОВ
// Получаем кнопку "Очистить ответы"
const clearAnswersButton = document.getElementById('clear-answers');

// Функция для очистки ответов
function clearAnswers() {
    if (task.type === "select") {
        task.options.forEach((option, index) => {
            const select = document.getElementById(`answer-${index}`);
            select.value = "";
            select.style.border = "";
        });
        task.userAnswers = [];
     } else if (task.type === "select2") {
            task.options.forEach((option, index) => {
                const select = document.getElementById(`answer-${index}`);
                select.value = "";
                select.style.border = "";
            });
            task.userAnswers = [];
    } else if (task.type === "radio") {
        const radioButtons = document.querySelectorAll(`input[name="task-${task.id}"]`);
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
        task.userAnswer = "";
    } else if (task.type === "drag-and-drop") {
        const dropZones = document.querySelectorAll('.drop-zone');
        dropZones.forEach(zone => {
            zone.textContent = "";
            zone.removeAttribute('data-answer');
            zone.classList.remove('correct', 'incorrect');
        });
        task.userAnswers = {};
    } else if (task.type === "drag-and-drop-order") {
        const dropZones = document.querySelectorAll('.drop-zone');
        dropZones.forEach(zone => {
            zone.textContent = "";
            zone.removeAttribute('data-answer');
            zone.classList.remove('correct', 'incorrect');
        });
        task.userOrder = [];
    }
    else if (task.type === "text-input") {
        const input = document.getElementById('text-answer');
        input.value = "";
        input.style.border = "";
        task.userAnswer = "";
    }
    else if (task.type === "table-fill") {
        const inputs = document.querySelectorAll('.info-process-table input');
        inputs.forEach(input => {
            input.value = "";
            input.style.border = "";
        });
        task.userAnswers = task.tableData.map(() => ({ source: "", receiver: "" }));
    }
    else if (task.type === "checkbox-multiple") {
        const checkboxes = document.querySelectorAll(`input[name="task-${task.id}"]`);
        const labels = document.querySelectorAll(`.checkbox-label`);
        
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        labels.forEach(label => {
            label.style.color = "";
            label.style.fontWeight = "";
        });
        
        task.userAnswers = [];
        taskContainer.classList.remove('correct', 'incorrect');
    }

    taskContainer.classList.remove('correct', 'incorrect');
}

// Обработчик для кнопки "Очистить ответы"
clearAnswersButton.addEventListener('click', clearAnswers);

document.getElementById('back-to-list').addEventListener('click', () => {
    window.location.href = '1.1.html';
});
// Инициализация
renderTask();