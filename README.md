# BlogMedia

A blogging social media site, built with React and Django.

## Local Setup

Pull this repository. Create a `.env` file and fill with the relevant environment variables.

To create a DJANGO_SECRET_KEY:

```python
from django.core.management.utils import get_random_secret_key

print(get_random_secret_key())
```

To get this project running, run:

`sudo docker-compose build`

`sudo docker-compose up`

See frontend: `http://localhost:3000`

See backend: `http://localhost:8000`

See Django admin: `http://localhost:8000/admin`

Sign into backend container: `sudo docker exec -it blogmedia-app bash`

Make db migrations: sign into backend container and then run `python manage.py migrate`

Signing into database: `sudo docker exec -it blogmedia-db psql -U dev blogmedia-db`

Installing npm package: `sudo docker exec blogmedia-web npm install --save <package-name>`
