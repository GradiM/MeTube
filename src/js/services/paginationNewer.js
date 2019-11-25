const paginationNewer = () => {
  let html = '';
  html += `
      <li id="newerPage" class="page-item"><!--disabled-->
         <!-- <a class="page-link" href="../../../index.html?page=$number">Newer &rarr;</a> -->
          <button class="page-link">Newer &rarr;</button>
      </li>
  `;

  return html;
};

export default paginationNewer;