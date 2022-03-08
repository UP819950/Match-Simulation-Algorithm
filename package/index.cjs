module.exports.getScore = function getScore() {
    homeScore = 0;
    awayScore = 0;

    // probabilities summed
    const maxProb0 = 0.175;
    const maxProb1 = 0.413;
    const maxProb2 = 0.682;
    const maxProb3 = 0.813;
    const maxProb4 = 0.909;
    const maxProb5 = 0.964;
    const maxProb6 = 0.992;
    const maxProb7 = 0.997;
    const a = Math.random();
    const b = Math.random();

    if (a <= maxProb0) { homeScore = 0; }
    else if (a <= maxProb1) { homeScore = 1; }
    else if (a <= maxProb2) { homeScore = 2; }
    else if (a <= maxProb3) { homeScore = 3; }
    else if (a <= maxProb4) { homeScore = 4; }
    else if (a <= maxProb5) { homeScore = 5; }
    else if (a <= maxProb6) { homeScore = 6; }
    else if (a <= maxProb7) { homeScore = 6; }
    else { homeScore = 7; }
    
    if (b <= maxProb0) { awayScore = 0; }
    else if (b <= maxProb1) { awayScore = 1; }
    else if (b <= maxProb2) { awayScore = 2; }
    else if (b <= maxProb3) { awayScore = 3; }
    else if (b <= maxProb4) { awayScore = 4; }
    else if (b <= maxProb5) { awayScore = 5; }
    else if (b <= maxProb6) { awayScore = 6; }
    else if (b <= maxProb7) { awayScore = 6; }
    else { awayScore = 7; }

    return {homeScore: homeScore, awayScore: awayScore}
}

