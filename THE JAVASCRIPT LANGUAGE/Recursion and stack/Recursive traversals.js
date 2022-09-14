let company = { 
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
};

const sumSalaries = (department) => {
    if (Array.isArray(department)) {
        return department.reduce( (summ, current) => summ + current.salary, 0)
    } else {
        let summ = 0;
        for (let value of Object.values(department) ) {
            summ += sumSalaries(value);
        }
        return summ
    }
}

console.log( sumSalaries(company) );