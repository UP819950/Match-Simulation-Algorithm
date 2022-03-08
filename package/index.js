function getScore() {
    homeScore = getGoals();
    awayScore = getGoals();
    return {homeScore: homeScore, awayScore: awayScore}
}

function getGoals() {
    // probabilities summed
    const maxProb0 = 0.175
    const maxProb1 = 0.413
    const maxProb2 = 0.682
    const maxProb3 = 0.813
    const maxProb4 = 0.909
    const maxProb5 = 0.964
    const maxProb6 = 0.992
    const maxProb7 = 0.997
    const a = Math.random()
    let score = 0;

    if (a <= maxProb0) { score = 0; }
    else if (a <= maxProb1) { score = 1; }
    else if (a <= maxProb2) { score = 2; }
    else if (a <= maxProb3) { score = 3; }
    else if (a <= maxProb4) { score = 4; }
    else if (a <= maxProb5) { score = 5; }
    else if (a <= maxProb6) { score = 6; }
    else if (a <= maxProb7) { score = 6; }
    else { score = 7; }
    return score;
}


