(function () {
  function replayAnimation(e, query) {
    var target = query ? e.currentTarget.querySelector(query) : e.currentTarget;

    target.style.display = 'none';

    setTimeout(function () {
      target.style.display = 'block';
    }, 10);
  }

  function replayAnimationPartial(query) {
    return function (e) { return replayAnimation(e, query); }
  }

  document.querySelector('.logo').addEventListener('click', replayAnimationPartial('svg'));
  document.querySelector('.not-for-hire').addEventListener('click', replayAnimation);
}());
