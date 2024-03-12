const skillListCopy = document.body.querySelector('.skill').cloneNode(true);

const skillListOG = document.body.querySelector('.skills-list');

skillListCopy.classList.add('skill');

skillListOG.append(skillListCopy);
