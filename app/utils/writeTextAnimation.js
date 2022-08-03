export default function writeText(words, id) {
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const target = document.getElementById(id);

  setInterval(() => {

    if (letterCount === 0 && waiting === false) {

      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);

      setTimeout(() => {

        let usedWord = words.shift();
        words.push(usedWord);
        x = 1;

        letterCount += x;
        waiting = false;

      }, 1000)

    } else if (letterCount === words[0].length + 1 && waiting === false) {

      waiting = true;

      setTimeout(() => {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)

    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120)
}