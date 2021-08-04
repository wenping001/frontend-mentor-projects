const checkBtn = document.querySelector('.app__input--default');

const todoCheck = document.querySelector('.app__todolist--default');

const toggle = document.querySelector('.app__toggle');

const input = document.getElementById('input');

const todolist = document.getElementById('todolist');

const todoItems = document.querySelectorAll('.todoItem');
const check = document.getElementById('check');

const checkImage = document.querySelector('.checkImage');

var deleteBtns = document.querySelectorAll('.deleteBtn');
const dark_background = `url("images/bg-desktop-dark.jpg")`;
const light_background = `url("images/bg-desktop-light.jpg")`;

const baseURL = window.location.origin;
const moon = `${baseURL}/images/icon-moon.svg`;
const sun = `${baseURL}/images/icon-sun.svg`;
const todolistNumber = todolist.children.length;
const body = document.getElementsByTagName('body')[0];

checkBtn.addEventListener('click', () => {
  if (input.value === '') {
    alert('来个计划吧!');
    return;
  }
  const plan = input.value;
  const listItem = document.createElement('li');
  listItem.classList.add('border-bottom-1');
  const div = document.createElement('div');
  div.classList.add('app__todolist--default');
  div.classList.add('b-1');
  const imgcheck = document.createElement('img');
  imgcheck.src = './images/icon-check.svg';
  imgcheck.classList.add('checkImage');
  const span = document.createElement('span');
  const imgcross = document.createElement('img');
  span.innerHTML = plan;
  div.appendChild(imgcheck);
  imgcross.src = './images/icon-cross.svg';
  imgcross.classList.add('deleteBtn');
  listItem.appendChild(div);
  listItem.appendChild(span);
  listItem.appendChild(imgcross);
  todolist.appendChild(listItem);

  deleteBtns = document.querySelectorAll('.deleteBtn');
  console.log(deleteBtns);
  input.value = '';

  itemNumber = todolist.children.length;
  console.log(itemNumber);
});

todoItems.forEach((item) => {
  // item.addEventListener('mouseover', () => {
  //   todoCheck.classList.toggle('b-1');
  //   item.addEventListener('mouseout', () => {
  //     todoCheck.classList.toggle('b-1');
  //   });
  // });
});

// handle
toggle.addEventListener('click', () => {
  toggle.src = toggle.src === moon ? sun : moon;
  if (body.style.backgroundImage === dark_background) {
    body.style.backgroundImage = light_background;
    document.body.style.backgroundColor = 'hsl(0,0%,98%)';
    input.style.backgroundColor = 'hsl(0,0%,98%)';
    todolist.style.backgroundColor = 'hsl(0,0%,98%)';
    todolist.style.color = 'black';
    checkBtn.style.color = 'black';
  } else {
    body.style.backgroundImage = dark_background;
    document.body.style.backgroundColor = 'hsl(235,21%,11%)';
    input.style.backgroundColor = 'hsl(235,24%,19%)';
    input.style.color = 'hsl(235,39%,85%)';
    todolist.style.backgroundColor = 'hsl(235,24%,19%)';
    todolist.style.color = 'hsl(235,39%,85%)';
    checkBtn.style.color = 'white';
    checkImage.style.opacity = 0;
    todoCheck.classList.toggle('');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 600) {
    body.style.backgroundImage =
      toggle.src === moon ? dark_background : light_background;
  } else {
    body.style.backgroundImage =
      toggle.src === sun ? light_background : dark_background;
  }
});

//  handle delete button
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('deleteBtn')) {
    const parent = e.target.parentElement;
    parent.remove();
  }
  itemNumber = todolist.children.length;
  console.log(itemNumber);
});
