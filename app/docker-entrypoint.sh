#!/bin/bash

# Collect static files
#echo "Collect static files"
#python manage.py collectstatic --noinput

### Disabling database migrations for now because wacky if you don't have an already existing volume
# Apply database migrations
#echo "Apply database migrations"
#python manage.py migrate

# Start server
echo "Starting django server"
python manage.py runserver 0.0.0.0:8000
