let toastBox = document.getElementById("toastBox");
let successMsg = "Successfully submitted";
let errorMsg = "Something went wrong";
let invalidMsg = "Invalid input, check again";

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML = 'Sucess';
    toastBox.appendChild(toast);
}