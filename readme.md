Install dependencies
--------------------

```bash
composer install
```

Set up application credentials
------------------------------

```bash
cp .env.example .env
```

Edit the `.env` file and set the `SDK_APP_ID` and `SDK_APP_AUTH_CODE` environment variables.

Set up local IP for wellnessliving.local
----------------------------------------

```bash
sudo echo "127.0.0.1 wellnessliving.local" >> /etc/hosts
```

Run the project
---------------

API calls are made from  80 port. So you need to run the project with root privileges.

```bash
sudo php -S wellnessliving.local:80
```
