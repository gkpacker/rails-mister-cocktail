import swal from 'sweetalert';

function bindSweetAlertButtonDemo() {

  document.getElementById('sweet-alert-demo').addEventListener('click', () => {
    swal({
      title: "A nice alert",
      text: "This is a great alert, isn't it?",
      icon: "success"
    })
  });
}

domLoadAlert = document.addEventListener("DOMContentLoad", bindSweetAlertButtonDemo())

export { domLoadAlert };

