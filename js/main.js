const domLight = document.querySelector('.light');
const domDark = document.querySelector('.dark');
const btn = document.querySelector('.btndark');

domDark.addEventListener('click', function(){
  document.body.classList.toggle('dark');
});