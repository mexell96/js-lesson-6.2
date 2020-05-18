//  * 2. Написать код, чтобы при нажатии на li 
//  *  2.1 его текст становился жирным 
//  *  2.2 его текст (!) выводился в alert 
    
//     при нажатии вне ul выделение слетает (на пустом месте страницы)

const lishki = document.getElementById('classs1');
lishki.addEventListener('click', function (ev) {
   if (ev.target.nodeName === 'LI') {
   ev.target.classList.add('beader');
   }
});

const pop = document.getElementsByTagName('li');


const veader = document.getElementById('veader');
veader.addEventListener('click', function (header) {
   if (header.target.nodeName !== "LI") {
      for (let i = 0; i < pop.length; i++) {
         pop[i].classList.remove('beader');
      }
   }
});


lishki.addEventListener('click', function (ev) {
   if (ev.target.nodeName === 'LI') {
      let wer = ev.target; 
      let fyt = wer.firstChild;
      let rev = fyt.textContent;
      alert(rev);
   }
});
