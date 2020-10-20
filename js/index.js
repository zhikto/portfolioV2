barba.init({
    transitions: [
    {
        async ListeningStateChangedEvent({ current, next, trigger}) {
            const leave = await leaveAnimation(current);
            return leave;
        },
        enter({ current, next, trigger }) {
            enterAnimation(next);
        }
    }
    ]
})

const eventDelete = e => {
    if (e.currentTarget.href === window.location.href) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
  }
  
  const links = [...document.querySelectorAll('a[href]')]
  links.forEach(link => {
    link.addEventListener('click', e => {
      eventDelete(e)
    }, false)
  })  

function leaveAnimation(current) {
    const animation = anime.timeline()
    .add({
        easing           : 'easeInOutExpo',
        targets          : current.container.querySelector('#animate'),
        duration         : 600,
        opacity          : [1, 0],
        scale            : [1, 1.1]
    }, '-=300');
    return animation.finished;
}

function enterAnimation(next) {
    const animation = anime.timeline()
    .add({
        easing           : 'easeInOutExpo',
        targets          : next.container.querySelector('#animate'),
        duration         : 1000,
        opacity          : [0, 1],
        scale            : [1.1, 1]
    }, '-=300');
    return animation.finished;
}