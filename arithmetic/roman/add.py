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


def groupByType(sorted_string, final_string=""):
    sorted_string.reverse()

    final = []
    working_string = sorted_string
    while True:
        possible_combos = False
        buffer = []
        for char in working_string:
            if not buffer:
                buffer.append(char)
                continue

            if buffer[0] is char:
                buffer.append(char)
                try:
                    final += translator["".join(buffer)]
                    buffer = []
                    possible_combos = True
                except KeyError:
                    pass
                continue

            final += buffer
            buffer = [char]
        final += buffer
        if possible_combos:
            working_string = final
            final = []
            continue
        break
    final.reverse()
    return "".join(final)


def romanSort(unsorted):
    return sorted(unsorted, key=lambda numeral: romanSortOrder[numeral], reverse=True)


def addRomanNumerals(addend1, addend2):
    concat_string = addend1 + addend2
    sorted_string = romanSort(concat_string)
    return groupByType(sorted_string)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()

    parser.add_argument("addend1", help="The first number to add", type=str)
    parser.add_argument("addend2", help="The first number to add", type=str)

    args = parser.parse_args()

    print(addRomanNumerals(args.addend1, args.addend2))
