import argparse

romanSortOrder = {
    "M": 10,
    "D": 9,
    "C": 8,
    "L": 7,
    "X": 6,
    "V": 5,
    "I": 4
}

translator = {
    "DD": "M",
    "CCCCC": "D",
    "LL": "C",
    "XXXXX": "L",
    "VV": "X",
    "IIIII": "V"
}


def tryToCombine(lst):
    combined = []
    j = 0
    for i in range(len(lst) + 1):
        numerals = "".join(lst[j:i])
        if translator.get(numerals):
            combined.append(translator[numerals])
            j = i

    return (combined, lst[j:])

def groupByType(sorted_string, final_string=""):
    final = []
    buffer = []
    sl = len(sorted_string)
    i = 0
    while i < sl:
        cur_char = sorted_string[-1 - i]
        if not buffer or cur_char is buffer[-1]:
            buffer.append(cur_char)
            i += 1

        else:
            buffer, leftovers = tryToCombine(buffer)
            final += leftovers

    if buffer:
        combined, leftovers = tryToCombine(buffer)
        final += leftovers + combined
    final.reverse()
    return final


def romanSort(unsorted):
    return sorted(unsorted, key=lambda numeral: romanSortOrder[numeral], reverse=True)


def addRomanNumerals(addend1, addend2):
    concat_string = addend1 + addend2
    sorted_string = romanSort(concat_string)
    return "".join(groupByType(sorted_string))


if __name__ == '__main__':
    parser = argparse.ArgumentParser()

    parser.add_argument("addend1", help="The first number to add", type=str)
    parser.add_argument("addend2", help="The first number to add", type=str)

    args = parser.parse_args()

    print(addRomanNumerals(args.addend1, args.addend2))
