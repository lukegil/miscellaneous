import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

def run_round(choose_arm, arm_to_history):
    """
    choose_arm - a function that takes a list of Arms and returns an arm to `pull`
    arm_to_history - a dict of arms with their win history (a list of bools)
    """
    arm = choose_arm(list(arm_to_history))
    won = arm.pull()
    for a in arm_to_history:
        arm_to_history[a]['impressions'].append(bool(a is arm))
        arm_to_history[a]['wins'].append(bool(a is arm and won))

    return arm_to_history

def graph_impressions(arm_to_history):
    name_to_history = {arm.name: np.cumsum(arm_to_history[arm]['impressions']) for arm in arm_to_history}

    ax = sns.lineplot(data=name_to_history)
    plt.legend(title="Total impressions per Arm")
    plt.show()

def graph_regret(arms_to_history):
    arms = list(arms_to_history)
    no_regret_arm_index = np.argmax([ arm.expected_win_rate 
                               for arm in list(arms)])
    no_regret_arm = arms[no_regret_arm_index]
    
    ideal_wins = np.cumsum([no_regret_arm.expected_win_rate 
                            for _ in arms_to_history[no_regret_arm]['impressions']])
    
    actual_wins = []
    for a, b, c in zip(*[arms_to_history[arm]['wins'] for arm in arms_to_history]):
        actual_wins.append(a or b or c)
    actual_wins = np.cumsum(actual_wins)
    
    regret = [ideal - actual for ideal, actual in zip(ideal_wins, actual_wins)]
    ax = sns.lineplot(data={'regret': regret})
    plt.legend(title="Regret")
    plt.show()