const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Роман",
            "id_6": "Антон",
            "id_7": "Михаил",
            "id_8": "Антип",
            "id_9": "Егор",
            "id_10": "Гаврил"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мария",
            "id_2": "София",
            "id_3": "Анна",
            "id_4": "Алиса",
            "id_5": "Полина",
            "id_6": "Ева",
            "id_7": "Анастасия",
            "id_8": "Виктория",
            "id_9": "Александра",
            "id_10": "Варвара"
        }
    }`,
    proffesion:`{
        "count":10,
        "list": {
            "id_1": "Топ-менеджер",
            "id_2": "Музыкант",
            "id_3": "IT-специалист",
            "id_4": "Финансист",
            "id_5": "Юрист",
            "id_6": "Маркетолог",
            "id_7": "Бухгалтер",
            "id_8": "Шеф-повар",
            "id_9": "Врач",
            "id_10": "Адвокат"
        }
    }`,

    
    
    
    GENDER_MALE: "Мужчина",
    GENDER_FEMALE: "Женщина",
    
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomGender: function(){
        let r = this.randomIntNumber(); 
        let a = r == 1 ? this.GENDER_FEMALE : this.GENDER_MALE;
        return a;
        
    },
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if (gender== "Женщина"){
            return this.randomValue(this.firstNameFemaleJson);
        } else {
            return this.randomValue(this.firstNameMaleJson);
        }


    },
    randomSurname: function(gender) {
        if (gender == "Женщина"){
            return ((this.randomValue(this.surnameJson)) + "a");
        } else {
            return this.randomValue(this.surnameJson);

        }

    },
    randomOtch:function(gender){
        if (gender == "Женщина"){
            return((this.randomValue(this.firstNameMaleJson)) + "овна")
        } else {
            return((this.randomValue(this.firstNameMaleJson)) + "ович")
        }

    },
    randomProffesion:function(){
        return this.randomValue(this.proffesion);    
    },
    randomYear:function(){
        const min = 1980;
        const max = 2002;
        let a =  Math.floor(Math.random() * (max - min + 1) + min);
        return (a + " года рождения");
    },
    randomDay:function(month){
        let b
        if (month = "Февраля"){
            b = this.randomIntNumber(28,1);
            return b;
        }else if (month = "Апрель"|| "Июнь"||"Сентябрь"||"Ноябрь"){
            b = this.randomIntNumber(30,1);
            return b;
        }else{
            b = this.randomIntNumber(31,1);
            return b;

        }

    },
    randomMonth:function(){
        const month = ["Января", "Февраля", "Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Ноября","Октября","Декабря"];
        let randomElement = month[Math.floor(Math.random() * month.length)];
        return randomElement;
    },
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.otch = this.randomOtch(this.person.gender);
        this.person.proffesion = this.randomProffesion();
        this.person.year = this.randomYear();
        this.person.day = this.randomDay();
        this.person.month = this.randomMonth();


        return this.person;
    }
};
