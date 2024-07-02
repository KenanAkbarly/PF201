// class TextStyler {
//   constructor(element) {
//     this.element = element;
//     this.defaultStyles = element.style.cssText; // Store the initial styles
//   }

//   toggleStyle(styleName) {
//     if (styleName === 'italic') {
//       this.element.style.fontStyle = this.element.style.fontStyle === 'italic' ? 'normal' : 'italic';
//     } else if (styleName === 'bold') {
//       this.element.style.fontWeight = this.element.style.fontWeight === 'bold' ? 'normal' : 'bold';
//     }
//   }

//   setColor() {
//     const color = prompt('Enter the color:');
//     if (color) {
//       this.element.style.color = color;
//     }
//   }

//   setBackgroundColor() {
//     const backgroundColor = prompt('Enter the background color:');
//     if (backgroundColor) {
//       this.element.style.backgroundColor = backgroundColor;
//     }
//   }

//   resetStyles() {
//     this.element.style.cssText = this.defaultStyles; // Reset to initial styles
//   }

//   setCustomStyle() {
//     const property = prompt('Enter the CSS property:');
//     const value = prompt(`Enter the value for ${property}:`);
//     if (property && value) {
//       this.element.style[property] = value;
//     }
//   }
// }

// // Init the styler when the script is loaded
// const textElement = document.querySelector('.container p');
// const styler = new TextStyler(textElement);

// document.querySelectorAll('.btns button').forEach(button => {
//   button.addEventListener('click', () => {
//     const action = button.textContent.trim().toLowerCase();
//     if (action === 'italic' || action === 'bold') {
//       styler.toggleStyle(action);
//     } else if (action === 'color') {
//       styler.setColor();
//     } else if (action === 'background') {
//       styler.setBackgroundColor();
//     } else if (action === 'reset') {
//       styler.resetStyles();
//     } else if (action === 'custom') {
//       styler.setCustomStyle();
//     } else {
//       console.log('Unknown action:', action);
//     }
//   });
// });

// class StyleText{
//   constructor(element){
//     this.element = element;
//     this.defaultStyle = this.element.style.cssText 
//   }
//   toggleStyle(styleName){
//     if(styleName === 'italic'){
//       this.element.style.fontStyle = this.element.style.fontStyle === 'italic' ? 'normal' :'italic'; 
//     }else if(styleName === 'bold'){
//       this.element.style.fontWeight = this.element.style.fontStyle === 'bold' ? 'normal' :'bold'; 


//     }
//   }
//   setColor(){
//     const color = prompt('Enter color value:')
//     if(color){
//       this.element.style.color = color;
//     }
//   }
//   setBgColor(){
//     const bgColor = prompt('Enter background color value:')
//     if(bgColor){
//       this.element.style.backgroundColor = bgColor;
//     }
//   }
//   resetAllStyle(){
//     this.element.style.cssText = this.defaultStyle
//   }

//   customStyleAll(){
//     const property = prompt('Enter style value:');
//     const value = prompt(`Enter the value for ${property} value:`);
//     if(property && value){
//       this.element.style[property] = value
//     }
//   }
// }

// const element = document.querySelector('.container p')

// const style = new StyleText(element)

// document.querySelectorAll('.btns button').forEach(button=>{
//   button.addEventListener('click',()=>{
//     const event = button.textContent.trim().toLowerCase()
//     if(event === 'italic' || event === 'bold'){
//       style.toggleStyle(event)
//     }
//     else if (event === 'color'){
//       style.setColor()
//     }
//     else if (event === 'background'){
//           style.setBgColor()
//         }
//         else if (event ==='reset'){
//           style.resetAllStyle()
//         }
//         else if (event === 'custom'){
//           style.customStyleAll()
//         }
//         else{
//           alert('unknown event')
//         }
//   })
// })



// Function to create a new task object
// let tasks = [];
// function createTask(text, color) {
//   return {
//     text: text,
//     color: color || 'black',
//     completed: false
//   };
// }

// // Function to add a task to the list
// function addTask() {
//   const taskInput = document.getElementById('taskInput');
//   const colorSelector = document.getElementById('colorSelector');
//   const taskText = taskInput.value.trim();
//   const selectedColor = colorSelector.value;
  
//   if (taskText !== '') {
//     const task = createTask(taskText, selectedColor);
//     tasks.push(task);
//     renderTasks();
//     taskInput.value = '';
//     taskInput.focus();
//   } else {
//     alert('Please enter a task.');
//   }
// }

// // Function to delete a task from the list
// function deleteTask(index) {
//   tasks.splice(index, 1);
//   renderTasks();
// }

// // Function to toggle task completion
// // Function to toggle task completion
// function toggleComplete(index) {
//   tasks[index].completed = !tasks[index].completed;
//   renderTasks();
// }


// // Function to edit a task in the list
// function editTask(index) {
//   const newText = prompt('Enter new text:', tasks[index].text);
//   if (newText !== null) {
//     tasks[index].text = newText;
//     renderTasks();
//   }
// }

// // Function to render tasks to the DOM
// function renderTasks() {
//   const taskList = document.getElementById('taskList');
//   taskList.innerHTML = '';

//   tasks.forEach((task, index) => {
//     const li = document.createElement('li');
//     li.className = 'task-item';
//     if (task.completed) {
//       li.classList.add('complete');
//     }
//     li.innerHTML = `
//       <span  style="color: ${task.color};">${task.text}</span>
//       <div class="actions">
//         <button onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
//         <button onclick="editTask(${index})">Edit</button>
//         <button onclick="deleteTask(${index})">Delete</button>
//       </div>
//     `;
//     taskList.appendChild(li);
//   });
// }


// // Initial render of tasks
// renderTasks();


let tasks = [];

function createTask(text,color){
  return{
    text:text,
    color:color || 'black',
    complated: false
  }
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const colorSelector = document.getElementById('colorSelector');
  const taskText = taskInput.value.trim();
  const selectedColor = colorSelector.value;
  
  if (taskText !== '') {
    const task = createTask(taskText, selectedColor);
    tasks.push(task);
    renderTask();
    taskInput.value = '';
    taskInput.focus();
  } else {
    alert('Please enter a task.');
  }
}

function complatedTask(index){
  tasks[index].completed = !tasks[index].completed;
  renderTask();
}

function deleteTask(index){
  tasks.splice(index,1)
  renderTask()
}

function editTasks(index){
  const newText = prompt('Enter a task',tasks[index].text)
  if(newText !== null){
    tasks[index].text = newText;
    renderTask();
  
}
}

function renderTask(){
   const taskList = document.getElementById('taskList')
   taskList.innerHTML = ''
   tasks.forEach((task,index)=>{
    const li = document.createElement('li')
    li.className = 'task-item'
    if (task.completed) {
      li.classList.add('complete')
    }
    li.innerHTML = `
    <span  style ='color:${task.color}'>${task.text}</span>
      <div class="actions">
      <button onclick="complatedTask(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
        <button onClick="editTasks(${index})">Edit</button>
        <button onClick="deleteTask(${index})">Delete</button>
      </div>
      `;
      taskList.appendChild(li)
   })
}

renderTask()