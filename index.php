<?php
require __DIR__ . '/_init.php';

use Src\Csrf;

$s_csrf = (new Csrf())->get();
$sdk_app_id = SDK_APP_ID;

echo "<script type=\"text/javascript\">
        const SDK_CSRF_CODE = '$s_csrf';
        const SDK_APP_ID = '$sdk_app_id';
      </script>";
?>

<html>

<!-- SDK -->
<script src="wl-sdk-js/Wellnessliving/Core/Js/Php/get_class.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/Core/Js/Php/empty.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/Core/CoreDate.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/Core/CoreUrl.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/Deferred/SdkDeferred.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/Deferred/SdkPromise.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/AssertException.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/Config/ConfigRegionSid.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/Config/ConfigAbstractMixin.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/AuthorizationSignature.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/ModelAbstract.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/sha256.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/sha3.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/SyncError.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/Core/Passport/Login/Enter/EnterModel.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/Core/Passport/Login/Enter/NotepadModel.js" type="text/javascript"></script>
<script src="wl-sdk-js/Wellnessliving/Core/Request/Api/KeySessionModel.js" type="text/javascript"></script>

<!-- SDK config -->
<script src="/SdkConfigMixin.js" type="text/javascript"></script>

<!-- JS application -->
<script src="src/app.js" type="text/javascript"></script>


</html>
