export interface Employee {
    name: string;
    salary: number;
    bonus: number;
}
const employees: Employee[] = [
  {name: 'Fulano da Silva', salary: 2000, bonus: 0},
  {name: 'Cicrano da Silva', salary: 15000, bonus: 0},
  {name: 'Beltrano da Silva', salary: 900, bonus: 100},
];

export default employees;
