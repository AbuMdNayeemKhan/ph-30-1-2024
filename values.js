let computer = {
    brand: "dell",
    price: 42000,
    processor: "AMD",
    SSD: '512gb',
    monitor: "MSI"
}
const keys = Object.keys(computer);
const values = Object.values(computer);
console.log(keys + ":" + values);