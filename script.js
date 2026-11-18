class Products {
    constructor(name, info, price) {
        this.name = name;
        this.info = info;
        this.price = price;
        this.count = 0;
    }

    buy() {
        this.count++;
        console.log("Added " + this.name + " to cart!");
    }

    remove() {
        if(this.count != 0) {
            console.log("Removed " + this.name + " from the cart.");
            this.count = 0;
        } else {
            console.log("You don't have any " + this.name + " in your cart.");
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
    new Products( //12
        "Vacation (1 day, stackable)",
        "The good side is that it's on discount.<br>The down side is that you don't know where it is.<br>But hey, life is a game of luck, no?",
        500),
    new Products( //13
        "Joke",
        "It takes longer to generate than to ship, honestly...<br>Non-tranferrable. Any reproduction of the joke is strictly prohibited.",
        9),
    new Products( //14
        "Microslop",
        "This software will change the ACTIVATE WIDOWS watermark to 100% vw and 100% vh. Use it against your arch-enemies (100% anonymous).<br><br> To remove they must prove that they are a widow by uploading her husband's death certificate. To help them out we will also send them this guide: <ol><li>Go to tkinter (that one app where singles swipe dating profiles) and buy a husband</li><li>Read <i>\"A Good Girl's Guide to Murder\"</i></li><li>Get death certificate from gov website</li></ol>It will also ship unskippable <s>Apple Advocacy Ads</s> software updates every 5 minutes until you call off the attack, although why would you? You already crossed the Ruby-con.",
        42
    ),
    new Products( //15
        "Megaslop",
        "Microslop too weak for you?<br>Introducing Megaslop a.k.a. Microslop 2.0.<br><br>Features:<ol><li>If the user opens the Microslop clone of Google Sheets, they will be sentenced to Blue Screen of Death and Death By a Thousand Cuts (I mean in real life, not the song because then it's not a retribution)</li><li>Their computer can only use Comic Sans, mojibake, and Command Line Interface</li><li>Everything in the Microslop clone of iCloud account will be replaced by a single OG <i>Oregon Trail</i> game file, even though it's only runnable on an Apple II</li></ol>",
        666
    ),
    new Products( //16
        "Real e-state",
        "A digital copy of an authentic U.S. state<br><br><small>Drop Rates:<br>CA: 0.001% [Triple Ultra Super Duper Hyper Ultra Rare]<br>NY:0.001% [Triple Ultra Super Duper Hyper Ultra Rare]<br>TX: 0.001% [Triple Ultra Super Duper Hyper Ultra Rare]<br>Wait, that's a thing?: 99.997% [common asf]</small>",
        1400000
    ),
    new Products( //17
        "100plus (24 cans)",
        "Likely eligible for 10c refund scheme",
        19
    ),
    new Products( //18
        "Oldpaper",
        "It's anything BUT new",
        22
    ),
    new Products( //19
        "Google Subtracts",
        "NO MORE ADDS LESS GO",
        22
    ),
    new Products( //20
        "Computer Monitor",
        "By purchasing this item you agree to international cross-border data transfer and storage. You also waive the seller from regulations like PDPA and GDPR. If you disagree then why were you thinking of buying it in the first place?",
        10
    ),
    new Products( //21
        "Red Flag",
        "Bro, it's literally a red flag. I warned you so DON'T BLAME ME",
        1
    ),
    new Products( //22
        "White Flag",
        "A perfect gift for your Parisian friends in 1940",
        1
    ),
    new Products( //23
        "Hoover Flag",
        "A perfect gift for your American friends in 1930",
        1
    ),
    new Products( //24
        "Time Machine to 1989 CE",
        "Good luck surviving Millennium Age, no internet for you (Wi-Fi password will not save you)<br><br>Also, enjoy the 50cm cube computers and 100kg radioactive TVs",
        1989
    ),
    new Products( //25
        "Social Contract",
        "I mean, sure, if you want a printed copy of it...",
        300
    ),
    new Products( //26
        "Digital Citizenship",
        "Obtain citizenship in the digital world to access the Internet<br><br><small>Limit 1 per person. Meatpuppets and Sockpuppets will result in your digital citizenship being revoked.</small>",
        0
    ),
    new Products( //27
        "Blessing",
        "Please use it wisely, I sacrificed 1000 Karma points for it",
        88888888
    ),
    new Products( //28
        "Partner (Business)",
        "OK. So here's the plan. If our partnership generates $10, you get $4 and I get $4. The other $2 is lost to \"taxes\" EVEN THOUGH TAX COLLECTORS DIDN'T DO ANYTHING IN THIS PARTNERSHIP",
        99
    ),
    new Products( //29
        "Partner (Foreign Relations)",
        "OK. So here's the plan. If our partnership generates $10, you get $4 and I get $4. The other $2 is lost to \"taxes\" EVEN THOUGH TAX COLLECTORS DIDN'T DO ANYTHING IN THIS PARTNERSHIP",
        99
    ),
    new Products( //30
        "Partner (Intimate)",
        "MoM should increase the labour force in this field to increase the supply and solve the scarcity.",
        521
    ),
    new Products( //31
        "Sonion Rings",
        "Included in product: <ul><li>Onion Rings</li><li>Face paint (yellow and blue)</li><li>Paint brush</li><li>Artificial teardrops</li><li>Makeup artist (YouTube grade, 10 min)</li></ul>",
        140
    ),
    new Products( //32
        "Brotato Chips",
        "It's just normal chips, what else do you want",
        3
    ),
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
