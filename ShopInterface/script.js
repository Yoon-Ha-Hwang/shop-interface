class Products {
    constructor(id, name, price) { //I'm using a constructor to make products
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = 0;

        buy() {
            this.count++;
            alert("Added " + name + " to cart!");
        }
    }

    inventory = [
        new Products(1, "A", 200),
        new Products(2, "B", 200),
        new Products(3, "C", 200),
        new Products(4, "D", 200),
        new Products(5, "E", 200),

        new Products(6, "F", 200),
        new Products(7, "G", 200),
        new Products(8, "H", 200),
        new Products(9, "I", 200),
    ]
}
function checkout() {
    window.location.href = 'payment.html';
}
