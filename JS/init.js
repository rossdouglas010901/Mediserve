function updateRequested(medicare, firstName, lastName, birthday, alergies, recentComplaints, complaint){
    var patch = {
        "Medicare" : medicare,
        "FirstName" : firstName,
        "LastName" : lastName,
        "Birthday" : birthday,
        "Alergies" : alergies,
        "RecentComplaints" : recentComplaints,
        "Complaint" : complaint
    }
    
    $.ajax({
       type: 'post',
       url: 'https://mediserve-d7f66.firebaseio.com/clients/'+ medicare + '.json',
       data: JSON.stringify(patch),
       processData: false,
       contentType: 'application/merge-patch+json',
    });
    console.log("Updated Paitent'" + medicare + "'");
}

function complete(){
    var firstName =  document.getElementById("firstname").value; 
    console.log(firstName);

    var lastName =  document.getElementById("lastname").value; 
    console.log(lastName);

    var birthday =  document.getElementById("birthday").value; 
    console.log(birthday);

    var alergies =  document.getElementById("alergies").value; 
    console.log(alergies);

    var medicare =  document.getElementById("medicare").value; 
    console.log(medicare);

    var recentComplaints =  document.getElementById("recentComplaints").value; 
    console.log(recentComplaints);

    var complaint =  document.getElementById("complaint").value; 
    console.log(complaint);

    //validation
    if(firstName == ''){
        var err = "<p class='text-danger'>Please Input Your First Name</p>";
        document.getElementById('firstname').insertAdjacentHTML( 'beforeend', err );
    }else if(lastName == ''){
        var err = "<p class='text-danger'>Please Input Your Last Name</p>";
        document.getElementById('lastname').insertAdjacentHTML( 'beforeend', err );
    }else if(birthday == ''){
        var err = "<p class='text-danger'>Please Input Your Birthday</p>";
        document.getElementById('birthday').insertAdjacentHTML( 'beforeend', err );
    }else if(alergies == ''){
        var err = "<p class='text-danger'>Please Input Your Alergies, if you dont have any put 'none'</p>";
        document.getElementById('alergies').insertAdjacentHTML( 'beforeend', err );
    }else if(medicare == ''){
        var err = "<p class='text-danger'>Please Input Your Medicare Card Number</p>";
        document.getElementById('medicare').insertAdjacentHTML( 'beforeend', err );
    }else if(recentComplaints == ''){
        var err = "<p class='text-danger'>Please Input Your Recemt Medical visits, if you havent had any please put 'none'</p>";
        document.getElementById('recentComplaints').insertAdjacentHTML( 'beforeend', err );
    }else if(complaint == ''){
        var err = "<p class='text-danger'>Please Input Your Current medical complaint/p>";
        document.getElementById('complaint').insertAdjacentHTML( 'beforeend', err );
    }else{
        updateRequested(medicare, firstName, lastName, birthday, alergies, recentComplaints, complaint);
        document.getElementById('questions').style.display = "none";
        document.getElementById('complete').style.display = "block";
    }
}

function home(){
    var url = "../index.html";
    window.location.href = (url);
}

function back(){
    window.history.back();
}

function search(){
    console.log("Opening iFrame");
    var medicare =  document.getElementById("medicare").value; 
    console.log(medicare);
    // var txt = loadJSON('https://mediserve-d7f66.firebaseio.com/clients/' + medicare + '.json', 'jsonp');
    // var obj = JSON.parse(txt);
    // document.getElementById("demo").innerHTML = obj.FirstName + ", " + obj.Birthday;
    document.getElementById("results").src = 'https://mediserve-d7f66.firebaseio.com/clients/'+ medicare + '.json';
    document.getElementById('results').style.display = "block";
    // var data = JSON.parse('https://mediserve-d7f66.firebaseio.com/clients/' + medicare + '.json');
    // console.log(data);
}

function loadData(){
    $.getJSON('https://mediserve-d7f66.firebaseio.com/clients/' + medicare + '.json');
    return 
}