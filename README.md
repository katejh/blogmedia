# BlogMedia

A blogging social media site, built with React and Django.

## Local Setup

`sudo docker-compose build`

`sudo docker-compose up`

See frontend: `http://localhost:3000`

See backend: `http://localhost:8000`

See Django admin: `http://localhost:8000/admin`

Sign into backend container: `sudo docker exec -it blogmedia-app bash`

Make db migrations: sign into backend container and then run `python manage.py migrate`

Signing into database: `sudo docker exec -it blogmedia-db psql -U dev blogmedia-db`
