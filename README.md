# TFL-journey-planner

### Technologies

- Flask
- React
- Materialize

---
## How to setup

In the terminal, go to a suitable directory (e.g Documents, Desktop) and run the following commands:

```
git clone https://github.com/Jimmycheong/TFL-journey-planner.git
cd TFL-journey-planner

virtualenv env
source env/bin/activate
pip install -r requirements.txt
```

Once the dependancies are installed, activate the virtual environment, create environment variables and run the Flask application:
```
source env/bin/activate
export FLASK_APP=main.py
export FLASK_DEBUG=1

flask run

```

Enjoy!
