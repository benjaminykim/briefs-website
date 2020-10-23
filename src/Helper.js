export function processNumber(num) {
   if (num < 1000) {
      return num;
    } else {
      var digits = -1;
      while (num >= 1000) {
	num = num / 1000;
	digits += 1;
      }
      const map = ['K', 'M', 'B', 'T', 'G', 'G', 'G'];
      return Number.parseFloat(num).toPrecision(3).toString() + " " + map[digits];
    }
}

