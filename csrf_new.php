<?php
require __DIR__ . '/_init.php';

use Src\WlConfig;
use WellnessLiving\WlRegionSid;


if(empty( $_GET[ 's_key_session' ] )) {
    echo json_encode(['s_error' => "'s_key_session' parameter is empty."]);
    exit;
}

$config = WlConfig::create(WlRegionSid::AP_SOUTHEAST_2);

try {

    $s_csrf = $config->csrfCode( $_GET[ 's_key_session' ] );

    echo json_encode([ 's_csrf' => $s_csrf ]);
    exit;

} catch ( \Exception $e ) {

    echo json_encode( [ 's_error' => $e->getMessage() ] );
    exit;

}

