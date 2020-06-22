function timer(){
  var el = document.querySelector('.odometer');

  v = 4020.54

  od = new Odometer({
    el: el,
    value: 333555,
    format: '( ddd).dd',
    animation: 'count',
    duration: 3000
  });

  setInterval(function(){ od.update(v=v+1); }, 2000);
}
