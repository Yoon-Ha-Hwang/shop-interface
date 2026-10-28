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

//Reminder, this is name-info-price
const inventory = [ 
    new Products( //0
        "Vibe Coding OS (1 year licence)",
        "This OS will generate code beyond human comprehension.<br><br>Included with purchase (99 years licences):<ul><li>Job Hunt OS</li><li>Burning Tokens like Papiermarks OS</li><li>Windows 11 :( no money to buy MacOS</li><li>Computer Assisted Foreclosure OS</li><li>Electric stove computer expansion CAD set</li></ul>", 
        300000),
    new Products( //1
        "Big Red Button", 
        "This button will instantly make all Claude users wait 5 hours to use Claude AI again, no matter the subscription level.<br><br>100% functionality guaranteed!<br>How do I know? Because a customer is using an autoclicker on the button right now.", 
        5000),
    new Products( //2
        "Radon Medicine Bottle", 
        "Volume: 28.3mL (1 ounce)<br>Potency: 1 sievert<br>Energy: a lot of kilojoules<br>Proteins: 0mg<br>Carbohydrates: 0mg<br>Fat: 0mg<br>Functionality: I don't know, you tell me.", 
        40),
    new Products( //3
        "Hot Cross Bun", 
        "Good luck trying to eat it...", 
        3),
    new Products( //4
        "Hamburger", 
        "Ham not included.",
        17),
    new Products( //5
        "An Hour of Time",
        "STACKABLE work hours for sale ($65 per hour)<br><br>Sure, money can't buy time...<br>... but it <strong>DOES</strong> buy someone else's.<br><br>It's so OP that nature forced us to limit sales to 24 hours per day.",
        65),
    new Products( //6
        "CS Research Grant (10 USD)",
        "Although why would you spend money to buy a grant, when you can just pay yourself?", 
        12),
    new Products( //7
        "Random Altcoin",
        "Trust me bro, forget about the tech people who say it's not even worth $10<sup>-5</sup>, they are just losers. I promise you, they gonna cry when this coin is worth $10<sup>5</sup>!1!1!1<sup>*</sup><br><br><small>* Previous successes do not guarantee future successes. Claims presented have not yet been verified by the FTC.</small>",
        1),
    new Products( //8
        "Certificate of Entitlement", 
        "You need it to complete the 5Cs<br><br>(ERP and Touch n' Go not included)", 
        120000),
    new Products( //9
        "1000 Kudos", 
        "You can trade it for 1000 upvotes/likes/thumbs ups/5 stars/etc. on any social media platform.<br><br>Examples (not exhaustive): Google Maps, Reddit, Instagram, Facebook, Twitter, YouTube, LinkedIn, WeChat, Douyin, Xiaohongshu, etc.<br><br><small>We cannot be held liable if they get revoked or your account is suspended.</small>", 
        40),
    new Products( //10
        "English-Claudish Translator OS", 
        "Limited time deal! Buy 1 Get 3: <ul><li>English-English Translator OS [FREE]</li><li>Claudish-Claudish Translator OS [FREE]</li><li>English-Claudish Translator OS is AI-powered, so it's still rate-limited.</li></ul>", 
        70),
    new Products( //11
        "Random Altcoin (Short Option)",
        "Great choice, you gonna make trillions more than the normal version<sup>*</sup>. Forget about what the disclaimer says, they are just hallucinating.<br><br><small>* Previous successes do not guarantee future successes. Claims presented have not yet been verified by the FTC. This investment product involves high risks and the potential to lose more than what was invested.</small>",
        1),
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
            receipt += inventory[i].getCount() + "x " + inventory[i].getName() + " (" 
            receipt += '<img src = "Custom Currency Icon.png" alt = "$" width="12px" height="19.2px"></img>' + inventory[i].getPrice() + " each)";
        }
    }
    document.getElementById("receipt").innerHTML = receipt;
}

function totalBill() {
    let totalBill = 0;
    for(let i = 0; i < inventory.length; i++) {
        if(inventory[i].getCount() != 0) {
            totalBill += inventory[i].getCount() * inventory[i].getPrice();
        }
    }
    document.getElementById("totalBill").innerHTML = totalBill;
}

function totalBillwithIcon() {
    let totalBillwithIcon = 0;
    for(let i = 0; i < inventory.length; i++) {
        if(inventory[i].getCount() != 0) {
            totalBillwithIcon += inventory[i].getCount() * inventory[i].getPrice();
        }
    }
    totalBillwithIcon = '<img src = "Custom Currency Icon.png" alt = "$" width="12px" height="19.2px"></img>' + totalBillwithIcon.toString();
    document.getElementById("totalBillwithIcon").innerHTML = totalBillwithIcon;
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
