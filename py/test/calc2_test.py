import pytest
from src.calc import Calc

@pytest.mark.parametrize("a, b, r", [
    (2, 3, 5), 
    (2, 4, 6) 
])
def test_sum2(a, b, r):
    c = Calc(a,b)
    assert c.sum() == r

def test_recur():
    with pytest.raises(RuntimeError) as excinfo:
        def f():
            f()

        f()
    assert "maximum recursion" in str(excinfo.value
