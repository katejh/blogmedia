# BlogMedia

A blogging social media site, built with React and Django.

## Motivation

I built this to learn full stack development with React!

## Features

None yet :)

## Local Installation

Pull this repository.

In the root of this project, run `python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt`. Then, every time you are working on this project, run `source venv/bin/activate`. (Note: I recommend you use the venv instead of Docker when you have to do things like `python manage.py startapp app-name`).

Create a `.env` file inside the `app/` directory and fill with the relevant environment variables (see the `.env.template` file).

To create a `DJANGO_SECRET_KEY`, run inside a Python shell:

```python
from django.core.management.utils import get_random_secret_key

print(get_random_secret_key())
```

If you haven't, [install Docker](https://docs.docker.com/get-docker/). I'm working on Ubuntu 20.04 on WSL 2, so if you are as well, follow these guides on [installing Docker](https://docs.docker.com/engine/install/ubuntu/) and [installing Docker Compose](https://docs.docker.com/compose/install/).

After you have installed Docker, make sure it is up and running. On Ubuntu/WSL2, you can run `sudo service docker start` to start Docker and `sudo service docker stop` to stop Docker.

Finally, run `sudo docker-compose build`

## Usage

To get this project running, run:

`sudo docker-compose up`

See frontend: `http://localhost:3000`

See backend: `http://localhost:8000`

See Django admin: `http://localhost:8000/admin`

Sign into backend container: `sudo docker exec -it blogmedia-app bash`

Make db migrations: sign into backend container and then run `python manage.py makemigrations && python manage.py migrate`

Signing into database: `sudo docker exec -it blogmedia-db psql -U dev blogmedia-db`

Installing npm package: `sudo docker exec blogmedia-web npm install --save <package-name>`

## Technologies

- Python/Django
- React
- Docker

## Credits

- [Vikas Yidav](http://v1k45.com/) for the great [Django-React tutorial](http://v1k45.com/blog/modern-django-part-1-setting-up-django-and-react/)
