<?php
$fp = fopen('ci_store.json', 'a');
fwrite($fp, (json_encode($_GET,false)));
fclose($fp);
