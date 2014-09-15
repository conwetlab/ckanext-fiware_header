from setuptools import setup, find_packages
import sys, os

version = '0.1'

setup(
    name='ckanext-fiware_header',
    version=version,
    description="FIWARE Header",
    long_description='''
    ''',
    classifiers=[], # Get strings from http://pypi.python.org/pypi?%3Aaction=list_classifiers
    keywords='',
    author='Aitor',
    author_email='amagan@conwet.com',
    url='',
    license='',
    packages=find_packages(exclude=['ez_setup', 'examples', 'tests']),
    namespace_packages=['ckanext', 'ckanext.fiware_header'],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        # -*- Extra requirements: -*-
    ],
    entry_points='''
        [ckan.plugins]
        # Add plugins here, e.g.
        # myplugin=ckanext.fiware_header.plugin:PluginClass
        fiware_header=ckanext.fiware_header.plugin:FiWareHeaderPlugin
    ''',
)
