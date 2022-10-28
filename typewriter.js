// Sentence to type
let sentence = "hello there from lighthouse labs";

// Add a newline character to the end
sentence += "\n";

// Set the time delay
let time = 250;

// Iterate through the characters of sentence
for (const char of sentence) {

  // Print each character 250ms after the other
  setTimeout(() => {
    process.stdout.write(char);
  }, time);

  // Increment the time by 250ms
  time += 250;
}