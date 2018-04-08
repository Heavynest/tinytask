"""
Index server python package configuration.

Nilay Muchhala  <nilaym@umich.edu>
Aneeqa Fatima   <aneeqaf@umich.edu>
"""

from setuptools import setup

setup(
    name='index',
    version='0.1.0',
    packages=['index'],
    include_package_data=True,
    install_requires=[
        'flask==0.12.2',
        'flask_cors==3.0.3',
        'arrow==0.10.0',
        'html5validator==0.2.8',
        'pycodestyle==2.3.1',
        'pydocstyle==2.0.0',
        'pylint==1.8.1',
        'sh==1.12.14',
    ],
)
