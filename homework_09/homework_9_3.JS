function groupBy(array, key) {
  return array.reduce((result, currentItem) => {
      const groupKey = currentItem[key];

      if (!result[groupKey]) {
          result[groupKey] = []; 
      }

      result[groupKey].push(currentItem);

      return result;
  }, {});
};

const data = [
  {source: "instagram", text: "Ваш пост хтось лайкнув", date: "03-09-2024"},
  {source: "youtube", text: "Вийшло нове відео", date: "04-09-2024"},
  {source: "telegram", text: "Вам відправили повідомлення", date: "04-09-2024"},
  {source: "instagram", text: "Під вашим постом оставили коментар", date: "05-09-2024"},
];


const groupedData = groupBy(data, 'source');

console.log(groupedData);
