<?php
require __DIR__ . '/_init.php';

use Src\Csrf;
use Src\WlConfig;
use WellnessLiving\Core\Request\Api\KeySecretModel;
use WellnessLiving\WlRegionSid;


if(empty($_GET['s_key_session']))
{
    echo json_encode(['s_error' => "'s_key_session' parameter is empty."]);
    exit;
}


$s_csrf = (new Csrf())->get();

if(empty($_GET['s_csrf'])||$_GET['s_csrf']!==$s_csrf)
{
    echo $_GET['s_csrf'].' '.$s_csrf;
    echo json_encode(['s_error' => "Page has a wrong code."]);
    exit;
}


$o_config = WlConfig::create(WlRegionSid::AP_SOUTHEAST_2);

$o_secret = new KeySecretModel($o_config);
$o_secret->s_csrf = $_GET['s_csrf'];
$o_secret->s_key_session = $_GET['s_key_session'];
$o_secret->url_origin = 'http://wellnessliving.local';
try
{
    $o_secret->get();
}
catch(\WellnessLiving\WlUserException $e)
{
    echo json_encode(['s_error' => $e->getMessage()]);
    exit;
}

echo json_encode(['s_key_secret' => $o_secret->s_key_secret]);
exit;
