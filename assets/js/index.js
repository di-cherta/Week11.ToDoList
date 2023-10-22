const addText = document.getElementById('text');
const button = document.getElementById('btn');
const content = document.getElementById('content');

function createTask(){
    const list = document.createElement('li');
    list.textContent = addText.value;
    content.append(list);
    addText.value = '';
}

content.addEventListener('click', function(checkTask) {
    if (checkTask.target.tagName === 'LI') {
        checkTask.target.classList.toggle('nonactive');
    }
});

document.addEventListener('keypress', function(evt){
    if (evt.key === 'Enter')
    createTask()
});

