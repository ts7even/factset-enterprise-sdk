"""
    Virtual Portfolio API For Digital Portals

    The virtual portfolio enables the analysis of the current allocation, broken down by asset classes, currencies,  regions, sectors, style, capitalization, style, maturity, risk, and more.  Relative performance and monthly returns can be measured against benchmarks, using portfolio position transaction (buy/sell) data. Both the realized profit/loss (resulting from closed transactions) and the potential profit/loss (resulting from positions that have not been sold yet) can be queried.  Portfolio endpoints allow creation and managing a transaction-based portfolio. A transaction-based portfolio contains a gapless history of all transactions to be able to accurately reproduce the investment record of the portfolio.  An instrument added to a portfolio is called a position. Each position consists of multiple buy and sell events called transactions. Portfolios are limited to 100 positions and 1000 transactions; adding more will result in an error.  A transaction-based portfolio can consist of the following transactions:  * A buy transaction opens or adds to a position in the portfolio, decreasing the cash value by the purchase price at the same time. If there is not enough cash in the portfolio to cover the transaction, the cash value becomes negative. * A sell transaction decreases or closes a position in the portfolio, increasing the cash value by the sale price at the same time. A sell transaction can only be created if the number of shares of a given position exceeds the number being sold. * A cash transaction increases or decreases the cash position of the portfolio. A portfolio can have only one cash position. The cash position is tracked automatically as each buy or sell transaction implicitly affects it. The cash position can be negative as a buy transaction does not check whether enough cash is available. The cash position does not generate interest; its performance is always 0%.  The chosen prices and key figures in the endpoints are using the same quality, which is configurable per application. Possible values are delayed (DLY), best (BST), end-of-day (EOD) or realtime (RLT). The default value for the price quality is BST.  The portfolio endpoints use different methods to calculate key figures. All key figures except the risk in /portfolio/detail/list, /portfolio/get, and /portfolio/position/list are calculated on-the-fly with current prices. The risk key figures are calculated on-the-fly with current prices, but the result is cached for 24 hours. The key figures in /portfolio/evaluation/list are calculated on end-of-day basis.  The Virtual Portfolio API for Digital Portals is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments in a watchlist. This also supports basic security identifier cross-reference. To complement the Watchlist API and Virtual Portfolio API with direct access to price histories, please refer to the Time Series API for Digital Portals.  # noqa: E501

    The version of the OpenAPI document: 2
    Generated by: https://openapi-generator.tech
"""


from setuptools import setup, find_packages  # noqa: H301
import os

def read(filename):
  return open(os.path.join(os.path.dirname(__file__), filename)).read()

NAME = "fds.sdk.VirtualPortfolioAPIforDigitalPortals"
VERSION = "0.9.5"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = [
  "urllib3 >= 1.25.3",
  "python-dateutil",
  "fds.sdk.utils >= 1.0.0",
]

setup(
    name=NAME,
    version=VERSION,
    description="Virtual Portfolio API for Digital Portals client library for Python",
    author="FactSet Research Systems",
    url="https://github.com/FactSet/enterprise-sdk/tree/main/code/python/VirtualPortfolioAPIforDigitalPortals/v1",
    keywords=["FactSet", "API", "SDK"],
    python_requires=">=3.7",
    install_requires=REQUIRES,
    packages=find_packages(exclude=["test", "tests"]),
    include_package_data=True,
    license="Apache-2.0",
    long_description_content_type="text/markdown",
    long_description=read("README.md")
)
