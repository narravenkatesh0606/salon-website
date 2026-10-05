function register(type){
    let box = document.querySelector(`#${type}`);
    let email = box.querySelector('input[type="email"]').value;
    let password = box.querySelector('input[type="password"]').value;
    if(email === "" || password === ""){
        alert('please enter email and password');
        return;
    }
    localStorage.setItem(type + "Email", email);
    localStorage.setItem(type + "Password", password);
    alert('Registration successful! Now can you login in');
    box.querySelector('input[type="email"]').value = "";
box.querySelector('input[type="password"]').value = "";
    bootstrap.Modal.getInstance(box).hide();
}
function login(type){
    let box = document.querySelector(`#${type}`);
    let email = box.querySelector('input[type="email"]').value;
    let password = box.querySelector('input[type="password"]').value;
    if(email === "" || password === ""){
        alert('please enter email and password');
    return;
    }
    if(email === localStorage.getItem(type + "Email") && password === localStorage.getItem(type + "Password")){
        alert('login successful!');
        bootstrap.Modal.getInstance(box).hide();
    }else {
        alert('Invalid email or password');
    }
}

function addStaff() {

    let box = document.querySelector('#staff');

    let name = box.querySelector('input[type="text"]').value;
    let service = box.querySelector('select').value;
    let experience = box.querySelectorAll('input[type="text"]')[1].value;
    let phone = box.querySelector('input[type="tel"]').value;
    let time = box.querySelector('input[type="time"]').value;

    if (name === "" || service === "Select Service" || experience === "" || phone === "" || time === "") {
        alert("Please enter all staff details");
        return;
    }

    localStorage.setItem("stylistName", name);
    localStorage.setItem("stylistService", service);
    localStorage.setItem("stylistExperience", experience);
    localStorage.setItem("stylistPhone", phone);
    localStorage.setItem("stylistTime", time);

    alert("Staff added successfully");

    box.querySelectorAll('input').forEach(input => input.value = "");
    box.querySelector('select').selectedIndex = 0;
}

function addBooking() {

    let box = document.querySelector('#booking');

    let name = box.querySelector('input[type="text"]').value;
    let email = box.querySelector('input[type="email"]').value;
    let phone = box.querySelector('input[type="number"]').value;
    let date = box.querySelector('input[type="date"]').value;
    let time = box.querySelector('input[type="time"]').value;

    if (name === "" || email === "" || phone === "" || date === "" || time === "") {
        alert("Please enter all booking details");
        return;
    }

    localStorage.setItem("customerName", name);
    localStorage.setItem("customerEmail", email);
    localStorage.setItem("customerPhone", phone);
    localStorage.setItem("appointmentDate", date);
    localStorage.setItem("appointmentTime", time);

    alert("Booking added successfully");

    box.querySelectorAll('input').forEach(input => input.value = "");
}

function checkAvailability() {

    let box = document.querySelector('#timeSlot');

    let date = box.querySelector('input[type="date"]').value;
    let service = box.querySelector('select').value;
    let stylist = box.querySelector('input[type="text"]').value;
    let time = box.querySelector('input[type="time"]').value;

    if (date === "" || service === "Select Service" || stylist === "" || time === "") {
        alert("Please enter all details");
        return;
    }

    alert("Time slot is available");

}

function addOffer() {

    let box = document.querySelector('#offer');

    let name = box.querySelector('input[type="text"]').value;
    let service = box.querySelector('select').value;
    let discount = box.querySelector('input[type="number"]').value;
    let date = box.querySelector('input[type="date"]').value;

    if (name === "" || service === "Select Service" || discount === "" || date === "") {
        alert("Please enter all offer details");
        return;
    }

    localStorage.setItem("offerName", name);
    localStorage.setItem("offerService", service);
    localStorage.setItem("offerDiscount", discount);
    localStorage.setItem("offerDate", date);

    alert("Offer added successfully");

    box.querySelectorAll('input').forEach(input => input.value = "");
    box.querySelector('select').selectedIndex = 0;
}


function addMembership() {

    let box = document.querySelector('#membership');

    let name = box.querySelector('input[type="text"]').value;
    let plan = box.querySelector('input[type="tel"]').value;
    let phone = box.querySelector('input[type="number"]').value;
    let startDate = box.querySelector('input[type="date"]').value;

    let numbers = box.querySelectorAll('input[type="number"]');
    let duration = numbers[1].value;
    let price = numbers[2].value;

    if (name === "" || plan === "" || phone === "" || startDate === "" || duration === "" || price === "") {
        alert("Please enter all membership details");
        return;
    }

    localStorage.setItem("memberName", name);
    localStorage.setItem("memberPlan", plan);
    localStorage.setItem("memberPhone", phone);
    localStorage.setItem("memberStartDate", startDate);
    localStorage.setItem("memberDuration", duration);
    localStorage.setItem("memberPrice", price);

    alert("Membership added successfully");

    box.querySelectorAll('input').forEach(input => input.value = "");
}
