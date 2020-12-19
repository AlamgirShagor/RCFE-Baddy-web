import { Link } from 'react-router-dom';
import React from 'react';

const TopPagination = () => {
  return (
    <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item"><Link class="page-link" to="/">1</Link></li>
      <li class="page-item"><Link class="page-link" to="/">2</Link></li>
      <li class="page-item"><Link class="page-link" to="/">3</Link></li>
      <li class="page-item"><Link class="page-link" to="/">4</Link></li>
      <li class="page-item"><Link class="page-link" to="/">5</Link></li>
      <li class="page-item"><Link class="page-link" to="/">6</Link></li>
      <li class="page-item"><Link class="page-link" to="/">7</Link></li>
      <li class="page-item"><Link class="page-link" to="/">8</Link></li>
      <li class="page-item"><Link class="page-link" to="/">9</Link></li>
      <li class="page-item"><Link class="page-link" to="/">10</Link></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
</nav>
  );
};

export default TopPagination;