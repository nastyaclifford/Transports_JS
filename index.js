const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }

  getInfo() {
    return `${this.brand}`;
  }
  getPrice() {
    return `${this.price} руб`;
  }
}
let totalStringVDom = " ";

data.forEach((item) => {
  let price = item.price;
  let brand = item.brand;
  let doors = item.doors;
  let speed = item.maxSpeed;
  let img = item.image;

  if (item.type === "car") {
    class Car extends Transport {
      constructor(price, brand, doors) {
        super("car", price, brand, doors);
        this.doorsCount = doors;
      }

      getInfo = this.getInfo.bind(this);
      getPrice = this.getPrice.bind(this);
      getDoorsCount = this.getDoorsCount.bind(this);

      getDoorsCount() {
        return `Количество дверей: ${this.doorsCount}`;
      }
    }
    let car = new Car(`${price}`, `${brand}`, `${doors}`);
    let carInfo = car.getInfo();
    let carPrice = car.getPrice();
    let carDoors = car.getDoorsCount();
    totalStringVDom =
      totalStringVDom +
      `<div class="list_item"><img class="image" src="${img}" alt="car"><div class="item_info">${carInfo}</div><div class="item_price">${carPrice}</div><div class="item_doors">${carDoors}</div></div>`;
    document.querySelector(".list").innerHTML = totalStringVDom;
  }

  if (item.type === "bike") {
    class Bike extends Transport {
      constructor(price, brand, maxSpeed) {
        super("bike", price, brand, maxSpeed);
        this.maxSpeed = maxSpeed;
      }

      getInfo = this.getInfo.bind(this);
      getPrice = this.getPrice.bind(this);
      getMaxSpeed = this.getMaxSpeed.bind(this);

      getMaxSpeed() {
        return `Максимальная скорость: ${this.maxSpeed} км/ч`;
      }
    }
    let bike = new Bike(`${price}`, `${brand}`, `${speed}`);
    let bikeInfo = bike.getInfo();
    let bikePrice = bike.getPrice();
    let bikeSpeed = bike.getMaxSpeed();
    totalStringVDom =
      totalStringVDom +
      `<div class="list_item"><img class="image" src="${img}" alt="bike"><div class="item_info">${bikeInfo}</div><div class="item_price">${bikePrice}</div><div class="item_speed">${bikeSpeed}</div></div>`;
    document.querySelector(".list").innerHTML = totalStringVDom;
  }
});
