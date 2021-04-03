// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = 'Xing';

// Here you can change your greetings
const gree1 = '去睡觉吧！';
const gree2 = '早安。';
const gree3 = '下午好。';
const gree4 = '晚上好。';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
