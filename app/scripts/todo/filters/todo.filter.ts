export interface Todo {
  completed?: boolean,
  text?: string,
}

export function TodoFilter() {
  return function (array: Todo[], criteria: string) {
    var filteredArray: Todo[] = [];
    (array || []).forEach(function (item) {
      if (criteria === 'all') {
        filteredArray.push(item);
      }
      else if (criteria === 'active' && item.completed === false) {
        filteredArray.push(item);
      }
      else if (criteria === 'completed' && item.completed === true) {
        filteredArray.push(item);
      }
    });
    return filteredArray;
  };
}
