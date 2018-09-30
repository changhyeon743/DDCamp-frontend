let login_action = function() {
    // console.log({
    //     id: document.forms["login"]["id"].value,
    //     password: document.forms["login"]["password"].value
    // })

    // return true;
    $.post( "http://localhost:3000/login", {
        id:document.forms["login"]["id"].value,
        password:document.forms["login"]["password"].value,
    }, function(res) {
        console.log(res)
    }, 'json' /* xml, text, script, html */)
        .fail(function(jqXHR) {
            alert(jqXHR);
        })
};

function register_action() {
    $.post( "http://localhost:3000/register", {
        id:document.forms["register"]["id"].value,
        password:document.forms["register"]["password"].value,
        name:document.forms["register"]["name"].value,
    }, function(res) {
        console.log(res)
    }, 'json' /* xml, text, script, html */)
        .fail(function(jqXHR) {
            alert(jqXHR);
        })
};

