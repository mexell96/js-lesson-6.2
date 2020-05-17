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


