const colors = {
  red: '#ff0000',
  green: '#15ff00',
  blue: '#0004ff',
};

const success = message => {
  console.log(`%c${message}`, `color:${colors.green}`);
}

const info = message => {
  console.log(`%c${message}`, `color:${colors.blue}`);
}

const fail = message  => {
  console.log(`%c${message}`, `color:${colors.red}`);
}

export {
  info,
  success,
  fail
};
