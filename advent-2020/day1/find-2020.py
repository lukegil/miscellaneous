from random import randint, shuffle

GOAL_NUM = 2020
MIDPOINT = 1010

with open('./input.txt') as f:
    numbers = f.readlines()
numbers = [int(n.strip()) for n in numbers]


def split_numbers(numbers):
    lt_1010 = []
    gt_1010 = []
    eq_1010 = []

    for num in numbers:
        if num < MIDPOINT:
            lt_1010.append(num)
        elif num > MIDPOINT:
            gt_1010.append(num)
        else:
            eq_1010.append(num)
    return (lt_1010, eq_1010, gt_1010)

# O(n^2)
def find_2020_naive(numbers):
    l = range(len(numbers))
    for first in l:
        for second in l:
            if numbers[first] + numbers[second] == GOAL_NUM:
                return numbers[first] * numbers[second]

# O((n/2) ^ 2)
def find_2020_less_naive(numbers):
    lt_1010, eq_1010, gt_1010 = split_numbers(numbers)
    if len(eq_1010) >= 2:
        return MIDPOINT * MIDPOINT

    for gt in gt_1010:
        for lt in lt_1010:
            if gt + lt == GOAL_NUM:
                return gt * lt

# sort - nlog(n) (according to internet)
# loop - worst case is roughly that both numbers are at the end of each list, 
# which _should_ just be 2n? But I think that's wrong.. I'm blaming Friday at 5pm. Either way it's faster
def find_2020_better(numbers):
    lt_1010, eq_1010, gt_1010 = split_numbers(numbers)
    if len(eq_1010) >= 2:
        return MIDPOINT * MIDPOINT

    lt_1010.sort()
    gt_1010.sort(reverse=True)

    lt_index = 0
    gt_index = 0
    found = False
    try:
        while not found:
            cur_sum = lt_1010[lt_index] + gt_1010[gt_index]
            if cur_sum == GOAL_NUM:
                return lt_1010[lt_index] * gt_1010[gt_index]

            if cur_sum > GOAL_NUM:
                gt_index += 1
            else:
                lt_index += 1

            if lt_index >= len(lt_1010) or gt_index >= len(gt_1010):
                print('whoops.')
                return -1
    except:
        k = 0


def brute_force_test():
    solutions = []
    for i in range(1, 10):
        solutions.append([i, 20 - i])

    variations = []
    for s in (solutions * 4):
        v = s + [randint(1, 19) for _ in range(18)]
        shuffle(v)
        variations.append(v)

    for variation in variations:
        res = find_2020_better(variation)
        if res == -1:
            print(variation)
            return None

    print('worked')


print(find_2020_better(numbers))
print(find_2020_less_naive(numbers))
print(find_2020_naive(numbers))
# brute_force_test()
