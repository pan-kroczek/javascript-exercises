const findTheOldest = function(people) {
    people.forEach(person => {
        let today = new Date();
        let currentYear = today.getFullYear();
        let age;
      
        if ("yearOfDeath" in person === false) {
          age = currentYear - person.yearOfBirth;
        } else {
          age = person.yearOfDeath - person.yearOfBirth;
        }
      
        return person.age = age;
      })
      
      people.sort((first, second) => {
        return second.age - first.age;
      });
      
      return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
