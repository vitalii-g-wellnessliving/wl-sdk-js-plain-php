<?php

namespace Src;

use WellnessLiving\Config\WlConfigDeveloper;

class WlConfig extends WlConfigDeveloper
{
    /**
     * @inheritDoc
     */
    const AUTHORIZE_CODE = SDK_APP_AUTH_CODE;

    /**
     * @inheritDoc
     */

    const AUTHORIZE_ID = SDK_APP_ID;
    /**
     * @inheritDoc
     */
    const COOKIE_PERSISTENT = 'dp';

    /**
     * @inheritDoc
     */
    const COOKIE_TRANSIENT = 'dt';


}
