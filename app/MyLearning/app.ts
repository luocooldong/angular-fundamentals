function ShoppingList(){
    this.groceries = [];
}

ShoppingList.prototype.addItem = function(item){
    this.groceries = this.groceries.concat([item]);
    // this.groceries.push(item);
}

var mylist = new ShoppingList();

mylist.addItem("Banana");
console.log(mylist.groceries);


class ShoppingList2 {
    groceries: string[];
    constructor() {
        this.groceries = [];
    }

    addItem(item){
        this.groceries = [...this.groceries, item];
    }

    reomveItem(item){
        this.groceries = this.groceries.filter(grocery => item !== grocery);
    }
}

const myNewList = new ShoppingList2();

myNewList.addItem("Pear");
myNewList.addItem("Pizza");


console.log(myNewList.groceries);