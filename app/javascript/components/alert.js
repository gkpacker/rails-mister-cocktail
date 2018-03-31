import swal from 'sweetalert';

function bindDeleteButton() {
  document.getElementById('btn-delete').addEventListener('click', (event) => {
    event.preventDefault();
    // event.stopPropagation();
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
        // window.location = btn
        $.ajax({
          type: "DELETE",
          url: btn.dataset["url"],
          // data: btn.dataset["url"],
          // success: function() {
          //   btn.trigger("click")
          // }
        });
      } else {
        swal("Your dose is safe!");
      }
    });
  });
}

 // function(isConfirm){
 //        if (isConfirm) form.submit();
 //    });



// domLoadAlert = document.addEventListener("DOMContentLoad", bindSweetAlertButtonDemo())

export { bindDeleteButton };

