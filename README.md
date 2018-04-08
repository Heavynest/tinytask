# Customizing jupyter notebook toolbar

This tiny task basically shows how to add a button to toolbar.

## Getting Started

Anaconda is recommended to open jupyter notebook. Be sure to update the version of notebook to later than 5.1 or label may not appear. (Not sure).


### Prerequisites

First, you have to pull down the file in this repository.

```
$ git clone https://github.com/Heavynest/tinytask.git
```


### Installing

Remember the path of the file you just downloaded and type the following code in your Anaconda Prompt.

```
jupyter nbextension install path/to/my_extension/ 
```

And then enable the extension.


```
jupyter nbextension enable my_extension/main 
```
Now this action is enabled.

## Running the API

Please type the following code in your terminal to start the api
```
python -m venv env

source env/bin/activate

pip install -e .

export FLASK_DEBUG=True

export FLASK_APP=index

export INDEX_SETTINGS=config.py

flask run --host 0.0.0.0 --port 8000


```



## Finishing

Type 'jupyter notebook' in your anaconda prompt and open a new script, you will see a 'hello world' button. Try to click it and see what happens.

