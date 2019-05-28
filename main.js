const table = document.getElementById('grid');

table.addEventListener('click', event => {
  const target = event.target.closest('[data-type]');
  const tbody = table.querySelector('tbody');
  const sortType = target.dataset.type;
  const column = target.cellIndex;
  const rows = Array.prototype.slice.call(tbody.rows);
  
  rows.sort((a, b) => {
    const valueA = a.cells[column].firstChild.data;
    const valueB = b.cells[column].firstChild.data;

    if (sortType === 'string') {
      return valueA.localeCompare(valueB);
    } if (sortType === 'number') {
      return +valueA - +valueB;
    }
    return 0;   
  });

  const parent = rows[column].parentNode;
  
  rows.forEach(row => {
    parent.appendChild(row);
  });  
})
