/**
 * Configurations for SDK.
 * @augments WlSdk_Config_MixinAbstract
 * * @mixes WlSdk_Config_MixinAbstract
 **/
function WlSdk_Config_Mixin() {
}

WlSdk_Config_MixinAbstract.extend(WlSdk_Config_Mixin);

/**
 * Login for application authorization.
 * @type {string}
 **/
WlSdk_Config_Mixin.CONFIG_AUTHORIZE_ID = SDK_APP_ID;

/**
 * Code for CSRF protection.
 **/
WlSdk_Config_Mixin.CSRF_CODE = SDK_CSRF_CODE; // Set variable with your CSRF code.

/**
 * Session type.
 * @type {string}
 **/
WlSdk_Config_Mixin.SESSION = 'cookie';

/**
 * URL of the API server (including trailing slash).
 * @type {string}
 **/
WlSdk_Config_Mixin.URL_API = 'https:"//demo.wellnessliving.com/';

/**
 * URL of the API where secret key for signature may be generated.
 * @type {string}
 **/
WlSdk_Config_Mixin.URL_CSRF = '/secret.php';  // Example of API URL.

/**
 * Region id in which information about this business is stored.
 * One of {@link WlSdk_Config_ConfigRegionSid} fields.
 *
 * @type {number}
 */
WlSdk_Config_Mixin.ID_REGION = WlSdk_Config_ConfigRegionSid.AP_SOUTHEAST_2;