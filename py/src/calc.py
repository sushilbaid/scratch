class Calc:
    # constructor
    def __init__(self, a, b) -> None:
        self.a = a
        self.b = b

    def sum(self):
        return self.a + self.b
    
    def diff(self):
        return self.a - self.b
    
    def get_product(self):
        return self.a * self.b
    
    def get_quotient(self):
        return self.a / self.b

if __name__ == "__main__": 
    print("hi calc")
