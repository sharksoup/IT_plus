// Данные тем и заданий
const topics = [
    {
        id: 1,
        name: "Подходы к измерению информации, 12 заданий",
        tasks: [
            {
                id: 1,
                question: "Расставь единицы измерения информации в порядке возрастания:",
                type: "drag-drop-table",
                table: {
                    headers: [
                        "Название единицы измерения количества информации",
                        "Чему равна единица измерения количества информации"
                    ],
                    correctRows: [
                        ["1 Тбайт", "2^10 Гбайт"],
                        ["1 Гбайт", "2^10 Мбайт"],
                        ["1 Мбайт", "2^10 Кбайт"],
                        ["1 Кбайт", "2^10 байт"],
                        ["1 байт", "8 бит"]
                    ]
                },
                dragItems: [
                    "1 байт", "1 Кбайт", "1 Мбайт", "1 Гбайт", "1 Тбайт",
                    "8 бит", "2^10 байт", "2^10 Кбайт", "2^10 Мбайт", "2^10 Гбайт"
                ],
                userAnswers: Array(5).fill(["", ""])
            },
            {
                id: 2,
                question: "В электронном учебнике 128 страниц. Сергей установил закладку на 54-й странице. Какое количество информации в битах несет это сообщение?",
                description: `

                `,
                type: "text-input",
                correctAnswer: "7",
                userAnswer: ""
            },
            {
                id: 3,
                question: "Запиши верные утверждения",
                type: "checkbox-multiple",
                options: [
                    { text: "Формулу для вычисления количества информации равновероятных событий вывел Клод Шеннон.", correct: true },
                    { text: "Для кодировки 99 различных цветов используется 6-битное кодирование.", correct: false },
                    { text: "Мощность алфавита зависит от информационного веса символа.", correct: true },
                    { text: "С помощью вероятностного подхода можно определять количество информации в текстовом сообщении, которое состоит из символов определенного алфавита.", correct: true },
                    { text: "Если для кодирования одного символа используется 4 бита информации, то можно закодировать 16 символов.", correct: true }
                ],
                userAnswers: [] // Будет хранить индексы выбранных ответов
            },
            {
                id: 4,
                question: "На складе располагается 15 стеллажей. На каждом стеллаже 5 полок. Какое количество информации в битах несет сообщение, что обувь находится на нижней полке 11-го стеллажа? В ответ запиши только число.",
                description: `

                `,
                type: "text-input",
                correctAnswer: "6",
                userAnswer: ""
            },
            {
                id: 5,
                question: "Сообщение занимает 2 строки и имеет информационный объем 0,5 килобайт. На каждой строке записано 128 символов. Узнай мощность алфавита, который использовался, в ответ запиши число.",
                description: `

                `,
                type: "text-input",
                correctAnswer: "65536",
                userAnswer: ""
            },
            {
                id: 6,
                question: "Абитуриентам вуза в личном деле присваивается индивидуальный номер, который содержит 4 цифры. Для кода могут быть использованы только цифры 1, 3, 5, 7. Номер абитуриентов уникальны. Определи максимальное число абитуриентов этого вуза, в ответ запиши только число.",
                description: `

                `,
                type: "text-input",
                correctAnswer: "256",
                userAnswer: ""
            },
            {
                id: 7,
                question: "Установи вид информации в следующих ситуациях:",
                type: "select2",
                options: [
                    { text: "Узнай, какое количество килобайт содержит сообщение объемом 16^15 бит. В ответе запиши показатель степени числа 2 в килобайтах.", correct: "47" },
                ],
                userAnswers: []
            },
            {
                id: 8,
                question: "В корзине пирожки: 4 с капустой, 10 с творогом, 2 с вишней и 4 с яблоком. Посчитай количество информации в сообщении 'Зина села на пенек и съела пирожок с вишней'. Ответ запиши в числовом виде в битах ",
                description: `

                `,
                type: "text-input",
                correctAnswer: "3",
                userAnswer: ""
            },
            {
                id: 9,
                question: "В полке стола лежат черные и белые бусинки. Из них 27 черных бусинок. Сообщение о том, что из полки стола достали белые бусинки, несет 2 бита информации. Узнай, сколько всего бусинок в полке стола, в ответ запиши только число.",
                description: `

                `,
                type: "text-input",
                correctAnswer: "36",
                userAnswer: ""
            },
            {
                id: 10,
                question: "В вазочке находится 128 конфет: 16 карамелек, 16 леденцов, 64 шоколадки и 32 мармеладки. Какое количество информации содержится в сообщениях о том, что из вазочки случайным образом были последовательно взяты с возвратом карамелька (I₁), леденец (I₂), шоколадка (I₃) и мармеладка (I₄).",
                type: "multiple-text-input",
                inputs: [
                    { label: "I₁ =", correctAnswer: "3", userAnswer: "" },
                    { label: "I₂ =", correctAnswer: "3", userAnswer: "" },
                    { label: "I₃ =", correctAnswer: "1", userAnswer: "" },
                    { label: "I₄ =", correctAnswer: "2", userAnswer: "" }
                ],
                description: `

                `
            },
            {
                id: 11,
                question: "В процессе регистрации в информационной системе любому гражданину некоторой страны присваивается специальный код, состоящий из 16 символов и содержит арабские цифры и символы некоторого алфавита (всего 140 символов). База данных хранит каждый код, для хранения которого выделено одинаковое и минимально допустимое целое число байт. Все символы кодируются одинаково и минимально возможным количеством бит (посимвольное кодирование). Узнай объём памяти (в Кбайт), нужный для хранения 2560 кодов.",
                type: "text-input",
                correctAnswer: "40",
                userAnswer: "",
                description: `
                `
            },
            {
                id: 12, // Укажите следующий доступный ID
                question: "Каждый ученик получает электронный пропуск, на котором зафиксированы следующие данные о владельце: личный код (10 символов из 23 допустимых), класс (число от 1 до 11 в двоичном коде), дополнительные сведения. Пропуск содержит 16 байт информации. Определи объём памяти, который необходим для хранения дополнительных сведений, ответ запишите в байтах.",
                type: "text-input",
                correctAnswer: "9",
                userAnswer: "",
                description: `

                `
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
                            <option value="19">19</option>
                            <option value="27">27</option>
                            <option value="9">9</option>
                            <option value="47">47</option>
                            <option value="29">29</option>
                            <option value="37">37</option>
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
    else if (task.type === "drag-and-drop-table") {
        // Создаем таблицу с двумя колонками
        taskContainer.innerHTML += `
            <table class="units-table">
                <thead>
                    <tr>
                        ${task.columns.map(col => `<th>${col}</th>`).join('')}
                    </tr>
                </thead>
                <tbody id="drop-zone">
                    ${task.correctOrder.map((_, index) => `
                        <tr class="drop-row" data-index="${index}">
                            <td class="drop-cell"></td>
                            <td class="drop-cell"></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div id="drag-items">
                ${task.options.map(option => `
                    <div class="drag-unit" draggable="true" data-name="${option.name}" data-value="${option.value}">
                        <span class="unit-name">${option.name}</span>
                        <span class="unit-value">${option.value}</span>
                    </div>
                `).join('')}
            </div>
        `;

        initDragAndDropTable();
    }
    else if (task.type === "drag-drop-table") {
        taskContainer.innerHTML = `
            <h3>Задание ${task.id}: ${task.question}</h3>
            <table class="units-table">
                <thead>
                    <tr>
                        ${task.table.headers.map(h => `<th>${h}</th>`).join('')}
                    </tr>
                </thead>
                <tbody id="table-body">
                    ${task.userAnswers.map((row, i) => `
                        <tr data-row="${i}">
                            <td class="drop-zone" data-col="0">${row[0]}</td>
                            <td class="drop-zone" data-col="1">${row[1]}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="drag-items-container">
                ${task.dragItems.map(item => `
                    <div class="drag-item" draggable="true">${item}</div>
                `).join('')}
            </div>
        `;

        initDragDropTable();
    }
    else if (task.type === "multiple-text-input") {
        taskContainer.innerHTML += `
            <p>${task.description || ''}</p>
            <div class="multiple-inputs-container">
                ${task.inputs.map((input, index) => `
                    <div class="input-group">
                        <label>${input.label}</label>
                        <input type="text" 
                               id="input-${index}" 
                               value="${input.userAnswer}" 
                               placeholder="Ответ">
                        <span class="unit">бит</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
}


function initDragDropTable() {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropZones = document.querySelectorAll('.drop-zone');

    dragItems.forEach(item => {
        item.addEventListener('dragstart', function() {
            this.classList.add('dragging');
            draggedItem = this;
        });
        item.addEventListener('dragend', function() {
            this.classList.remove('dragging');
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('drop-hover');
        });

        zone.addEventListener('dragleave', function() {
            this.classList.remove('drop-hover');
        });

        zone.addEventListener('drop', function() {
            this.classList.remove('drop-hover');
            if (draggedItem) {
                const rowIdx = this.parentElement.dataset.row;
                const colIdx = this.dataset.col;
                
                // Обновляем данные
                task.userAnswers[rowIdx][colIdx] = draggedItem.textContent;
                this.textContent = draggedItem.textContent;
            }
        });
    });
}


function initDragDropTable() {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropZones = document.querySelectorAll('.drop-zone');

    // Удаляем старые обработчики, если они есть
    dragItems.forEach(item => {
        item.replaceWith(item.cloneNode(true));
    });

    // Добавляем новые обработчики
    document.querySelectorAll('.drag-item').forEach(item => {
        item.addEventListener('dragstart', function() {
            this.classList.add('dragging');
            draggedItem = this;
        });
        
        item.addEventListener('dragend', function() {
            this.classList.remove('dragging');
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('drop-hover');
        });

        zone.addEventListener('dragleave', function() {
            this.classList.remove('drop-hover');
        });

        zone.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('drop-hover');
            
            if (draggedItem) {
                const rowIdx = this.parentElement.dataset.row;
                const colIdx = this.dataset.col;
                
                // Обновляем данные
                task.userAnswers[rowIdx][colIdx] = draggedItem.textContent;
                this.textContent = draggedItem.textContent;
                
                // Удаляем перетащенный элемент
                draggedItem.remove();
                draggedItem = null;
            }
        });
    });
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
    else if (task.type === "drag-and-drop-table") {
        let allCorrect = true;
        const rows = document.querySelectorAll('.drop-row');

        rows.forEach((row, rowIndex) => {
            const cells = row.querySelectorAll('.drop-cell');
            const userAnswer = task.userAnswers[rowIndex] || {};
            const correctAnswer = task.correctOrder[rowIndex];

            cells.forEach((cell, cellIndex) => {
                if (cellIndex === 0) {
                    const isCorrect = userAnswer.name === correctAnswer.name;
                    cell.style.color = isCorrect ? 'green' : 'red';
                    if (!isCorrect) allCorrect = false;
                } else {
                    const isCorrect = userAnswer.value === correctAnswer.value;
                    cell.style.color = isCorrect ? 'green' : 'red';
                    if (!isCorrect) allCorrect = false;
                }
            });
        });

        if (allCorrect) {
            taskContainer.classList.add('correct');
            taskContainer.classList.remove('incorrect');
        } else {
            taskContainer.classList.add('incorrect');
            taskContainer.classList.remove('correct');
        }
    }
    if (task.type === "drag-drop-table") {
        let isCorrect = true;
        
        task.userAnswers.forEach((row, rowIdx) => {
            const correctRow = task.table.correctRows[rowIdx];
            if (row[0] !== correctRow[0] || row[1] !== correctRow[1]) {
                isCorrect = false;
            }
        });

        const rows = document.querySelectorAll('#table-body tr');
        rows.forEach((row, rowIdx) => {
            const cells = row.querySelectorAll('td');
            const correctRow = task.table.correctRows[rowIdx];
            
            cells.forEach((cell, colIdx) => {
                if (cell.textContent === correctRow[colIdx]) {
                    cell.style.backgroundColor = '#e8f5e9'; // зеленый
                } else {
                    cell.style.backgroundColor = '#ffebee'; // красный
                    isCorrect = false;
                }
            });
        });

        if (isCorrect) {
            taskContainer.classList.add('correct');
            taskContainer.classList.remove('incorrect');
        } else {
            taskContainer.classList.add('incorrect');
            taskContainer.classList.remove('correct');
        }
    }
    else if (task.type === "multiple-text-input") {
        let allCorrect = true;
        
        task.inputs.forEach((input, index) => {
            const element = document.getElementById(`input-${index}`);
            input.userAnswer = element.value.trim();
            
            if (input.userAnswer === input.correctAnswer) {
                element.style.border = "1px solid green";
            } else {
                element.style.border = "1px solid red";
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
}
// Навигация по заданиям
prevButton.addEventListener('click', () => {
    if (taskId > 1) {
        window.location.href = `task1.2.html?topic=${topicId}&task=${taskId - 1}`;
    }
});

nextButton.addEventListener('click', () => {
    if (taskId < topic.tasks.length) {
        window.location.href = `task1.2.html?topic=${topicId}&task=${taskId + 1}`;
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
    else if (task.type === "drag-and-drop-table") {
        document.querySelectorAll('.drop-cell').forEach(cell => {
            cell.innerHTML = '';
            cell.style.color = '';
            cell.removeAttribute('data-filled');
        });
        task.userAnswers = [];
    }
    else if (task.type === "drag-drop-table") {
        // Очищаем пользовательские ответы
        task.userAnswers = Array(5).fill(["", ""]);
        
        // Очищаем таблицу
        const cells = document.querySelectorAll('.units-table td');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.style.backgroundColor = '';
        });
        
        // Сбрасываем классы состояния
        taskContainer.classList.remove('correct', 'incorrect');
        
        // Возвращаем все элементы в блок для перетаскивания
        const dragContainer = document.querySelector('.drag-items-container');
        const allItems = Array.from(task.dragItems);
        
        // Очищаем и заново заполняем контейнер
        dragContainer.innerHTML = '';
        allItems.forEach(item => {
            const dragItem = document.createElement('div');
            dragItem.className = 'drag-item';
            dragItem.draggable = true;
            dragItem.textContent = item;
            dragContainer.appendChild(dragItem);
        });
        
        // Переинициализируем обработчики
        initDragDropTable();
    }
    else if (task.type === "multiple-text-input") {
        task.inputs.forEach((input, index) => {
            const element = document.getElementById(`input-${index}`);
            element.value = "";
            element.style.border = "";
            input.userAnswer = "";
        });
        taskContainer.classList.remove('correct', 'incorrect');
    }

    taskContainer.classList.remove('correct', 'incorrect');
}

// Обработчик для кнопки "Очистить ответы"
clearAnswersButton.addEventListener('click', clearAnswers);

document.getElementById('back-to-list').addEventListener('click', () => {
    window.location.href = '1.2.html';
});
// Инициализация
renderTask();