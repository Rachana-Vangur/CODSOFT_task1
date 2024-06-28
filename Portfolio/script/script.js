
//scroll to view  workinggg

function view(idName){
    var viewElement = document.getElementById(idName);
    viewElement.scrollIntoView({behavior: 'smooth'});
}


function git_dc(){
    url = 'https://github.com/Rachana-Vangur/Data-Compression'
    window.open(url)
}
function git_expos(){
    url = 'https://github.com/Rachana-Vangur/ExpOS'
    window.open(url)
}
function git_pswd(){
    url = 'https://github.com/Rachana-Vangur/Python-/tree/main/password_manager'
    window.open(url)
}
function git_emailSen(){
    url = 'https://github.com/Rachana-Vangur/Python-/tree/main/automatic_email_sender'
    window.open(url)
}
function git_url(){
    url = 'https://github.com/Rachana-Vangur/Python-/tree/main/url_shortener'
    window.open(url)
}
function git_cc(){
    url = 'https://github.com/Rachana-Vangur/Python-/tree/main/Currency_converter'
    window.open(url)
}



function skills(){
    var element = document.getElementsByClassName("skill-box");


    for(var i = 0; i < element.length; i++){
        element[i].style.boxShadow = "5px 5px 20px 0px #28282B";
    }
}