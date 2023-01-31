<?php
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

define('SDK_APP_ID', $_ENV['SDK_APP_ID' ]);
define('SDK_APP_AUTH_CODE', $_ENV['SDK_APP_AUTH_CODE']);
