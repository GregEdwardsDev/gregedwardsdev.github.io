const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  rl.question('\n----------------------------------------\n\nInput: ', function (input_string) {
    if (input_string.includes('d')) {
      calculateRoll(input_string);
    } else {
      rl.close();
    }
  });
}

function calculateRoll(input_string) {
  let dice_num = 1;
  let dice_type = 20;
  let rolled_num = 0;
  let modifier = 0;
  let result = 0;

  const input_split = input_string.split('d');
  const before_d = input_split[0];
  const after_d = input_split[1];

  if (input_string.charAt(0) === 'd') {
    dice_num = 1;
  } else {
    dice_num = parseInt(before_d);
  }

  if (input_string.includes('+')) {
    const final_split = after_d.split('+');
    dice_type = parseInt(final_split[0]);
    modifier = parseInt(final_split[1]);
  } else if (input_string.includes('-')) {
    const final_split = after_d.split('-');
    dice_type = parseInt(final_split[0]);
    modifier = -parseInt(final_split[1]);
  } else {
    dice_type = parseInt(after_d);
  }

  for (let i = 0; i < dice_num; i++) {
    rolled_num = Math.floor(Math.random() * dice_type) + 1;
    process.stdout.write(`You rolled a ${rolled_num} `);
    result += rolled_num;
  }

  result += modifier;

  if (modifier !== 0) {
    process.stdout.write(`+ ${modifier} `);
  }

  console.log(`\nResult: ${result}`);
  main();
}

main();
