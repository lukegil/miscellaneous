from random import random

class Arm():
    def __init__(self, name, expected_win_rate):
        assert 0 <= expected_win_rate <= 1

        self.expected_win_rate = expected_win_rate
        self.name = name

        self.wins = 0
        self.tries = 0

    """
    Returns True if the pull "won" else False
    Also updates metadata
    """
    def pull(self):
        won = random() < self.expected_win_rate
    
        self.tries += 1
        self.wins += won
        self.update_after_round(won)
    
        return won

    """
    void: Used if you want to update values based on a win
    """
    def update_after_round(self, won):
        pass