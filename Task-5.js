/* Задание 5 */
class ElectricalDevice {
  constructor(name) {
    this.name = name;
    this.model = String();
    this.active = false;
    this.wattage = 0;
  }
      turnOn() {
        this.active = true;
    }
    turnOff() {
        this.active = false;
    }
}

class Lamp extends ElectricalDevice {
      constructor(model, wattage) {
        super();
        this.name = "Лампа";
        this.model = model;
        this.mode = 1;
        this.wattage = wattage;
    }

    setMode(mode) {
        this.mode = mode;
        this.wattage *= mode;
    }
}

class Notebook extends ElectricalDevice {
    constructor(model, wattage) {
        super();
        this.name = "Ноутбук";
        this.model = model;
        this.wattage = wattage;
        this.workload = 1;
    }

    setWorkload(workload) {
        this.workload = workload;
        this.wattage *= workload;
    }
}


class Smartphone extends ElectricalDevice {
    constructor(model, wattage) {
        super();
        this.name = "Смартфон";
        this.model = model;
        this.wattage = wattage;
        this.workload = 1;
    }

    setWorkload(workload) {
        this.workload = workload;
        this.wattage *= workload;
    }
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