// Two cats and a mouse are at various positions on a line.You will be given their starting positions.Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed.If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// You are given  queries in the form of, , and  representing the respective positions for cats  and, and for mouse.Complete the function to return the appropriate answer to each query, which will be printed on a new line.

// If cat  catches the mouse first, print Cat A.
// If cat  catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
//   Example




// The cats are at positions(Cat A) and(Cat B), and the mouse is at position.Cat B, at position  will arrive first since it is only  unit away while the other is  units away.Return 'Cat B'.

// Complete the catAndMouse function below.

function catAndMouse(x, y, z) {
  const catADistance = Math.abs(z - x)
  const catBDistance = Math.abs(z - y)
  if (catADistance === catBDistance) {
    return 'Mouse C'
  } else if (catADistance > catBDistance) {
    return 'Cat B'
  } else {
    return 'Cat A'
  }
}
