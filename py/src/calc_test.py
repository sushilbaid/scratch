from src.calc import Calc
import unittest

class TestString(unittest.TestCase):
    # setUp/tearDown is called once per test. __init__ constructor also invoked if present.
    def setUp(self) -> None:
        print("in setup")
    def tearDown(self) -> None:
        print('in teardown')
    def test_something(self):
        s = "hi there"
        self.assertEqual(s.split(), ['hi', 'there'] )
        self.assertIn('a', dict(a=1, b=2))
    def test_something2(self):
        s = "hi there"
        with self.assertRaises(TypeError):
            s.split(2)

class TestCalc(unittest.TestCase):
    def setUp(self):
        self.c = Calc(8,2)
    def something(self):
        print("called something")
    def test_sum(self):
        self.assertEqual(self.c.sum(), 10, 'sum is incorrect')

def suite():
    s = unittest.TestSuite()
    s.addTest(TestString('test_something'))
    return s
if __name__ == '__main__':
    # runner = unittest.TextTestRunner()
    # runner.run(suite())
    unittest.main()
