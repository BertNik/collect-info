# collect-info
collects browser info via get parameters in js with corresponding PHP script that logs the data to a file.

# run
$ git clone git@github.com:BertNik/collect-info.git

$ cd collect-info

$ php -S localhost:[port#] (starts dev web server http://php.net/manual/en/features.commandline.webserver.php)

Then, request http://localhost:[port#]

Supposing permissions are correctly set on directory containing git repo, the php script should store a file containing the client information of the browser.
