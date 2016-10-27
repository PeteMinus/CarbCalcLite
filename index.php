<?php
$servername = "localhost";
$username = "carbhgvh_admin";
$password = "muAQAKfJq4Ret6";
$dbname = "carbhgvh_simple";


$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$action = substr($_SERVER['PATH_INFO'], 1);
$action = explode('/', $action);
if (count($action) != 2) {
    echo "{}";
    exit;
}

$function = $action[0];
$value = $action[1];
try {
    $function($conn, $value);
} catch (Excpetion $e) {
    echo "{}";
    exit;
}

function init($conn, $name)
{
    $id = md5($name . date('l jS \of F Y h:i:s A'));
    $sql = sptrinf("INSERT into simple_data (id, name) values (%s, %s)", $id, $name);
    $result = $conn->query($sql);
}

function share($conn, $id)
{
    $sql = sptrinf("INSERT into simple_sharelist (id, shared_id, name) values (%s, %s, %s)", $id, $_POST['name'], $_POST['id']);
    $result = $conn->query($sql);
}

function revoke($conn, $id)
{

}

function shareList($conn, $id)
{

}

function sharedList($conn, $id)
{

}

function get($conn, $id)
{
    $sql = sprintf("SELECT * FROM simple_data WHERE id = %s", $id);
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo json_encode($row);
        }
    } else {
        echo "{}";
    }

}

function set($conn, $user)
{
    $sql = sptrinf("UPDATE simple_data set favs = %s, current = %s WHERE id = %s");
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo json_encode($row);
        }
    } else {
        echo "{}";
    }

}

$conn->close();
?>