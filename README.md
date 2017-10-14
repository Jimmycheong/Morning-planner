# TFL-journey-planner

### Technologies

- Flask
- React
- Materialize

---
## How to setup on MAC OSX

For this application to run, you must have an account id and key for TFL Unified API. This is free to sign up to via:
https://api-portal.tfl.gov.uk/signup

Once obtained, open a terminal and export these as environment variables. It may be best to set these in the .bash_profile (or .bash_rc for linux users):

```
export TFL_API_ID=<your app id>
export TFL_API_KEY=<your app key>
```

Go to a suitable directory (e.g Documents, Desktop) and run the following commands:

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
