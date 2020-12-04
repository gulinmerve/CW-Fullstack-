

def bin2dec(binStr):  # binStr is in str type
    bits = list(binStr)
    print(bits)
    decVal = 0
    counter = 0

    for i in reversed(bits):
        decVal += 2 ** counter * int(i)
        counter += 1
    return decVal
    # returning value should be in int type.
    pass




def dec2bin(decNum):  # decNum is int type
    if decNum == 0:
        return str(0)
    binVal = ""
    while decNum:
        binVal += str(decNum % 2)
        decNum >>= 1
    return binVal[::-1]
    # returning value should be in str type.
    pass
print(bin2dec("011110"))
print(dec2bin(14))

# # *** Tests ***


# class Test(unittest.TestCase):
#     def test_bin2dec_zero(self):
#         desc = "with zero"
#         inputNum = "0"
#         actual = bin2dec(inputNum)
#         expected = 0
#         self.assertEqual(actual, expected, desc)

#     def test_bin2dec_30(self):
#         desc = "with 00011110 should be 30"
#         inputNum = "00011110"
#         actual = bin2dec(inputNum)
#         expected = 30
#         self.assertEqual(actual, expected, desc)

#     def test_bin2dec_42(self):
#         desc = "with 00101010 should be 42"
#         inputNum = "00101010"
#         actual = bin2dec(inputNum)
#         expected = 42
#         self.assertEqual(actual, expected, desc)

#     def test_dec2bin_zero(self):
#         desc = "with zero"
#         inputNum = 0
#         actual = dec2bin(inputNum)
#         expected = "0"
#         self.assertEqual(actual, expected, desc)

#     def test_dec2bin_30(self):
#         desc = "with 30 should be 11110"
#         inputNum = 30
#         actual = dec2bin(inputNum)
#         expected = "11110"
#         self.assertEqual(actual, expected, desc)

#     def test_dec2bin_42(self):
#         desc = "with 42 should be 101010"
#         inputNum = 42
#         actual = dec2bin(inputNum)
#         expected = "101010"
#         self.assertEqual(actual, expected, desc)


# unittest.main(verbosity=2)