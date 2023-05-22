import unittest


class FirstStringTest(unittest.TestCase):

    def test_StringUpper(self):
        self.assertEqual('foo'.upper(),'FOO','Somthing wrong')

if __name__=='__main__':
    unittest.main() 