// Данные тем и заданий
const topics = [
    {
        id: 1,
        name: "Устройство компьютера, 12 заданий",
        tasks: [
            {
                id: 1,
                question: "Что означает аббревиатура HTML?",
                type: "text",
                correctAnswer: "HyperText Markup Language",
                userAnswer: ""
            },
            {
                id: 2,
                question: "Выберите правильные теги:",
                type: "multiple-choice",
                options: ["<div>", "<span>", "<header>", "<footer>"],
                correctAnswers: ["<div>", "<span>"],
                userAnswers: []
            }
        ]
    }
    
];

// Получаем элемент для списка сущ. тем
const topicsList = document.getElementById('topics-list');

// Создаем ссылки на темы
if (topicsList) {
    topics.forEach(topic => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `task1.3.html?topic=${topic.id}&task=1`; // Ссылка на первое задание темы
        link.textContent = topic.name;
        li.appendChild(link);
        topicsList.appendChild(li);
    });
}