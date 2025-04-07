// Данные тем и заданий
const topics = [
    {
        id: 1,
        name: "Устройство компьютера, 12 заданий",
        tasks: [
            {
                id: 1, 
                question: "Найди верные ответы. Какие устройства относятся к внутренним устройствам ПК?",
                type: "checkbox-grid",
                options: [
                    { text: "клавиатура", correct: false },
                    { text: "блок питания", correct: true },
                    { text: "сетевая карта", correct: true },
                    { text: "трекбол", correct: false },
                    { text: "процессор", correct: true },
                    { text: "сканер", correct: false }
                ],
                userAnswers: [] // Будет хранить индексы выбранных ответов
            },
            {
                id: 2, 
                question: "Найди верные ответы. Какие устройства относятся ко внешним устройствам ПК?",
                type: "checkbox-grid",
                options: [
                    { text: "Процессор", correct: false },
                    { text: "Камера", correct: true },
                    { text: "Сетевая карта", correct: false },
                    { text: "Монитор", correct: true },
                    { text: "Микрофон", correct: true },
                    { text: "Видеокарта", correct: false }
                ],
                userAnswers: [] // Будет хранить индексы выбранных ответов
            },
            {
                id: 3, 
                question: "Найди верные ответы. Какие характеристики процессора являются более значимыми?",
                type: "checkbox-grid",
                options: [
                    { text: "Мощность", correct: false },
                    { text: "Заполненность", correct: false },
                    { text: "Ускорение", correct: false },
                    { text: "Архитектура", correct: true },
                    { text: "Размер чипсета", correct: false },
                    { text: "Время", correct: false },
                    { text: "Производительность", correct: true },
                    { text: "Тактовая частота", correct: true }
                ],
                userAnswers: [] // Будет хранить индексы выбранных ответов
            },
            {
                id: 4, 
                question: "Выбери правильные ответы. Какую функцию выполняют контроллеры на материнской плате?",
                type: "checkbox-grid",
                options: [
                    { text: "обеспечивают взаимодействие с периферийными устройствами", correct: true },
                    { text: "помогают процессору", correct: false },
                    { text: "обеспечивают хранение данных", correct: false },
                    { text: "контролируют процессор", correct: false },
                    { text: "контролируют скорость передачи данных по сети", correct: true }
                ],
                userAnswers: [],
                description: `
                `
            },
            {
                id: 5,
                question: "Что относится к основным характеристикам оперативной памяти?",
                type: "radio",
                options: [
                    { text: "Масса", correct: false },
                    { text: "Время", correct: false },
                    { text: "Скорость работы", correct: true },
                    { text: "Давление", correct: false }
                ],
                userAnswer: "",
            },
            {
                id: 6,
                question: "Что относится к основным характеристикам видеокарты?",
                type: "radio",
                options: [
                    { text: "Масса", correct: false },
                    { text: "Система охлаждения", correct: false },
                    { text: "Архитектура", correct: false },
                    { text: "Модель графического процессора", correct: true }
                ],
                userAnswer: "",
            },
            {
                id: 7,
                question: "Выбери правильные ответы. Какие характеристики относятся к жёсткому диску?",
                type: "checkbox-grid",
                options: [
                    { text: "объём", correct: true },
                    { text: "сила", correct: false },
                    { text: "импульс", correct: false },
                    { text: "интерфейс подключения", correct: true }
                ],
                userAnswers: [],
                description: `

                `
            },
            {
                id: 8, 
                question: "Отметь верный ответ. Выбери принцип, которого не существует.",
                type: "radio", // Новый тип для одиночного выбора
                options: [
                    { text: "принцип программного управления", correct: false },
                    { text: "принцип однородности памяти", correct: false },
                    { text: "принцип адресности памяти", correct: false },
                    { text: "принцип хаотичной организации памяти", correct: true }
                ],
                userAnswer: null,
                description: `

                `
            },
            {
                id: 9, 
                question: "Добавь недостающее слово в предложение.",
                description: "Любой компьютер должен содержать в себе центральный ______, внутреннюю память (оперативную), внешнюю память (постоянную), устройства ввода, а также устройства вывода.",
                type: "fill-in-blank",
                correctAnswer: "процессор",
                userAnswer: "",
                placeholder: "Введите недостающее слово",
                alternatives: ["процессор", "процессорный", "процессорный блок"] // Допустимые варианты
            },
            {
                id: 10, 
                question: "Добавь недостающее слово в предложение.",
                description: "Ни для кого уже не секрет, что современные компьютеры хранят всю информацию в виде ______ кода",
                type: "fill-in-blank",
                correctAnswer: "двоичного",
                userAnswer: "",
                placeholder: "Введите недостающее слово",
                alternatives: ["Двоичного"] // Допустимые варианты
            },
            {
                id: 11,
                question: "Выполни задание на соответствие. Установи соответствие между номерами принципов и их названиями.",
                type: "drag-match-table",
                table: {
                    headers: ["Номер принципа", "Название принципа"],
                    rows: [
                        { id: 1, label: "Первый", correct: "Принцип программного управления" },
                        { id: 2, label: "Второй", correct: "Принцип двоичного кодирования" },
                        { id: 3, label: "Третий", correct: "Принцип однородности памяти" },
                        { id: 4, label: "Четвёртый", correct: "Принцип адресности памяти" },
                        { id: 5, label: "Пятый", correct: "Принцип иерархической организации памяти" },
                        { id: 6, label: "Шестой", correct: "Состав основных компонентов ПК" }
                    ]
                },
                dragItems: [
                    "Принцип однородности памяти",
                    "Принцип управляемости процессора",
                    "Состав основных компонентов ПК",
                    "Принцип адресности памяти",
                    "Принцип программного управления",
                    "Принцип иерархической организации памяти",
                    "Принцип двоичного кодирования"
                ],
                userAnswers: {}
            },
            {
                id: 12, 
                question: "Добавь недостающее слово в предложение.",
                description: "С ростом объема памяти поиск нужной информации существенно ______",
                type: "fill-in-blank",
                correctAnswer: "Усложняется",
                userAnswer: "",
                placeholder: "Введите недостающее слово",
                alternatives: ["усложняется"] // Допустимые варианты
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
    else if (task.type === "checkbox-grid") {
        taskContainer.innerHTML += `
            <div class="checkbox-grid">
                ${task.options.map((option, index) => `
                    <label class="checkbox-item">
                        <input type="checkbox" 
                               name="task-${task.id}" 
                               value="${index}"
                               ${task.userAnswers.includes(index) ? 'checked' : ''}>
                        ${option.text}
                    </label>
                `).join('')}
            </div>
        `;
    
        // Обработчик изменений
        const checkboxes = document.querySelectorAll(`.checkbox-grid input[name="task-${task.id}"]`);
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
    else if (task.type === "fill-in-blank") {
        taskContainer.innerHTML += `
            <p class="fill-description">${task.description.replace('______', '<span class="blank">______</span>')}</p>
            <div class="fill-container">
                <input type="text" 
                       id="fill-answer" 
                       placeholder="${task.placeholder || 'Введите ответ'}" 
                       value="${task.userAnswer}">
                <button class="fill-submit">Ответить</button>
            </div>
        `;
    
        document.querySelector('.fill-submit').addEventListener('click', checkTask);
    }
    else if (task.type === "drag-match-table") {
        taskContainer.innerHTML += `
            <table class="match-table">
                <thead>
                    <tr>
                        ${task.table.headers.map(h => `<th>${h}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${task.table.rows.map(row => `
                        <tr data-row-id="${row.id}">
                            <td>${row.label}</td>
                            <td class="drop-zone" data-correct="${row.correct}">
                                ${task.userAnswers[row.id] || ''}
                            </td>
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
        
        initDragAndDropMatch();
    }
}


function initDragAndDropMatch() {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropZones = document.querySelectorAll('.match-table .drop-zone');

    dragItems.forEach(item => {
        item.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.textContent);
            this.classList.add('dragging');
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
            
            const data = e.dataTransfer.getData('text/plain');
            const rowId = this.parentElement.dataset.rowId;
            
            this.textContent = data;
            task.userAnswers[rowId] = data;
        });
    });
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
    else if (task.type === "checkbox-grid") {
        let allCorrect = true;
        const checkboxes = document.querySelectorAll(`.checkbox-grid input[name="task-${task.id}"]`);
        
        checkboxes.forEach((checkbox, index) => {
            const isChecked = checkbox.checked;
            const isCorrect = task.options[index].correct;
            const label = checkbox.parentElement;
            
            if (isChecked !== isCorrect) {
                label.style.color = "red";
                allCorrect = false;
            } else if (isCorrect) {
                label.style.color = "green";
            } else {
                label.style.color = "";
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
    else if (task.type === "fill-in-blank") {
        const input = document.getElementById('fill-answer');
        task.userAnswer = input.value.trim().toLowerCase();
        
        // Проверяем на соответствие основному ответу или альтернативам
        const isCorrect = task.alternatives 
            ? task.alternatives.some(alt => alt.toLowerCase() === task.userAnswer)
            : task.userAnswer === task.correctAnswer.toLowerCase();
    
        if (isCorrect) {
            input.style.border = "2px solid #4CAF50";
            taskContainer.classList.add('correct');
            taskContainer.classList.remove('incorrect');
        } else {
            input.style.border = "2px solid #F44336";
            taskContainer.classList.add('incorrect');
            taskContainer.classList.remove('correct');
        }
    }
    else if (task.type === "drag-match-table") {
        let allCorrect = true;
        const dropZones = document.querySelectorAll('.match-table .drop-zone');
    
        dropZones.forEach(zone => {
            const rowId = zone.parentElement.dataset.rowId;
            const correctAnswer = zone.dataset.correct;
            const userAnswer = task.userAnswers[rowId];
    
            if (userAnswer === correctAnswer) {
                zone.style.backgroundColor = '#e8f5e9';
            } else {
                zone.style.backgroundColor = '#ffebee';
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
        window.location.href = `task1.3.html?topic=${topicId}&task=${taskId - 1}`;
    }
});

nextButton.addEventListener('click', () => {
    if (taskId < topic.tasks.length) {
        window.location.href = `task1.3.html?topic=${topicId}&task=${taskId + 1}`;
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
    else if (task.type === "checkbox-grid") {
        const checkboxes = document.querySelectorAll(`.checkbox-grid input[name="task-${task.id}"]`);
        const labels = document.querySelectorAll(`.checkbox-grid label`);
        
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        labels.forEach(label => {
            label.style.color = "";
        });
        
        task.userAnswers = [];
        taskContainer.classList.remove('correct', 'incorrect');
    }
    else if (task.type === "fill-in-blank") {
        const input = document.getElementById('fill-answer');
        input.value = "";
        input.style.border = "1px solid #ddd";
        task.userAnswer = "";
        taskContainer.classList.remove('correct', 'incorrect');
    }
    else if (task.type === "drag-match-table") {
        const dropZones = document.querySelectorAll('.match-table .drop-zone');
        
        dropZones.forEach(zone => {
            zone.textContent = '';
            zone.style.backgroundColor = '';
        });
        
        task.userAnswers = {};
        taskContainer.classList.remove('correct', 'incorrect');
    }

    taskContainer.classList.remove('correct', 'incorrect');
}

// Обработчик для кнопки "Очистить ответы"
clearAnswersButton.addEventListener('click', clearAnswers);

document.getElementById('back-to-list').addEventListener('click', () => {
    window.location.href = '1.3.html';
});
// Инициализация
renderTask();