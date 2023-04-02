/* Задание 4 */
function ElectricalDevice(name) {
  this.name = name,
    this.model = String();
    this.active = false;
    this.wattage = 0;
}
ElectricalDevice.prototype.turnOn = function () {
    this.active = true;
}
ElectricalDevice.prototype.turnOff = function () {
    this.active = false;
}

Lamp.prototype = new ElectricalDevice("Лампа");
function Lamp(model, wattage) {
    this.model = model;
    this.mode = 1;
    this.wattage = wattage;
}
Lamp.prototype.setMode = function (mode) {
    this.mode = mode;
    this.wattage *= mode;
}

Notebook.prototype = new ElectricalDevice("Ноутбук");
function Notebook(model, wattage) {
    this.model = model;
    this.wattage = wattage;
    this.workload = 1;
}
Notebook.prototype.setWorkload = function (workload) {
    this.workload = workload;
    this.wattage *= workload;
}
Smartphone.prototype = new ElectricalDevice("Смартфон");
function Smartphone(model, wattage) {
    this.model = model;
    this.wattage = wattage;
    this.workload = 1;
}
Smartphone.prototype.setWorkload = function (workload) {
    this.workload = workload;
    this.wattage *= workload;
}

const lamp = new Lamp("Arte Lamp", 60);
const asus = new Notebook("Asus", 100);
const realme = new Smartphone("Realme", 35);

lamp.turnOn();
realme.turnOn();
realme.setWorkload(1);
asus.turnOn();
asus.setWorkload(3);

console.log(getWattage([lamp, realme, asus]));
// В розетку включены:
// Лампа "Arte Lamp" (60 Вт)
// Смартфон "Realme" (35 Вт)
// Ноутбук "Asus" (300 Вт)
// Потребляемая мощность: 395 Вт.

function getWattage(devices) {
    let answer = "В розетку включены: \n";
    let wattage = 0;

    devices.forEach((element) => {
        if (element.active) {
            answer += element.name + " \"" + element.model + "\" (" + element.wattage + " Вт)\n";
            wattage += element.wattage;
        }
    });

    answer += "Потребляемая мощность: " + wattage + " Вт.";

    return answer;
}