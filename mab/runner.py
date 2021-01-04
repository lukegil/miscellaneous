import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from IPython.display import display

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
    no_regret_arm_index = np.argmax([ arm.wins / arm.tries if arm.tries else 0 
                               for arm in list(arms)])
    no_regret_arm = arms[no_regret_arm_index]
    
    max_ctr = no_regret_arm.wins / no_regret_arm.tries if no_regret_arm.tries else 0
    ideal_wins = np.cumsum([max_ctr 
                            for _ in arms_to_history[no_regret_arm]['impressions']])
    
    actual_wins = []
    for a, b, c in zip(*[arms_to_history[arm]['wins'] for arm in arms_to_history]):
        actual_wins.append(a or b or c)
    actual_wins = np.cumsum(actual_wins)
    
    regret = [ideal - actual for ideal, actual in zip(ideal_wins, actual_wins)]
    sns.lineplot(data={'regret': regret})
    plt.legend(title="Regret")
    plt.show()

def display_real_ctrs(arms_to_history):
    df = pd.DataFrame(columns=['Expected CTR', 'Actual CTR'])
    for arm in arms_to_history:
        df.loc[arm.name] = [
            '{:.1%}'.format(arm.expected_win_rate), 
            '{:.1%}'.format(arm.wins / arm.tries if arm.tries else 0)
        ]

    display(df)