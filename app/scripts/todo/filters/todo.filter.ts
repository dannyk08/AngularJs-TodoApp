export enum Criteria {
  all = 'all',
  active = 'active',
  completed = 'completed',
}

export class Todo {
  completed?: boolean
  text?: string

  constructor(obj: Partial<Todo>) {
    obj = obj || {}

    this.completed = obj.completed || false
    this.text = obj.text || null
  }

}

export function TodoFilter() {
  return function (array: Todo[], criteria: Criteria) {
    var filteredArray: Todo[] = [];

    (array || []).forEach(function (item) {
      if (criteria === Criteria.all) {
        filteredArray.push(item);
      }
      else if (criteria === Criteria.active && item.completed === false) {
        filteredArray.push(item);
      }
      else if (criteria === Criteria.completed && item.completed === true) {
        filteredArray.push(item);
      }
    });

    return filteredArray;
  };
}
