document.querySelector('.logo').addEventListener('click', function replayAnimation(e) {
  var target = e.currentTarget;

  target.style.display = 'none';

  setTimeout(function () {
    target.style.display = 'block';
  }, 10);
});
