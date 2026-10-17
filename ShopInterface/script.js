class Products {
    constructor(name, info, price) {
        this.name = name;
        this.info = info;
        this.price = price;
        this.count = 0;
    }

    buy() {
        this.count++;
        alert("Added " + this.name + " to cart!");
    }

    getPrice() {
        return this.price;
    }

    getInfo() {
        return this.info;
    }

    getName() {
        return this.name;
    }

    getCount() {
        return this.count;
    }
}

const inventory = [
    new Products("A1", "A", 1),
    new Products("B1", "B", 2),
    new Products("C1", "C", 3),
    new Products("D1", "D", 4),
    new Products("E1", "E", 5),
    new Products("F1", "F", 6),
    new Products("G1", "G", 7),
    new Products("H1", "H", 8),
    new Products("I1", "I", 9),
];

function renderProducts() {
    for(let i = 0; i < inventory.length; i++) { //Label naming format is name#, info#, price# (e.g. name1, info2, price3)
        document.getElementById("name" + i).innerHTML = inventory[i].getName();
        document.getElementById("info" + i).innerHTML = inventory[i].getInfo();
        let priceDisplay = '<img src = "Custom Currency Icon.png" alt = "$" width="12px" height="19.2px"></img>' + inventory[i].getPrice();
        document.getElementById("price" + i).innerHTML = priceDisplay;
    }
}

function buyProduct(index) {
    inventory[index].buy();
}

function checkout() {
    window.location.href = 'payment.html';
}

function renderReceipt() {
    let receipt = "";
    let totalBill = 0;
    for(let i = 0; i < inventory.length; i++) {
        if(inventory[i].getCount() != 0) {
            receipt = "\n" + receipt + inventory[i].getCount() + "x " + inventory[i].getName() + ", " + '<img src = "Custom Currency Icon.png" alt = "$" width="12px" height="19.2px"></img>' + inventory[i].getPrice() + " each";
            totalBill = totalBill + inventory[i].getCount() * inventory[i].getPrice();
        }
    }
    document.getElementById("receipt").innerHTML = receipt;
    document.getElementById("totalBill").innerHTML = totalBill;
}
