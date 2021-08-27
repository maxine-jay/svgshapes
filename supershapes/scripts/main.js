anime({
    targets: '#tunnel circle',
    scale: 1.1,
    duration: 250,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutCubic',
    delay: (el, index) => index * 50,
});

anime({
    targets: '.conveyor',
    translateX: '-50%',
    duration: 1500,
    loop: true,
    easing: 'linear',
});

anime({
    targets: '#zigzag path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    direction: 'alternate',
    loop: true
});

anime({
    targets: '#wave path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    direction: 'alternate',
    loop: true
});

/**
 * Duplicates element's innerHTML
 * @param {*} element 
 * @param {*} quantity 
 */
const duplicateHTML = (element, quantity) => {
    const content = element.innerHTML;
    const newContent = new Array(quantity).fill(content).join('');
    element.innerHTML = newContent;
}

const crosses = document.querySelector('#crosses');
duplicateHTML(crosses, 10);


duplicateHTML(document.querySelector('#dots'), 40);
const dots = document.querySelectorAll('#dots .dot');
dots.forEach(dot => {
    anime({
        targets: dot,
        rotate: (el, i) => anime.random(90, 360),
        translateX: (el, i) => anime.random(-4, 4),
        translateY: (el, i) => anime.random(-4, 4),
        delay: (el, i) => anime.random(0, 500),
        duration: (el, i) => anime.random(250, 750),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
    });
});

anime({
    targets: '#crosses path',
    rotate: '1turn',
    delay: (el, i) => i * 500,
    duration: 1400,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
});

duplicateHTML(document.querySelector('#circles'), 20);

anime({
    targets: '#circles .dot',
    scale: [0, 1.2],
    loop: true,
    delay: (el, i) => i * 100,
    duration: 250,
    direction: 'alternate',
    easing: 'easeInOutSine'
});

anime({
    targets: '#flashes .flash',
    // we put the colors into an array and grab each one by its index
    backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
    // apply a random delay to each one
    delay: (el, i) => anime.random(50, 150),
    duration: 800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
})

anime({
    targets: '#squares rect',
    translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
    rotate: [45, 0, -45],
    delay: (el, i) => i * 75,
    duration: (el, i) => 800,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
})