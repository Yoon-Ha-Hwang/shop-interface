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

    remove() {
        if(this.count != 0) {
            alert("Removed " + this.name + " from the cart.");
            this.count = 0;
        } else {
            alert("You don't have any " + this.name + " in your cart.");
        }
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

//Start of AI-enhanced code segment
const savedData = JSON.parse(localStorage.getItem("rawCart"));

function checkout() {
    saveCart();
    window.location.href = 'payment.html';
}

function restoreCart() {
    if (savedData !== null && Array.isArray(savedData)) {
        for (let i = 0; i < inventory.length; i++) {
            if (savedData[i]) {
                inventory[i].count = savedData[i].count;
            }
        }
    }
}

function saveCart() {
    const rawCart = [];
    
    for (let i = 0; i < inventory.length; i++) {
        rawCart.push({
            count: inventory[i].count
        });
    }
    localStorage.setItem("rawCart", JSON.stringify(rawCart));
}

restoreCart();
//End of AI-enhanced code segment

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

function removeProduct(index) {
    inventory[index].remove();
}

function renderReceipt() {
    let receipt = "";
    for(let i = 0; i < inventory.length; i++) {
        if(inventory[i].getCount() != 0) {
            if(receipt != "") {
                receipt += "<br>";
            }
            receipt += inventory[i].getCount() + "x " + inventory[i].getName() + ", (" 
            receipt += '<img src = "Custom Currency Icon.png" alt = "$" width="12px" height="19.2px"></img>' + inventory[i].getPrice() + " each)";
        }
    }
    document.getElementById("receipt").innerHTML = receipt;
}

function totalBill() {
    let totalBill = 0;
    for(let i = 0; i < inventory.length; i++) {
        if(inventory[i].getCount() != 0) {
            let totalForThisItem =  inventory[i].getCount() * inventory[i].getPrice();
            totalBill += totalForThisItem;
        }
    }
    document.getElementById("totalBill").innerHTML = totalBill;
}

function reset() {
    for(let i = 0; i < inventory.length; i++) {
        inventory[i].count = 0;
    }
    saveCart();
    window.location.href = 'payment.html';
    alert("Cart has been reset!");
}

function goBack() {
    saveCart();
    window.location.href = 'index.html';
}

function confirm() {
    let isEmpty = 1;
    for(let i = 0; i < inventory.length; i++) {
        if(inventory[i].getCount() != 0) {
            isEmpty = 0;
            break;
        }
    }
    if(isEmpty == 0) {
        saveCart();
        window.location.href = 'stripe.html';
    } else {
        alert("Your cart is empty.");
    }
}
