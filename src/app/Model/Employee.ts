export class Employee {
  id: number;
  name: string;
  salary: number;
  bonus: number;
  dept: string;

  constructor(
    id: number,
    name: string,
    salary: number,
    bonus: number,
    dept: string
  ) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.bonus = bonus;
    this.dept = dept;
  }
}
