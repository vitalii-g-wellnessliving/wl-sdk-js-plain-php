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
// WlSdk_Config_Mixin.SESSION = 'cookie';

/**
 * URL of the API server (including trailing slash).
 * @type {string}
 **/
WlSdk_Config_Mixin.URL_API = 'https:"//demo.wellnessliving.com/';

/**
 * URL of the API where secret key for signature may be generated.
 * @type {string}
 **/
WlSdk_Config_Mixin.URL_CSRF = '/csrf_new.php';

/**
 * Region id in which information about this business is stored.
 * One of {@link WlSdk_Config_ConfigRegionSid} fields.
 *
 * @type {number}
 */
WlSdk_Config_Mixin.ID_REGION = WlSdk_Config_ConfigRegionSid.AP_SOUTHEAST_2;

/**
 * Returns CSRF code based on session key.
 *
 * @param {string} s_session_key Session key.
 * @return {WlSdk_Deferred_Promise} Promise that will be resolved when CSRF code is ready to use.
 */
WlSdk_Config_Mixin.csrfCode = function (s_session_key) {
    var o_defer = WlSdk_Config_Mixin.configDeferredCreate();

    // If saved already.
    // Note. You can output CSRF code into variable during the page is rendered, if it is saved in a cookie or session.
    // Additional check that CSRF code is valid - s_session_key.substr(0,5) === CSRF_CODE_VARIABLE.substr(-5,5).
    if (typeof WLSDK_CSRF_CODE_VARIABLE !== 'undefined' && s_session_key.substr(0, 5) === WLSDK_CSRF_CODE_VARIABLE.substr(-5, 5))
        return o_defer.resolve(WLSDK_CSRF_CODE_VARIABLE).promise();

    var url = WlSdk_Config_Mixin.URL_CSRF; // URL to get CSRF code on your server.
    url = WlSdk_Core_Url.variable(url, {
        's_key_session': s_session_key
    });

    fetch(url, {
        'method': 'GET',
        'mode': 'same-origin',
        'cache': 'no-cache',
        'credentials': 'include'
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        WLSDK_CSRF_CODE_VARIABLE = data['s_csrf']; // saving CSRF code
        o_defer.resolve(data['s_csrf']);
    }).catch(function (error) {
        o_defer.reject({'s_message': error['s_error']});
    });

    return o_defer.promise();
};
