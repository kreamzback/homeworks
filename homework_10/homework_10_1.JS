"use strict"

const data = {
  instagram: [
    {
      source: 'instagram',
      text: 'Ваш пост хтось лайкнув',
      date: '03-09-2024'
    },
    {
      source: 'instagram',
      text: 'Під вашим постом оставили коментар',
      date: '05-09-2024'
    }
  ],
  youtube: [
    {
      source: 'youtube',
      text: 'Вийшло нове відео',
      date: '04-09-2024'
    }
  ],
  telegram: [
    {
      source: 'telegram',
      text: 'Вам відправили повідомлення',
      date: '04-09-2024'
    }
  ],
};



data[Symbol.iterator] = function () {
  let elementsArr = [];
  for (const entries in this) {
    this[entries].forEach((elem) => {
      elementsArr.push(elem);
    });
  };
  
  let i = 0; 
  return {
    next() {
      if (i < elementsArr.length) {
        return { value: elementsArr[i++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
};

for (const elements of data ) {
  console.log(elements);
}





