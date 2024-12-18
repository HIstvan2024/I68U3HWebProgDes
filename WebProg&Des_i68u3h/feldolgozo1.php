<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Feldolgozó 1</title>
</head>

<body>

    <?php

    if (isset($_POST)) {
        echo "<h2>Űrlap adatok</h2>";

        $nev = $_POST["nev"];
        $tel = $_POST["tel"];
        $email = $_POST["email"];
        $company = $_POST["company"];
        $subject = $_POST["subject"];
        $confidence = $_POST["confidence"];

        echo "<p><strong>Név:</strong> " . $nev . "</p>";
        echo "<p><strong>Telefonszám:</strong> " . $tel . "</p>";
        echo "<p><strong>E-mail:</strong> " . $email . "</p>";
        echo "<p><strong>Cégnév:</strong> " . $company . "</p>";
        echo "<p><strong>Tárgy:</strong> " . $subject . "</p>";
        echo "<p><strong>Prioritás:</strong> " . $confidence . "</p>";
    } else {
        echo "<h2>Űrlap nem lett beküldve!</h2>";
    }
    ?>

    <a href="i68u3h_kapcsolat.html">Vissza az űrlapra.</a>

</body>

</html>