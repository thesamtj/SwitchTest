<!DOCTYPE html>
<html>
<head>
<title>Testing the switch statement</title>
<script>
var age = prompt("How old are you?");
</script>
</head>
<body>
<script>
switch (true) {
    case (age < 18):
        alert("Sorry, you are too young to play");
    break;
    case (age < 50):
        alert("Welcome to the game!");
    break;
    case (age >= 50):
        alert("Sorry, you are too old to play");
}
</script>
</body>
</html>
