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
        if (t.type === "select") {
            t.options.forEach((option, index) => {
                textContent += `- ${option.text}: ${t.userAnswers[index] || "Нет ответа"}\n`;
            });
        } else if (t.type === "radio") {
            textContent += `- Ваш ответ: ${t.userAnswer || "Нет ответа"}\n`;
        } else if (t.type === "drag-and-drop") {
            textContent += `- Ваши ответы: ${JSON.stringify(t.userAnswers, null, 2)}\n`;
        }
        textContent += "\n";
    });

    const blob = new Blob([textContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `results-${topic.name}.txt`;
    link.click();
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