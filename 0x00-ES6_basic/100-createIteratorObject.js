export default function createIteratorObject(report) {
    if (!report.allEmployees || typeof report.allEmployees !== 'object') {
        return iterable;
      }
    
       
      iterable = {
        * [Symbol.iterator]() {
          for (const value of Object.values(report.allEmployees)) {
            for (const x of value) {
              yield x;
            }
          }
        },
      };
    
      return iterable;
}