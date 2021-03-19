import randomId from 'random-id';

class IDGenerator {
  constructor(len, pattern) {
    this.len = len;
    this.pattern = pattern;
  }

  nextId() {
    return Number.parseInt(randomId(this.len, this.pattern), 10);
  }
}
const instance = new IDGenerator(16, '0');
export default instance;
