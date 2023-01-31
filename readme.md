Install dependencies
--------------------

    $ composer install

Set up application credentials
------------------------------

    $ cp .env.example .env

Edit the `.env` file and set the `SDK_APP_ID` and `SDK_APP_AUTH_CODE` environment variables.

Set up local IP for wellnessliving.local
----------------------------------------

    $ sudo -i
    # echo "127.0.0.1 wellnessliving.local" >> /etc/hosts

Run the project
---------------

Api calls are made from  80 port. So you need to run the project with root privileges.

    $ sudo -i
    # cd <PROJECT_FOLDER>
    # php -S localhost:8000
