let currentCount = 3;

const setIntervalID = setInterval(() => {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(setIntervalID);
  } else {
    console.log(currentCount);
    currentCount--;
  }
}, 1000);
