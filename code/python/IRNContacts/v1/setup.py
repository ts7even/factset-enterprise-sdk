"""
    IRN API v1

    Allows users to create, update and configure IRN data.  # noqa: E501

    The version of the OpenAPI document: 1
    Generated by: https://openapi-generator.tech
"""


from setuptools import setup, find_packages  # noqa: H301

NAME = "fds.sdk.IRNContacts"
VERSION = "0.9.0"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = [
  "urllib3 >= 1.25.3",
  "python-dateutil",
  "fds.sdk.utils == 0.9.0",
]

setup(
    name=NAME,
    version=VERSION,
    description="FactSet SDK - IRN Contacts",
    author="FactSet Research Systems",
    url="https://github.com/FactSet/enterprise-sdk/tree/master/code/python/IRNContacts",
    keywords=["FactSet", "API", "SDK"],
    python_requires=">=3.6",
    install_requires=REQUIRES,
    packages=find_packages(exclude=["test", "tests"]),
    include_package_data=True,
    license="Apache-2.0",
    long_description="""\
    Allows users to create, update and configure IRN data.  # noqa: E501
    """
)