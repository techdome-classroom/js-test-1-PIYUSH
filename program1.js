const getTotalIsles = function (grid) {


  // write your code here
  if (!grid || grid.length === 0) return 0;

  let count = 0; // for island
  const rows = grid.length;
  const cols = grid[0].length;

  function findIsland(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W') return;

    grid[r][c] = 'W';  // land visited memoize it
    findIsland(r + 1, c);
    findIsland(r - 1, c);
    findIsland(r, c + 1);
    findIsland(r, c - 1);
  }

  // looping for each island
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 'L') {
        count++;
        findIsland(r, c);
      }
    }
  }

  return count;

};

module.exports = getTotalIsles;
