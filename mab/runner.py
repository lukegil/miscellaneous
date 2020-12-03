import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

def run_round(choose_arm, arm_to_history):
    """
    choose_arm - a function that takes a list of Arms and returns an arm to `pull`
    arm_to_history - a dict of arms with their win history (a list of bools)
    """
    arm = choose_arm(list(arm_to_history))
    arm.pull()
    for a in arm_to_history:
        arm_to_history[a].append(bool(a is arm))

    return arm_to_history


def graph_history(arm_to_history):
    name_to_history = {arm.name: np.cumsum(arm_to_history[arm]) for arm in arm_to_history}

    ax = sns.lineplot(data=name_to_history)
    plt.legend(title="Total impressions per Arm")
    plt.show()
