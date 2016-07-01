# Tic Tac Toe

I wrote this quick tic tac toe game to see how much I had improved.
I also wrote this to compare it to the tdd version of this game that I'd put together after the code retreat.

Game features

- Simple tic tac toe game against a friend on a single browser.
- Ai which features:
    - Block your win attempts
    - Win


### Notes on how it all works
The game works with a single interface. This is the function `pressed(id)`.
This function takes a number from 0 - 8 (inclusive) and places an **X** or an **O**
in that position.

If the turn is successful the function returns `true`. Otherwise it returns `undefined`.
This allows the __AI__ to randomly try turns and recognize when it's successful.

`pressed(id)` also switches the global player flag `nextMove` which is a side effect of success.

> This game is simple enough for the side effects to not make the program too confusing.
> Next time I need to avoid global variables and such random returns from functions.

#### Simple game loop

- Wait for player to start.
- player clicks triggering `pressed(id)`
    - if AI flag is `true` -> `pressed(id)` triggers `aiAction()`
    - AI action occurs
- Wait for player again

