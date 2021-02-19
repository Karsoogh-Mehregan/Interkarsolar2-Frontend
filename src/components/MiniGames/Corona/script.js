import { toast } from 'react-toastify';
import _ from 'lodash';

const CHANCE_OF_BEING_ILL = 0.5;
var PERSON_ID = 0;
const PEOPLE_NUMBER = 30;
const TEST_NUMBER = 5;
const FIRST_NAMES = [
    'اصغر',
    'ممد',
    'نصرت',
    'منصوره',
    'اسماعیل',
    'مهری',
    'هاشم',
    'داریوش',
    'پریوش',
    'کوکب',
];
const LAST_NAMES = [
    'فرهادی',
    'دلربا',
    'حدادی',
    'غلام‌رضایی',
    'کاکایی',
    'کربکندی',
    'بی‌طرف',
    'جعفری',
    'خان‌پور',
    'بقال‌زاده',
];

class Person {
    constructor(isIll = Math.random() < CHANCE_OF_BEING_ILL, patience = 1) {
        this.firstName = FIRST_NAMES[PERSON_ID % FIRST_NAMES.length];
        this.lastName = LAST_NAMES[Math.floor(Math.random() * PERSON_ID) % LAST_NAMES.length];
        this.id = PERSON_ID++;
        this.isIll = isIll;
        this.patience = parseFloat(patience);
        this.x = Math.random() * window.innerWidth; // todo: better distribution
        this.y = Math.random() * window.innerHeight; // todo: better distribution
        this.isSelected = false;
    }
}

class Test {
    constructor(diagnosis, correctness, difficulty, cost) {
        this.diagnosis = parseFloat(diagnosis);
        this.correctness = parseFloat(correctness);
        this.difficulty = parseFloat(difficulty);
        this.cost = parseInt(cost);
    }
}

export class Society {
    constructor(updateComponent) {
        this.budget = parseInt(0);
        this._buildPeople();
        this._buildTests();
        this.selectedPeople = [];
        this.selectedTest = '';
        this.updateComponent = updateComponent;
    }

    _buildPeople() {
        let people = [];
        for (let i = 0; i < PEOPLE_NUMBER; i++) {
            people.push(new Person());
        }
        this.people = people;
    }

    _buildTests() {
        let tests = [];
        for (let i = 0; i < TEST_NUMBER; i++) {
            tests.push(new Test(Math.random().toFixed(2), Math.random().toFixed(2), Math.random().toFixed(2), Math.floor(Math.random() * 10) + 1));
        }
        this.tests = tests;
    }

    selectPerson(personID) {
        console.log(personID);
        console.log(this);
        if (this.people[personID].patience <= 0) {
            toast.error('بابا بنده خدا بیشتر از این تحمل نداره! ولش کنین.');
            return;
        }
        this.people[personID].isSelected = true;
        this.selectedPeople.push(personID);
        this.updateComponent(Math.random()); //todo: handle re-rendering in another way!
    }

    unselectPerson(personID) {
        for (var i = 0; i < this.selectedPeople.length; i++) {
            if (this.people[this.selectedPeople[i]].id === personID) {
                this.selectedPeople.splice(i, 1);
                this.people[personID].isSelected = false;
            }
        }
        this.updateComponent(Math.random()); //todo: handle re-rendering in another way!
    }

    takeTest() {
        const selectedTest = this.tests[this.testID];
        if (selectedTest.cost * this.selectedPeople.length > this.budget) {
            toast.error('نمیشه آقا! هزینه‌ی تست‌ها بیشتر از بودجه‌ایه که داریم.');
            return "ERROR";
        }

        const realHealthyPeople = [];
        const realIllPeople = [];

        this.budget -= selectedTest.cost * this.selectedPeople.length;
        this.selectedPeople.forEach((personID) => {
            this.people[personID].patience -= selectedTest.difficulty;
            if (this.people[personID].isIll) {
                realHealthyPeople.push(personID)
            } else {
                realIllPeople.push(personID);
            }
        })

        var x = selectedTest.diagnosis * realIllPeople.length;
        var y = (1 - selectedTest.correctness) * x / selectedTest.correctness;

        this.updateComponent(Math.random()); //todo: handle re-rendering in another way!
        return _getRandomSubset(x, realIllPeople).concat(_getRandomSubset(y, realHealthyPeople));
    }
}

const _getRandomSubset = (size, list) => {
    return _.shuffle(list).slice(0, size);
}

// let society1 = new Society(14, 7, Math.floor(Math.random() * 30) + 10);

// let is_sick = [];
// for (let i = 0; i < society1.peopleList.length; ++i) {
//     if (society1.peopleList[i].isIll == true) {
//         is_sick.push(i);
//     }
// }
// console.log(is_sick);
// console.log(society1.peopleList);
// console.log(society1.testList);
// let costList = [];
// for (let i = 0; i < 7; i++) {
//     costList.push(society1.testList[i].cost)
// }
// let minCost = Math.min.apply(Math, costList);


// let flag = false;
// let score = 100;
// let testnum;
// let selected = new Set();
// let p1 = [];
// function pushToArray(n) {
//     p1.push(n);
//     console.log("person added successfully!", society1.peopleList[n]);
// }
// function testNumber(n) {
//     testnum = n;
//     console.log("test selected successfully!", society1.testList[n]);
// }
// function Test1() {

//     if (!flag) takeTest(p1, testnum);
// }

// let patientsList = [];
// function gameOver() {

// }



// function displayTests(t) {
//     document.getElementById('test-specifications').innerHTML = "درصد درستی: " + society1.testList[t].cp + " " + "درصد تشخیص: " + society1.testList[t].pod + " " + "سختی: " + society1.testList[t].testDifficulty + " " + "هزینه: " + society1.testList[t].cost;
// }
// function clear() {
//     document.getElementById('test-specifications').innerHTML = " ";
// }
// function resetButton() {
//     var x = document.getElementsByClassName("BTN");
//     for (let i = 0; i < x.length; i++) {
//         x[i].style.backgroundColor = "#efefef";
//     }
// }
// function showBudget() {
//     document.getElementById('show-budget').innerHTML = society1.budget;
// }