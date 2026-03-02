import { useDispatch } from "react-redux";

const Pagination =({ currentPage, totalPages, onPageChange }) =>{
    const dispatch = useDispatch();

    const handleChangePage= (page) => {
      if(onPageChange){
        onPageChange(page);
      };

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return(<>
        <div className="py-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center align-items-center gap-2">
                  <li className={`page-item ${currentPage === 1 ? 'disabled': ''}`}>
                    <button className="page-link pagination-icon" type="button"
                            onClick={()=>handleChangePage(1)}>
                      <span className="material-symbols-outlined align-bottom fill fs-5">
                        skip_previous
                      </span>
                    </button>
                  </li>
                  <li className={`page-item ${currentPage === 1 ? 'disabled': ''}`}>
                    <button className="page-link pagination-icon" type="button"
                            onClick={()=>handleChangePage(currentPage - 1, 1)}>
                      <span className="material-symbols-outlined align-bottom fs-5">
                        chevron_left
                      </span>
                    </button>
                  </li>
                  {Array.from({length: totalPages}, (_, i) =>(
                    <li className={`page-item ${currentPage === i+1 ? 'active' : ''}`} 
                        key={ i +1 }>
                        <button className="page-link" type="button"
                                onClick={()=> handleChangePage( i +1 )}>
                            <span className="align-text-bottom">{ i +1 }</span>
                        </button>
                    </li>
                        ) 
                    )}
                  <li className={`page-item ${currentPage === totalPages ? 'disabled': ''}`}>
                    <button className="page-link pagination-icon" type="button"
                            onClick={()=>handleChangePage(currentPage + 1, totalPages)}>
                      <span className="material-symbols-outlined align-bottom fs-5">
                        chevron_right
                      </span>
                    </button>
                  </li>
                  <li className={`page-item ${currentPage === totalPages ? 'disabled': ''}`}>
                    <button className="page-link pagination-icon" type="button"
                            onClick={()=>handleChangePage(totalPages)}>
                      <span className="material-symbols-outlined align-bottom fill fs-5">
                        skip_next
                      </span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
    </>)
}

export default Pagination;