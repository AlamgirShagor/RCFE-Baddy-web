import React from 'react';
import { Link } from 'react-router-dom';
const Progress = () => {
    return (
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item">
            <Link class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</Link>
            </li>
            <li class="page-item"><Link class="page-link" href="#">Save</Link></li>
            
            <li class="page-item">
            <Link class="page-link" href="#">Next</Link>
            </li>
        </ul>
    </nav>
    );
};

export default Progress;