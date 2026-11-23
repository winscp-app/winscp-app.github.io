(function(){
  var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
  if(b&&n){
    b.addEventListener('click',function(){
      var open=document.body.classList.toggle('menu-open');
      b.setAttribute('aria-expanded',open?'true':'false');
    });
  }
  var w=[].slice.call(document.querySelectorAll('.tagline span'));
  if(!w.length)return;
  if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){w.forEach(function(s){s.classList.add('on')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=w.indexOf(e.target);setTimeout(function(){e.target.classList.add('on')},i*40);io.unobserve(e.target)}})},{rootMargin:'0px 0px -10% 0px'});
  w.forEach(function(s){io.observe(s)});
})();
