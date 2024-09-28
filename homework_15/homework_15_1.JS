class TodoItem {
  constructor(content) {
      if (!content.trim()) {
          throw new Error("Note content cannot be empty");
      }
      this.content = content;
      this.isDone = false;
      this.createdAt = new Date();
      this.updatedAt = null;
  }

  markDone() {
      this.isDone = true;
      this.updatedAt = new Date();
  }

  edit(newContent) {
      if (!newContent.trim()) {
          throw new Error("New note content cannot be empty");
      }
      this.content = newContent;
      this.updatedAt = new Date();
  }

  getInfo() {
      const status = this.isDone ? "Completed" : "Not Completed";
      const createdDate = this.createdAt.toLocaleString();
      const updatedDate = this.updatedAt ? this.updatedAt.toLocaleString() : "Never updated";
      return `Todo: ${this.content} | Status: ${status} | Created At: ${createdDate} | Updated At: ${updatedDate}`;
  }
}

class TodoList {
  constructor() {
      this.items = [];
  }

  addItem(content) {
      const newItem = new TodoItem(content);
      this.items.push(newItem);
  }

  deleteItem(index) {
      if (index < 0 || index >= this.items.length) {
          throw new Error("Invalid index");
      }
      this.items.splice(index, 1);
  }

  editItem(index, newContent) {
      if (index < 0 || index >= this.items.length) {
          throw new Error("Invalid index");
      }
      this.items[index].edit(newContent);
  }

  markDone(index) {
      if (index < 0 || index >= this.items.length) {
          throw new Error("Invalid index");
      }
      this.items[index].markDone();
  }

  getItemInfo(index) {
      if (index < 0 || index >= this.items.length) {
          throw new Error("Invalid index");
      }
      return this.items[index].getInfo();
  }

  getAllItems() {
      return this.items.map(item => item.getInfo());
  }

  totalItems() {
      return this.items.length;
  }

  remainingItems() {
      return this.items.filter(item => !item.isDone).length;
  }

  findItemByName(name) {
      const foundItems = this.items.filter(item => item.content.includes(name));
      return foundItems.length > 0 
          ? foundItems.map(item => item.getInfo()) 
          : "No matching notes found.";
  }

  findItemsByCreationDate(date) {
      const searchDate = new Date(date).toDateString();
      const foundItems = this.items.filter(item => item.createdAt.toDateString() === searchDate);
      return foundItems.length > 0 
          ? foundItems.map(item => item.getInfo()) 
          : "No matching notes found for the specified date.";
  }

  findItemsByUpdateDate(date) {
      const searchDate = new Date(date).toDateString();
      const foundItems = this.items.filter(item => item.updatedAt && item.updatedAt.toDateString() === searchDate);
      return foundItems.length > 0 
          ? foundItems.map(item => item.getInfo()) 
          : "No matching notes found for the specified update date.";
  }

  sortItemsByStatus(ascending = true) {
      return this.items
          .slice()
          .sort((a, b) => {
              if (ascending) {
                  return a.isDone === b.isDone ? 0 : a.isDone ? -1 : 1;
              } else {
                  return a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1;
              }
          })
          .map(item => item.getInfo());
  }

  sortItemsByCreationDate(ascending = true) {
      return this.items
          .slice()
          .sort((a, b) => {
              return ascending ? a.createdAt - b.createdAt : b.createdAt - a.createdAt;
          })
          .map(item => item.getInfo());
  }

  sortItemsByUpdateDate(ascending = true) {
      return this.items
          .slice()
          .filter(item => item.updatedAt)
          .sort((a, b) => {
              return ascending ? a.updatedAt - b.updatedAt : b.updatedAt - a.updatedAt;
          })
          .map(item => item.getInfo());
  }
}

const todoList = new TodoList();
todoList.addItem("Придбати продукти");
todoList.addItem("Зробити домашнє завдання");
todoList.addItem("Зателефонувати лікарю");
todoList.addItem("Придбати новий ноутбук");

todoList.markDone(0);
todoList.markDone(2);

console.log("\nПошук нотатки за назвою 'Придбати':");
console.log(todoList.findItemByName("Придбати"));

const today = new Date().toISOString().split('T')[0];
console.log(`\nПошук нотаток за датою створення (${today}):`);
console.log(todoList.findItemsByCreationDate(today));

console.log(`\nПошук нотаток за датою редагування (${today}):`);
console.log(todoList.findItemsByUpdateDate(today));

console.log("\nСортування нотаток: спочатку виконані:");
console.log(todoList.sortItemsByStatus(true));

console.log("\nСортування нотаток за датою створення (спочатку старіші):");
console.log(todoList.sortItemsByCreationDate(true));

console.log("\nСортування нотаток за датою редагування (спочатку новіші):");
console.log(todoList.sortItemsByUpdateDate(false));

console.log(`\nВсього нотаток: ${todoList.totalItems()}`);
console.log(`Невиконаних нотаток: ${todoList.remainingItems()}`);
