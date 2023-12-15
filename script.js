let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa-solid fa-circle-check" style="color:green;"></i> Successfully submitted ';
let errorMsg = '<i class="fa-solid fa-circle-exclamation" style="color:red;"></i>Something went wrong';
let invalidMsg = ' <i class="fa-solid fa-triangle-exclamation" style="color:orange;"></i>"Invalid input, check again';

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    setTimeout(() => {
        toastBox.removeChild(toast);
    }, 2000);
}