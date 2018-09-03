<?php

$writeToFile = function(){
    $fp = fopen('ci_store.json', 'a');
    fwrite($fp, json_encode(array( time() => $_GET['ci']))."\n");
    fclose($fp);
};
if(isset($_GET['ci'])){
    $writeToFile();
}

