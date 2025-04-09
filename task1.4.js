// Данные тем и заданий
const topics = [
    {
        id: 1,
        name: "Кодирование информации, 16 заданий",
        tasks: [
            {
                id: 1,
                question: "Отметь языки, которые относятся к естественным:",
                type: "checkbox-grid",
                options: [
                    { text: "латышский", correct: true },
                    { text: "C++", correct: false },
                    { text: "ноты", correct: false },
                    { text: "язык мимики", correct: true },
                    { text: "Pascal", correct: false },
                    { text: "польский", correct: true },
                    { text: "язык жестов", correct: true },
                    { text: "математические символы", correct: false },
                    { text: "итальянский", correct: true },
                    { text: "Python", correct: false }
                ],
                userAnswers: []
            },
            {
                id: 2,
                question: "Восстановление начального текста называется:",
                type: "select2",
                options: [
                    { text: "", correct: "дешифрованием" },
                ],
                userAnswers: []
            },
            {
                id: 3,
                question: "Какое количество цифр 4 встречается в записи чисел 15, 16, 17... 20, 21 в системе счисления с основанием 7? Выберите верный ответ.",
                type: "select3",
                options: [
                    { text: "", correct: "1" },
                ],
                userAnswers: []
            },
            {
                id: 4,
                question: "Запишите верные утверждения <br><br> 1. Сэмюэл Морзе изобрел телеграф в 1837 году.<br> 2. Для кодировки короткого сигнала используется тире.<br> 3. Код азбуки Морзе является неравномерным.<br> 4. В азбуке Морзе длинные сигналы представлены в виде тире.<br> 5. Для кодирования цифры 7 кодом Бодо необходимо использовать 5 бит.",
                description: "",
                type: "checkbox-grid",
                options: [
                    { text: "1", correct: true },
                    { text: "2", correct: false },
                    { text: "3", correct: true },
                    { text: "4", correct: true },
                    { text: "5", correct: true },
                ],
                userAnswers: []
            },
            {
                id: 5, // Убедитесь, что ID уникален
                question: "Раставь разряды над цифрами числа",
                type: "digit-place-match",
                number: "126,22",
                digits: ["1", "2", "6", "2", "2"],
                places: {
                    "1": ["1", "0"],     // 1 в разряде единиц (10^0)
                    "2": ["2", "-1"],    // Первая 2 в разряде десятых (10^-1)
                    "6": ["1", "1"],     // 6 в разряде десятков (10^1)
                    "2": ["2", "-2"],    // Вторая 2 в разряде сотых (10^-2)
                    "2": ["2", "0"]      // Если есть другая 2 в разряде единиц
                },
                dragItems: ["-2", "-1", "0", "1", "2"],
                userAnswers: {} // Будет хранить { digitIndex: "place" }
            },
            {
                id: 6,
                question: "Переведи двоичное число 100010,1 в систему счисления с основанием 10",
                description: `

                `,
                type: "text-input",
                correctAnswer: "34,5",
                userAnswer: ""
            },
            {
                id: 7,
                question: "Переведи шестнадцатеричное число 45A8D в десятичную систему счисления",
                description: `

                `,
                type: "text-input",
                correctAnswer: "285325",
                userAnswer: ""
            },
            {
                id: 8,
                question: "Выполни перевод десятичного числа 316 в восьмеричную систему счисления, в ответ запишите только число, без степени.",
                description: `

                `,
                type: "text-input",
                correctAnswer: "474",
                userAnswer: ""
            },
            {
                id: 9,
                question: "Выполни перевод десятичного числа 688 в шестнадцатеричную систему счисления, буквы в ответе нужно писать с английской раскладки клавиатуры",
                description: `

                `,
                type: "text-input",
                correctAnswer: "2B0",
                userAnswer: ""
            },
            {
                id: 10,
                question: "В системе счисления с некоторым основанием десятичное число 13 записывается в виде 111. Выберите это основание.",
                type: "radio",
                options: [
                    { text: "3", correct: true },
                    { text: "-4", correct: false },
                    { text: "5", correct: false },
                    { text: "9", correct: false }
                ],
                userAnswer: ""
            },
            {
                id: 11,
                question: "Декодируй сообщение, принимая во внимание то, что в качестве ключа используется расположение букв на клавиатуре твоего компьютера. Сообщение: rjvgm.nthysq dbhec. <br>В ответе укажи раскодированное сообщение с маленькой буквы без знаков препинания.",
                description: `

                `,
                type: "text-input",
                correctAnswer: "компьютерный вирус",
                userAnswer: ""
            },
            {
                id: 12,
                question: "Дополни развёрнутую запись числа 1256,52₈",
                type: "expanded-form-match",
                expression: "1256,52₈ = 1×8³ + 2×8² + 5×8¹ + 6×□ + 5×8⁻¹ + □×8⁻²",
                parts: [
                    { position: "first", correct: "0", userAnswer: "" },  // Для 6×□
                    { position: "second", correct: "2", userAnswer: "" }   // Для □×8⁻²
                ],
                dragItems: ["0", "-1", "2", "3", "8"],
                userAnswers: {}
            },
            {
                id: 13,
                question: "Дана развёрнутая запись числа. Напиши свёрнутую запись числа и основание системы счисления",
                type: "expanded-to-compact",
                expression: "1×16² + 2×16¹ + 12×16⁰ + 13×16⁻¹ + 10×16⁻²",
                correctNumber: "300",
                correctBase: "16",
                userAnswers: {
                    number: "",
                    base: ""
                },
                description: `

                `
            },
            {
                id: 14,
                question: "Выберите результат вычетания двух римских чисел: DXLVI - CCCLXVII",
                type: "radio",
                options: [
                    { text: "VI", correct: false },
                    { text: "CLXXIX", correct: true },
                    { text: "113", correct: false },
                    { text: "CCCXXI", correct: false }
                ],
                userAnswer: "",
            },
            {
                id: 15,
                question: "Какое из неравенств выполняется для чисел A=227<sub>8</sub>, B=73<sub>16</sub> и C=2112<sub>4</sub>?",
                type: "inequality-choice",
                options: [
                    { text: "A = B = C", correct: false },
                    { text: "A > B > C", correct: false },
                    { text: "A > C > B", correct: true },
                    { text: "B < A < C", correct: false }
                ],
                explanation: `

                `,
                userAnswer: null
            },
            {
                id: 16,
                question: "Дано выражение: 2<sup>320</sup> + 2<sup>226</sup> + 4<sup>28</sup> - 6 <br>Найди его значение, если его записали в двоичной системе счисления. Сколько единиц в записи этого числа?",
                type: "text-input",
                correctAnswer: "5",
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
                        <option value="1">1</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="3">3</option>
                        <option value="10">10</option>
                        <option value="Не встречается">Не встречается</option>
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
                            <option value="переводом">переводом</option>
                            <option value="передачей">передачей</option>
                            <option value="корректором">корректором</option>
                            <option value="кодом">кодом</option>
                            <option value="дешифрованием">дешифрованием</option>
                        </select>
                    </div>
                `;
            });
    } else if (task.type === "select3") {
            task.options.forEach((option, index) => {
                taskContainer.innerHTML += `
                    <div>
                        <p>${option.text}</p>
                        <select id="answer-${index}">
                            <option value="">Выберите ответ</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="3">3</option>
                            <option value="10">10</option>
                            <option value="Не встречается">Не встречается</option>
                        </select>
                    </div>
                `;
            });
    } else if (task.type === "select4") {
            task.options.forEach((option, index) => {
                taskContainer.innerHTML += `
                    <div>
                        <p>${option.text}</p>
                        <select id="answer-${index}">
                            <option value="">Выберите ответ</option>
                            <option value="&#lt;">&#lt</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="3">3</option>
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
    else if (task.type === "digit-place-match") {
        taskContainer.innerHTML += `
            <div class="number-display">Число: ${task.number}</div>
            <table class="digit-place-table">
                <tr class="places-row">
                    ${task.digits.map((digit, index) => 
                        `<td class="place-drop" data-digit="${digit}" data-index="${index}">
                            ${task.userAnswers[index] || " "}
                        </td>`
                    ).join('')}
                </tr>
                <tr class="digits-row">
                    ${task.digits.map(digit => `<td>${digit}</td>`).join('')}
                </tr>
            </table>
            <div class="drag-items-container">
                ${task.dragItems.map(item => `
                    <div class="drag-place" draggable="true">${item}</div>
                `).join('')}
            </div>
        `;
        
        initDigitPlaceDrag();
    }
    else if (task.type === "expanded-form-match") {
        // Разбиваем выражение на части, чтобы вставить поля для ответов
        const exprParts = task.expression.split('□');
        
        taskContainer.innerHTML = `
            <h3>Задание ${task.id}: ${task.question}</h3>
            <div class="expression-container">
                <div class="expression-formula">
                    ${exprParts[0]}
                    <span class="formula-drop" data-part="first">□</span>
                    ${exprParts[1]}
                    <span class="formula-drop" data-part="second">□</span>
                    ${exprParts[2]}
                </div>
                <div class="drag-items-container">
                    ${task.dragItems.map(item => `
                        <div class="drag-option" draggable="true">${item}</div>
                    `).join('')}
                </div>
            </div>
        `;
        
        initFormulaDrag();
    }
    else if (task.type === "expanded-to-compact") {
        taskContainer.innerHTML += `
            <div class="expanded-expression">
                <p>${task.expression}</p>
            </div>
            ${task.description || ''}
            <div class="answer-fields">
                <div class="answer-field">
                    <label>Число:</label>
                    <input type="text" id="number-answer" 
                           placeholder="Введите число" 
                           value="${task.userAnswers.number}">
                </div>
                <div class="answer-field">
                    <label>Основание системы счисления:</label>
                    <input type="text" id="base-answer" 
                           placeholder="Введите основание" 
                           value="${task.userAnswers.base}">
                </div>
            </div>
            <button class="check-conversion">Ответить</button>
        `;
    
        document.querySelector('.check-conversion').addEventListener('click', checkTask);
    }
    else if (task.type === "inequality-choice") {
        taskContainer.innerHTML += `
            <div class="inequality-task">
                <p>Даны числа: A = 440₅, B = 100010011₂, C = 2034₅</p>
                <div class="inequality-options">
                    ${task.options.map((option, index) => `
                        <label class="inequality-option">
                            <input type="radio" name="inequality" value="${index}" 
                                   ${task.userAnswer === index ? 'checked' : ''}>
                            ${option.text}
                        </label>
                    `).join('')}
                </div>
                ${task.explanation || ''}
            </div>
        `;
    
        // Обработчик выбора
        const radios = document.querySelectorAll('.inequality-option input');
        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                task.userAnswer = parseInt(this.value);
            });
        });
    }
}


