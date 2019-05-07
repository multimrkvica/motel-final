$(document).ready(function() {

    $(function() {
        $("#email_error_poruka").hide();
        $("#ime_error_poruka").hide();
        $("#prezime_error_poruka").hide();

        var error_email = false;
        var error_ime = false;
        var error_prezime = false;

        $("#email").focusout(function() {
            check_email();
        });
        $("#ime").focusout(function() {
            check_ime();
        });
        $("#prezime").focusout(function() {
            check_prezime();
        });

        function check_ime() {
            var patern = /^[a-zA-Z +]*$/;
            var ime = $("#ime").val()
            if (patern.test(ime) && ime !== '') {
                $("#ime_error_poruka").hide();
                $("#ime").css("border-botton", "2px solid #34F458");
            } else {
                $("#ime_error_poruka").html("Treba da sadrži samo slova");
                $("#ime_error_poruka").show();
                $("#ime").css("border-botton", "2px solid #F90A0A");
                error_ime = true;
            }
        }

        function check_prezime() {
            var patern = /^[a-zA-Z +]*$/;
            var prezime = $("#prezime").val()
            if (patern.test(prezime) && prezime !== '') {
                $("#prezime_error_poruka").hide();
                $("#prezime").css("border-botton", "2px solid #34F458");
            } else {
                $("#prezime_error_poruka").html("Treba da sadrži samo slova");
                $("#prezime_error_poruka").show();
                $("#prezime").css("border-botton", "2px solid #F90A0A");
                error_prezime = true;
            }
        }

        function check_email() {
            var patern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email = $("#email").val()
            if (patern.test(email) && email !== '') {
                $("#email_error_poruka").hide();
                $("#email").css("border-botton", "2px solid #34F458");
            } else {
                $("#email_error_poruka").html("Nevažeći email");
                $("#email_error_poruka").show();
                $("#email").css("border-botton", "2px solid #F90A0A");
                error_email = true;
            }
        }
        $("#forma").submit(function() {
            error_email = false;
            error_ime = false;
            error_prezime = false;

            check_email();
            check_ime();
            check_prezime();

            if (error_email === false && error_ime === false && error_prezime === false) {
                alert("Rezervacija je uspešna");
                return true;
            } else {
                alert("Molimo vas popunite formu");
                return false;
            }
        })
    })
});