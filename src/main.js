// console.log('Hello World from main.js')

// let messageWelcome = 'Hello World from Emilie'

// document.getElementsByClassName('welcome')[0].innerText = messageWelcome;

// let madate = new Date().getFullYear();

// document.getElementsByClassName('date')[0].innerText = 'Copyright © ' + madate + ' - Tous droits réservés par ' + messageWelcome;



import { renderTimeLine } from '../src/services/timelineService.js';

document.addEventListener('DOMContentLoaded', () => {
    renderTimeLine('#timeline');
  });

