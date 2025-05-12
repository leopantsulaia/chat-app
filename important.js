function brainfuckInterpreter(code) {
  // Define memory and pointer
  let memory = new Array(30000).fill(0);
  let pointer = 0;
  let codePointer = 0;
  let output = '';
  let loopStack = [];

  while (codePointer < code.length) {
    const command = code[codePointer];

    switch (command) {
      case '+':
        memory[pointer] = (memory[pointer] + 1) % 256;
        break;
      case '-':
        memory[pointer] = (memory[pointer] - 1 + 256) % 256;
        break;
      case '>':
        pointer++;
        break;
      case '<':
        pointer--;
        break;
      case '.':
        output += String.fromCharCode(memory[pointer]);
        break;
      case '[':
        if (memory[pointer] === 0) {
          let loopLevel = 1;
          while (loopLevel > 0) {
            codePointer++;
            if (code[codePointer] === '[') loopLevel++;
            if (code[codePointer] === ']') loopLevel--;
          }
        } else {
          loopStack.push(codePointer);
        }
        break;
      case ']':
        if (memory[pointer] !== 0) {
          codePointer = loopStack[loopStack.length - 1];
        } else {
          loopStack.pop();
        }
        break;
    }

    codePointer++;
  }

  return output;
}

// Test the Brainfuck code
const brainfuckCode = "++++[++++>---<]>++.[->+++++<]>-.--------.----.+++.-----------.+.+++++++++++++.+++.--..----------.--------.";
console.log(brainfuckInterpreter(brainfuckCode)); // Output: EXPLODERUSSIA



/// OR


function brainfuckInterpreter2(code) {
  let m = Array(30000).fill(0), p = 0, o = '', s = [];
  for (let i = 0; i < code.length; i++) {
    let c = code[i];
    if (c === '+') m[p] = (m[p] + 1) % 256;
    if (c === '-') m[p] = (m[p] - 1 + 256) % 256;
    if (c === '>') p++;
    if (c === '<') p--;
    if (c === '.') o += String.fromCharCode(m[p]);
    if (c === '[' && !m[p]) while (code[i] !== ']') i++;
    if (c === ']') i = s.pop() - 1;
    if (c === '[') s.push(i);
  }
  return o;
}

const bfCode = "++++[++++>---<]>++.[->+++++<]>-.--------.----.+++.-----------.+.+++++++++++++.+++.--..----------.--------.";
console.log(brainfuckInterpreter2(bfCode)); // Output: EXPLODERUSSIA
