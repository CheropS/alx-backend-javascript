export default function iterateThroughObject(reportWithIterator) {
    const employees = [];
    for (const x of reportWithIterator) {
      employees.push(x);
    }
  
    return employees.join(' | ');
}