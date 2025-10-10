### using unittest
1. Test class to derive from `unittest.TestCase`
2. Default pattern of files `test*.py` . can be overridden using `-p`
3. Default pattern of functions `test*`
4. setUp/tearDown is called once per test. __init__ constructor also invoked if present.

```bash
cd ~/g/scratch/py
# run all tests. add -b switch to buffer stdout
python3 -munittest discover -p *test.py -v -b
# run a test
python3 -munittest src.calc_test.TestString.test_something2
# run tests using main in the test module. Note module name is filepath with slash replaced by '.' and .py extension removed.
python3 -m src.calc_test -v

```
### Using pytest
```bash
cd ~/g/scratch/py
# run tests
python3 -mpytest -v
# quiet reporting
python3 -mpytest -q
# run a test
python3 -mpytest -k test_something2
# run tests with coverage for code in proj1 folder and generate reports in reports/coverage folder
pytest --cov=proj1 tests/ --cov-report html:reports/coverage
# lint tool
flake8 folder/
```
