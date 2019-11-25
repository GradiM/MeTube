const paginationOlder = () => {
  let html = '';
  html += `
      <li id="olderPage" class="page-item">
          <!--<a class="page-link" href="../../../index.html?page=$number">&larr; Older</a>-->
          <button class="page-link">&larr; Older</button>
      </li>
  `;

  return html;
};

export default paginationOlder;