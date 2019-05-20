document.querySelector('th').addEventListener('click', sortTable);

function sortTable () {   
  const tbody = grid.getElementsByTagName('tbody')[0];
  const rows = [].slice.call(tbody.rows);
  
  rows.sort(function(a, b) {
    const age = a.cells[0].firstChild.data;
    const name = b.cells[0].firstChild.data;
    return age - name
  });
  
  const parent = rows[0].parentNode;
  
  rows.forEach(function(row) {
    parent.appendChild(row);
  });
  
}
