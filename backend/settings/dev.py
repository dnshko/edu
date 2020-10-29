'''Use this for development'''

from .base import *

ALLOWED_HOSTS += ['localhost', '127.0.0.1']
DEBUG = True

WSGI_APPLICATION = 'backend.wsgi.dev.application'

DATABASES = {
    'default': {
        # 'ENGINE': 'django.db.backends.sqlite3',
        # 'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        'ENGINE': 'django.db.backends.mysql',
         'NAME': 'edutestdb',
         'USER': 'root',
         'PASSWORD': '',
         'HOST': 'localhost',
         'PORT': '3306',
    }
}

CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
)