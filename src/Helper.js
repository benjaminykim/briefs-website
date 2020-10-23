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

export function parsePercentage(num) {
   return Number.parseFloat(num * 100).toPrecision(3).toString();
}

export function formatData(bytes) {
   let copy = bytes;
   if (bytes < 1000) {
      return bytes.toString() + " bytes";
   } else {
      var digits = -1;
      while (copy >= 1000) {
	 copy = copy / 1000;
	 digits += 1;
      }
      const map = ['KB', 'MB', 'GB', 'TB', 'PT'];
      return Number.parseFloat(copy).toPrecision(3).toString() + " " + map[digits];
   }
}

