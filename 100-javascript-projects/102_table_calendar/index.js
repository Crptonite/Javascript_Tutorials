document.getElementById('showMoreBtn').addEventListener('click', () => {
    const moreWeeks = document.getElementById('moreWeeks');
    moreWeeks.style.display = 'table-row-group'; // or 'contents' if using HTML5
    document.getElementById('showMoreBtn').style.display = 'none';
  });
  