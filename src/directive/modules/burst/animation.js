export default {
  smoke: {
    left: 0,
    top: 0,
    degree: 0,
    count: 3,
    radius: { 0: 50 },
    children: {
      fill: '#3276FF',
      pathScale: 'rand(0.5, 1)',
      radius: 'rand(12, 15)',
      swirlSize: 'rand(10, 15)',
      swirlFrequency: 'rand(2, 4)',
      direction: [1, -1],
      duration: `rand(${1 * 400}, ${2 * 400})`,
      delay: 'rand(0, 75)',
      easing: 'quad.out',
      isSwirl: true,
      isForce3d: true
    }
  },
  burst: {
    left: '50%',
    top: '50%',
    radius: { 4: 19 },
    angle: 45,
    children: {
      shape: 'line',
      radius: 3,
      scale: 1,
      stroke: '#FD7932',
      strokeDasharray: '100%',
      strokeDashoffset: { '-100%': '100%' },
      duration: 400,
      easing: 'quad.out'
    }
  }
}
