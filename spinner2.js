// // Using this \r, we can fake an animation by replacing/rewriting characters in the same spot after a delay.

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r| ');
// }, 900);

// // print animation (\ / - \ |) check in node

const spinner = "|/-\\|";

let delay = 0;
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + spinner[i] + ' ');
  }, delay += 100);
}

// all individual code together in one function loop  