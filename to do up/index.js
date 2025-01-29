const addbutton = document.querySelector('#addtask');
const no = document.querySelector('#no');
 const tasklist = document.querySelector('#tasklist');
addbutton.addEventListener('click', (e) => {
    e.preventDefault();
    const taskinput = document.querySelector('#taskinput');

    
   if (taskinput.value !== '') {

    const task = document.createElement('li');
    const taskname = document.createElement('span');
    const deletebutton = document.createElement('button');

     taskname.textContent = taskinput.value;
    taskinput.value = '';
    deletebutton.textContent = 'ochiru';

    task.classList.add('task');

    task.appendChild(taskname);
    task.appendChild(deletebutton);
    tasklist.appendChild(task);
    
    deletebutton.addEventListener('click', () => {
        task.remove();
    })
   }
   
    
});

const searchbutton = document.querySelector('#searchbutton');
searchbutton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchinput = document.querySelector('#searchinput');
    
    const tasks = document.querySelectorAll('.task');
    
    tasks.forEach((task) => {
        const taskname = task.querySelector('span').textContent;
        
        if (!taskname.toLowerCase().includes(searchinput.value)) {
            task.style.display = 'none';
        } else {
            task.style.display = 'flex';
        }
    });

   
});