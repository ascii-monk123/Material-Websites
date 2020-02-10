//dom elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

//SHOWAMPM
const showAmPm = true;
//add zeros
const addZeros = num => {
  return (parseInt(num, 10) < 10 ? '0' : '') + num;
};

//show time function
const showTime = () => {
  let today = new Date(),
    hours = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds();
  //set am or pm
  const amPm = hours >= 12 ? 'PM' : 'AM';
  //12 hr format
  hours = hours % 12 || 12;
  //output the time
  time.innerHTML = `${addZeros(hours)}<span>:</span>${addZeros(
    minute
  )}<span>:</span>${addZeros(second)} ${showAmPm === true ? amPm : ''}`;
  setTimeout(() => {
    showTime();
  }, 1000);
};
//Set background and greeting

const setBgGreet = () => {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12 && hour > 4) {
    //morning
    document.body.style.backgroundImage = `linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.6),
      rgb(0, 0, 0, 0.3)
    ), url('../img/morning.png')`;
    greeting.textContent = 'Good Morning';
  } else if (hour < 18 && hour > 4) {
    //afternoon
    document.body.style.backgroundImage = `linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.6),
      rgb(0, 0, 0, 0.3)
      ),
    url('../img/day.jpg')`;
    greeting.textContent = 'Good Afternoon';
  } else if (hour < 20 && hour > 4) {
    //evening
    document.body.style.backgroundImage = `linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.6),
      rgb(0, 0, 0, 0.3)
      ),
    url('../img/evening.jpg')`;
    greeting.textContent = 'Good Evening';
  } else {
    //night
    document.body.style.backgroundImage = `linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.6),
      rgb(0, 0, 0, 0.3)
      ),
    url('../img/night.png')`;
    greeting.textContent = 'Good Night';
  }
};

//get name
const getName = () => {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
};
//set name
const setName = e => {
  if (e.type === 'keypress') {
    //make sure enter is pressed
    if (e.keyCode == 13) {
      e.preventDefault();
      localStorage.setItem('name', e.target.innerText);
      name.blur(); //blurs the cursor from the text area
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
};

//set focus
const setFocus = e => {
  if (e.type === 'keypress') {
    //make sure enter is pressed
    if (e.keyCode == 13) {
      e.preventDefault();
      localStorage.setItem('focus', e.target.innerText);
      focus.blur(); //blurs the cursor from the text area
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
};

//get focus
const getFocus = () => {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
};

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName); //as soon as we click somwhere else then the text area

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus); //as soon as we click somwhere else then the text area

//run showtime
showTime();
setBgGreet();
getName();
getFocus();
