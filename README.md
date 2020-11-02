# Pre Requirements

| Tools | Download Link  |
| ------ | ------ |
| Node.js | [Node.js](https://nodejs.org/en/) |
| python | [python](https://www.python.org/) |
| xampp | [xampp](https://www.apachefriends.org/index.html) |

- Add Database Name : **edutestdb**

![](/readme/db.gif)

```sh
pip install virtualenv
```
# Backend Development Workflow

```sh
virtualenv env
env\Scripts\activate
pip install -r requirements.txt
pip install mysqlclient
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

# Frontend Development Workflow

```sh
npm i
npm start 
```