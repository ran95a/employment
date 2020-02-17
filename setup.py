# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in employment/__init__.py
from employment import __version__ as version

setup(
	name='employment',
	version=version,
	description='Employment Form',
	author='frappe',
	author_email='r.alhabbash@fixtag.com.sa',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
