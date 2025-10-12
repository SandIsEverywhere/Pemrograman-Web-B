<!DOCTYPE html>
<html>
    <head>
        <title>Latihan AJAX JQuery</title>

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <style>
            body {width:50%; margin:0 auto;}
        </style>
    </head>
    <body>
        <h1>Ajax Mail Form</h1>

        <br></br>

        <form name="ContactForm" action="" method="post">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea class="form-control" id="message"></textarea>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
        </form>

        <div class="message-box" style="margin:10px 0px;">
        </div>

        <script src="js/jquery.min.js"></script>
        
        <script>
        $(document).ready(function() {
            $('.btn-default').click(function(e){
            var delay = 2000;
            e.preventDefault();
            var name = $('#name').val();
            if(name == ''){
            $('.message_box').html(
            '<span style="color:red;">Enter Your Name!</span>'
            );
            $('#name').focus();
            return false;
            }

            var email = $('#email').val();
            if(email == ''){
            $('.message_box').html(
            '<span style="color:red;">Enter Email Address!</span>'
            );
            $('#email').focus();
            return false;
            }
            if( $("#email").val()!='' ){
            if( !isValidEmailAddress( $("#email").val() ) ){
            $('.message_box').html(
            '<span style="color:red;">Provided email address is incorrect!</span>'
            );
            $('#email').focus();
            return false;
            }
            }

            var message = $('#message').val();
            if(message == ''){
            $('.message_box').html(
            '<span style="color:red;">Enter Your Message Here!</span>'
            );
            $('#message').focus();
               return false;
            }	

            $.ajax
            ({
            type: "POST",
            url: "ajax.php",
            data: "name="+name+"&email="+email+"&message="+message,
            beforeSend: function() {
            $('.message_box').html(
            '<img src="Loader.gif" width="25" height="25"/>'
            );
            },		 
            success: function(data)
            {
            setTimeout(function() {
            $('.message_box').html(data);
            }, delay);
            }
            });
            });
        });

        //Email Validation Function	
        function isValidEmailAddress(emailAddress) {
            var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            return pattern.test(emailAddress);
        };
        </script>
    </body>
</html>