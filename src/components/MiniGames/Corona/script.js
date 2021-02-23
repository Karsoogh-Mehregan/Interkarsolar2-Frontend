import { toast } from 'react-toastify';
import _ from 'lodash';

const CHANCE_OF_BEING_ILL = 0.5;
var PERSON_ID = 0;
const PEOPLE_NUMBER = 60;
const TEST_NUMBER = 10;
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
    constructor(diagnosis, difficulty, cost) {
        this.diagnosis = parseFloat(diagnosis);
        this.difficulty = parseFloat(difficulty);
        this.cost = parseInt(cost);
    }
}

let patientsList = [];

export class Society {
    constructor(updateComponent) {
        this.budget = parseInt(100000);
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
        let tests = [new Test(0.5,0.2,3000),new Test(0.6,0.3,4000),new Test(0.2,0.1,1000),new Test(0.8,0.7,5000),new Test(0.25,0.2,2000),new Test(0.7,0.8,7000),new Test(0.1,0.1,1000),new Test(0.5,0.5,5000),new Test(0.45,0.3,4500),new Test(0.65,0.65,6500)];
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
        console.log("selected people: ",this.selectedPeople);
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
            // if ( this.people[personID].patience - selectedTest.difficulty < 0 ) {
            //     toast.error(`you cant test on person ${personID}`);
            //     continue;
            // } else { ... }
            this.people[personID].patience -= selectedTest.difficulty;
            if (this.people[personID].isIll) {
                realHealthyPeople.push(personID)
            } else {
                realIllPeople.push(personID);
            }
        })

        let x = parseInt(selectedTest.diagnosis * realIllPeople.length);
        this.updateComponent(Math.random()); //todo: handle re-rendering in another way!

        // patients list: list of people who have been diagnosed with the disease so far
        return _getRandomSubset(x, realIllPeople).concat(patientsList);


        // terms of the game:

        // if ( this.budget < 1000 (lowest test cost) || patientsList.length == 30 (total number of sick people))
        // {
        // patientsList.forEach(i => {
        //     console.log(`patient list ${patientsList[i]}`);
        // })
    
        // alert("Game is Over. \br your final score: " + score);
        // location.reload();
        // }
    }
}

const _getRandomSubset = (size, list) => {
    return _.shuffle(list).slice(0, size);
}

