import addBookForm from '../components/forms/addBookForm';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book')) {
      console.warn('CLICKED ADD BOOK', e.target.id);
      addBookForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      console.warn('CLICKED SUBMIT BOOK', e.target.id);
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('edit-book')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default domEvents;
