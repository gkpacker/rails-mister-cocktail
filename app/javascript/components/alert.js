import swal from 'sweetalert';

function bindDeleteButton() {
  const buttons = document.querySelectorAll(".btn-delete")
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this dose!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          const btn = document.querySelector('#btn-delete');
          const url = btn
          swal("Poof! Your dose has been deleted!", {
            icon: "success",
          });
          $.ajax({
            type: "DELETE",
            url: btn.dataset["url"],
          });
        } else {
          swal("Your dose is safe!");
        }
      });
    });
  });
}

export { bindDeleteButton };

