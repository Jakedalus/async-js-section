function countDown(time) {
  const interval = setInterval(function() {
    
    if (time === 0) {
      console.log('Ring Ring Ring!!!');
      clearInterval(interval);
    } else {
      console.log(time);
    }
    time--;
    
  }, 1000);
}

countDown(5);