/**
 * @param {HTMLElement} element
 * @param {Keyframe[] | PropertyIndexedKeyframes} to
 * @param {KeyframeAnimationOptions} options
 */
function animateTo(element, to, options) {
  const anim = element.animate(
    to,
    { ...options, fill: 'both' },
  );
  anim.addEventListener('finish', () => {
    anim.commitStyles();
    anim.cancel();
  });
  return anim;
}

/**
 * @param {HTMLElement} element
 * @param {PropertyIndexedKeyframes} from
 * @param {KeyframeAnimationOptions} options
 */
function animateFrom(element, from, options) {
  return element.animate(
    { ...from, offset: 0 },
    { ...options, fill: 'backwards' },
  );
}

export { animateTo, animateFrom };

// source: Jake Archibald - https://gist.github.com/jakearchibald/0b50c4918eaf9a67bfcfa55e7e61cd56
