function diceGameSimulation(num) {
  const diceGameMatch = () => {
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    const sum = dice1 + dice2;
    let result;
    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 3 || sum === 2 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }
    return { dice1, dice2, sum, result };
  };
  return Array.from({ length: num }, () => diceGameMatch());
}

module.exports = diceGameSimulation;
