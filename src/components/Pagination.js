import DoubleLeftArrow from "../assets/img/double-left-arrow.png";
import DoubleRightArrow from "../assets/img/double-right-arrow.png";

import LeftArrow from "../assets/img/left-arrow.png";
import RightArrow from "../assets/img/right-arrow.png";

const Pagination = ({
  totalRecords,
  activePage,
  setActivePage,
  membersPerPage,
  selectedMembers,
  deleteSelected,
}) => {
  let totalPages = Math.ceil(totalRecords / membersPerPage);

  const move = (to) => {
    if (to) {
      if (activePage < totalPages) {
        setActivePage(activePage + 1);
      }
    } else {
      if (activePage > 1) {
        setActivePage(activePage - 1);
      }
    }
  };

  const moveAtExtreme = (rightExtreme) => {
    if (rightExtreme) {
      if (activePage < totalPages) {
        setActivePage(totalPages);
      }
    } else {
      if (activePage > 1) {
        setActivePage(1);
      }
    }
  };

  return (
    <div id="pagination">
      {selectedMembers.length > 0 && (
        <button onClick={() => deleteSelected()} id="delete-btn">
          Delete Selected
        </button>
      )}
      {totalPages > 0 && (
        <img
          src={DoubleLeftArrow}
          className={activePage <= 1 ? "image image-disabled" : "image"}
          onClick={() => moveAtExtreme(false)}
        />
      )}
      {totalPages > 0 && (
        <img
          src={LeftArrow}
          className={activePage <= 1 ? "image image-disabled" : "image"}
          onClick={() => move(false)}
        />
      )}
      {Array(totalPages)
        .fill("")
        .map((item, index) => {
          return (
            <button
              key={index}
              className={
                index + 1 == activePage ? "pages active-page" : "pages"
              }
              onClick={(e) => setActivePage(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
      {totalPages > 0 && (
        <img
          src={RightArrow}
          className={
            activePage >= totalPages ? "image image-disabled" : "image"
          }
          onClick={() => move(true)}
        />
      )}
      {totalPages > 0 && (
        <img
          src={DoubleRightArrow}
          className={
            activePage >= totalPages ? "image image-disabled" : "image"
          }
          onClick={() => moveAtExtreme(true)}
        />
      )}
    </div>
  );
};

export default Pagination;
