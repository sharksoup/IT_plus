const materials = [
    {
        id: 1,
        name: "Информация и данные"
    }
]
const topic = material.find(t => t.id === materialId);




const materialsList = document.getElementById('materials-list');

if (materialsList) {
    materials.forEach(material => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `task.html?topic=${topic.id}&task=1`; // Ссылка на первое задание темы
        link.textContent = topic.name;
        li.appendChild(link);
        topicsList.appendChild(li);
    });
}