function initFormulaDrag() {
    const dragItems = document.querySelectorAll('.drag-option');
    const dropZones = document.querySelectorAll('.formula-drop');

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
            
            const value = e.dataTransfer.getData('text/plain');
            const part = this.dataset.part;
            
            this.textContent = value;
            task.userAnswers[part] = value;
        });
    });
}


function initExponentDrag() {
    const dragItems = document.querySelectorAll('.drag-exponent');
    const dropZones = document.querySelectorAll('.exponent-drop');

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
            
            const exponent = e.dataTransfer.getData('text/plain');
            const partIndex = this.dataset.part;
            
            this.textContent = exponent;
            task.userAnswers[partIndex] = exponent;
        });
    });
}


function initDigitPlaceDrag() {
    const dragItems = document.querySelectorAll('.drag-place');
    const dropZones = document.querySelectorAll('.place-drop');

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
            
            const placeValue = e.dataTransfer.getData('text/plain');
            const digitIndex = this.dataset.index;
            
            this.textContent = placeValue;
            task.userAnswers[digitIndex] = placeValue;
        });
    });
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

    } else if (task.type === "select3") {
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


    } else if (task.type === "select1") {
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
    else if (task.type === "digit-place-match") {
        let allCorrect = true;
        const dropZones = document.querySelectorAll('.place-drop');
    
        dropZones.forEach(zone => {
            const digitIndex = zone.dataset.index;
            const digit = zone.dataset.digit;
            const userAnswer = task.userAnswers[digitIndex];
            const correctPlace = task.places[digit][1]; // Берем второй элемент из массива (разряд)
    
            if (digit === ",") {
                zone.style.backgroundColor = ''; // Запятая не проверяется
                return;
            }
    
            if (userAnswer === correctPlace) {
                zone.style.backgroundColor = '#e8f5e9'; // Зеленый для правильного
            } else {
                zone.style.backgroundColor = '#ffebee'; // Красный для неправильного
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
    else if (task.type === "expanded-form-match") {
        let allCorrect = true;
        const dropZones = document.querySelectorAll('.exponent-drop');
    
        dropZones.forEach(zone => {
            const partIndex = zone.dataset.part;
            const userAnswer = task.userAnswers[partIndex];
            const correctAnswer = task.parts[partIndex].correctExponent;
    
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
    else if (task.type === "expanded-form-match") {
        let allCorrect = true;
        const dropZones = document.querySelectorAll('.formula-drop');
    
        dropZones.forEach(zone => {
            const part = zone.dataset.part;
            const correctAnswer = task.parts.find(p => p.position === part).correct;
            const userAnswer = task.userAnswers[part];
    
            if (userAnswer === correctAnswer) {
                zone.style.backgroundColor = '#e8f5e9';
                zone.style.color = '#2e7d32';
            } else {
                zone.style.backgroundColor = '#ffebee';
                zone.style.color = '#c62828';
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
    else if (task.type === "expanded-to-compact") {
        const numberInput = document.getElementById('number-answer');
        const baseInput = document.getElementById('base-answer');
        
        task.userAnswers.number = numberInput.value.trim().toUpperCase();
        task.userAnswers.base = baseInput.value.trim();
        
        const isNumberCorrect = task.userAnswers.number === task.correctNumber;
        const isBaseCorrect = task.userAnswers.base === task.correctBase;
        
        if (isNumberCorrect) {
            numberInput.style.border = "1px solid #4CAF50";
        } else {
            numberInput.style.border = "1px solid #F44336";
        }
        
        if (isBaseCorrect) {
            baseInput.style.border = "1px solid #4CAF50";
        } else {
            baseInput.style.border = "1px solid #F44336";
        }
        
        if (isNumberCorrect && isBaseCorrect) {
            taskContainer.classList.add('correct');
            taskContainer.classList.remove('incorrect');
        } else {
            taskContainer.classList.add('incorrect');
            taskContainer.classList.remove('correct');
        }
    }
    else if (task.type === "inequality-choice") {
        if (task.userAnswer === null) {
            alert("Выберите ответ!");
            return;
        }
    
        const selectedOption = task.options[task.userAnswer];
        const optionElements = document.querySelectorAll('.inequality-option');
        
        optionElements.forEach((element, index) => {
            const label = element;
            if (task.options[index].correct) {
                label.style.color = "#2e7d32";
                label.style.fontWeight = "bold";
            } else if (index === task.userAnswer) {
                label.style.color = "#c62828";
            }
        });
    
        if (selectedOption.correct) {
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
        window.location.href = `task1.4.html?topic=${topicId}&task=${taskId - 1}`;
    }
});

nextButton.addEventListener('click', () => {
    if (taskId < topic.tasks.length) {
        window.location.href = `task1.4.html?topic=${topicId}&task=${taskId + 1}`;
    }
});

// Проверка ответа
checkAnswerButton.addEventListener('click', checkTask);

// Скачивание результатов
document.getElementById('download-results').addEventListener('click', () => {
    let textContent = `Результаты выполнения заданий по теме "${topic.name}":\n\n`;
    
    // Статистика по ответам
    let correctCount = 0;
    let totalTasks = topic.tasks.length;
    
    topic.tasks.forEach(t => {
        textContent += `Задание ${t.id}: ${t.question}\n`;
        
        // Обработка разных типов заданий
        if (t.type === "checkbox-grid" || t.type === "checkbox-multiple") {
            let taskCorrect = true;
            textContent += `- Выбранные варианты:\n`;
            
            t.options.forEach((option, index) => {
                const isSelected = Array.isArray(t.userAnswers) ? 
                    t.userAnswers.includes(index) : 
                    false;
                const isCorrect = option.correct === isSelected;
                const status = isCorrect ? "✓" : "✗";
                
                textContent += `  [${isSelected ? "X" : " "}] ${option.text} ${status}\n`;
                
                if (!isCorrect) taskCorrect = false;
            });
            
            if (taskCorrect && Array.isArray(t.userAnswers) && t.userAnswers.length > 0) {
                correctCount++;
            }
            
        } else if (t.type === "radio") {
            const userAnswer = t.userAnswer || "";
            const isCorrect = userAnswer === t.options.find(opt => opt.correct)?.text;
            const status = isCorrect ? "✓" : userAnswer ? "✗" : "Нет ответа";
            
            textContent += `- Ваш ответ: ${userAnswer || "Нет ответа"} ${status}\n`;
            if (isCorrect) correctCount++;
            
        } else if (t.type === "text-input") {
            const userAnswer = t.userAnswer || "";
            const isCorrect = userAnswer === t.correctAnswer;
            const status = isCorrect ? "✓" : userAnswer ? "✗" : "Нет ответа";
            
            textContent += `- Ваш ответ: ${userAnswer} ${status}`;
            if (isCorrect) {
                correctCount++;
            }
            textContent += `\n`;
            
        } else if (t.type === "fill-in-blank") {
            const userAnswer = t.userAnswer || "";
            const isCorrect = t.alternatives ? 
                t.alternatives.some(alt => alt.toLowerCase() === userAnswer.toLowerCase()) : 
                userAnswer.toLowerCase() === t.correctAnswer.toLowerCase();
            const status = isCorrect ? "✓" : userAnswer ? "✗" : "Нет ответа";
            
            textContent += `- Ваш ответ: ${userAnswer} ${status}`;
            if (isCorrect) {
                correctCount++;
            }
            textContent += `\n`;
            
        } else if (t.type === "drag-match-table") {
            let taskCorrect = true;
            textContent += `- Соответствия:\n`;
            
            if (t.userAnswers && typeof t.userAnswers === 'object') {
                Object.entries(t.userAnswers).forEach(([rowId, userAnswer]) => {
                    const correctAnswer = t.table.rows.find(r => r.id == rowId)?.correct;
                    const isCorrect = userAnswer === correctAnswer;
                    const status = isCorrect ? "✓" : "✗";
                    
                    textContent += `  ${rowId}: ${userAnswer || "Нет ответа"} ${status}\n`;
                    
                    if (!isCorrect) taskCorrect = false;
                });
            }
            
            if (taskCorrect) correctCount++;
            
        } else if (t.type === "drag-drop-table") {
            let taskCorrect = true;
            textContent += `- Заполненная таблица:\n`;
            
            if (Array.isArray(t.userAnswers)) {
                t.userAnswers.forEach((row, i) => {
                    const correctRow = t.table.correctRows[i];
                    const isCorrect = row && correctRow && 
                                     row[0] === correctRow[0] && 
                                     row[1] === correctRow[1];
                    const status = isCorrect ? "✓" : "✗";
                    
                    textContent += `  Строка ${i+1}: ${row[0] || "Пусто"} | ${row[1] || "Пусто"} ${status}\n`;
                    
                    if (!isCorrect) taskCorrect = false;
                });
            }
            
            if (taskCorrect) correctCount++;
            
        } else if (t.type === "expanded-to-compact") {
            const userNumber = t.userAnswers?.number || "";
            const userBase = t.userAnswers?.base || "";
            const isNumberCorrect = userNumber === t.correctNumber;
            const isBaseCorrect = userBase === t.correctBase;
            const isCorrect = isNumberCorrect && isBaseCorrect;
            
            textContent += `- Ваш ответ: ${userNumber || "Нет ответа"} (основание: ${userBase || "Нет ответа"}) ${isCorrect ? "✓" : "✗"}\n`;
            if (isCorrect) correctCount++;
            
        } else if (t.type === "digit-place-match") {
            let taskCorrect = true;
            textContent += `- Разряды:\n`;
            
            if (t.userAnswers && typeof t.userAnswers === 'object') {
                Object.entries(t.userAnswers).forEach(([digitIndex, userAnswer]) => {
                    const digit = t.digits[digitIndex];
                    const correctPlace = t.places[digit]?.[1];
                    const isCorrect = userAnswer === correctPlace;
                    const status = isCorrect ? "✓" : "✗";
                    
                    textContent += `  Цифра ${digit}: разряд ${userAnswer || "Не указан"} ${status}\n`;
                    
                    if (!isCorrect) taskCorrect = false;
                });
            }
            
            if (taskCorrect) correctCount++;
        } else if (t.type === "inequality-choice") {
            const userAnswer = t.userAnswer !== null && t.userAnswer !== undefined ? 
                t.options[t.userAnswer]?.text : "Нет ответа";
            const isCorrect = t.userAnswer !== null && t.options[t.userAnswer]?.correct;
            const status = isCorrect ? "✓" : "✗";
            
            textContent += `- Ваш выбор: ${userAnswer} ${status}\n`;
            if (isCorrect) correctCount++;
        }
        
        // Добавляем пустую строку между заданиями
        textContent += "\n";
    });

    // Добавляем статистику
    const completionPercentage = totalTasks > 0 
        ? Math.round((correctCount / totalTasks) * 100) 
        : 0;
    
    textContent += `\nИтоговая статистика:\n`;
    textContent += `- Правильных ответов: ${correctCount} из ${totalTasks}\n`;
    textContent += `- Процент выполнения: ${completionPercentage}%\n`;
    textContent += `- Дата: ${new Date().toLocaleString()}\n`;

    // Создаем и скачиваем файл
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    const filename = `Результаты_${topic.name.replace(/[^а-яА-Я0-9]/g, '_')}_${new Date().toISOString().slice(0,10)}.txt`;
    
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.style.display = 'none';
    
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
    } else if (task.type === "select3") {
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
    else if (task.type === "digit-place-match") {
        const dropZones = document.querySelectorAll('.place-drop');
        
        dropZones.forEach(zone => {
            zone.textContent = " ";
            zone.style.backgroundColor = '';
        });
        
        task.userAnswers = {};
        taskContainer.classList.remove('correct', 'incorrect');
    }
    else if (task.type === "expanded-form-match") {
        const dropZones = document.querySelectorAll('.exponent-drop');
        
        dropZones.forEach(zone => {
            zone.textContent = "□";
            zone.style.backgroundColor = '';
        });
        
        task.userAnswers = {};
        taskContainer.classList.remove('correct', 'incorrect');
    }
    else if (task.type === "expanded-form-match") {
        const dropZones = document.querySelectorAll('.formula-drop');
        
        dropZones.forEach(zone => {
            zone.textContent = "□";
            zone.style.backgroundColor = '';
            zone.style.color = '';
        });
        
        task.userAnswers = {};
        taskContainer.classList.remove('correct', 'incorrect');
    }
    else if (task.type === "expanded-to-compact") {
        const numberInput = document.getElementById('number-answer');
        const baseInput = document.getElementById('base-answer');
        
        numberInput.value = "";
        baseInput.value = "";
        numberInput.style.border = "";
        baseInput.style.border = "";
        
        task.userAnswers = { number: "", base: "" };
        taskContainer.classList.remove('correct', 'incorrect');
    }
    else if (task.type === "inequality-choice") {
        const radios = document.querySelectorAll('.inequality-option input');
        const labels = document.querySelectorAll('.inequality-option');
        
        radios.forEach(radio => {
            radio.checked = false;
        });
        
        labels.forEach(label => {
            label.style.color = "";
            label.style.fontWeight = "";
        });
        
        task.userAnswer = null;
        taskContainer.classList.remove('correct', 'incorrect');
    }


    taskContainer.classList.remove('correct', 'incorrect');
}

// Обработчик для кнопки "Очистить ответы"
clearAnswersButton.addEventListener('click', clearAnswers);

document.getElementById('back-to-list').addEventListener('click', () => {
    window.location.href = '1.4.html';
});
// Инициализация
renderTask();