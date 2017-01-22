export default {
  sokoban: [
    [// LEVEL ONE --------------------------------------
      {
        movement: [],
        direction: 2,
        key: 'skull',
        convo: [
          "Hey you!",
          "Yeah, you.....",
          "I need your 'help' with something important.",
          "As you might have noticed, you can use the arrows to move around, and spacebar or the button to interact",
          "I'll explain more later, but for now can you clean up this grave yard for me?",
          "Just push the tombstone there over that poor sap to put them to rest and head on up the stairs",
          "It'll be great! I promise!",
          "..............    ;)",
          {
            text: "What do you think?",
            choiceA: { text: 'Sure', value: 1, response: "Great! I'll let you in on a little secret...........................................  This is just between you and me OKAY? You can hit the 'R' key to restart a level at any time." },
            choiceB: { text: 'Hell no', value: 2, response: 'Ok, hope you find another way out of this place before you end up like your friend over there!' }
          },
        ],
      }
    ], [// LEVEL TWO --------------------------------------[
      {
        movement: [],
        key: 'charon',
        direction: 1,
        convo: [
          "...................................................................................",
          "Oh.",
          "I'm busy over here, could you get back to 'cleaning'?",
        ],
      }
    ], [ // LEVEL THREE -------------------------------------- [
      {
        movement: [],
        key: 'woman',
        direction: 0,
        convo: [
          "This looks really confusing...",
          "Hm",
          "Hmmm..",
          "Hmmmmmm...",
          "Hmmmmmmmmmm.....",
          "Hmmmmmmmmmmmmmmmmmmmmm................",
          "Mm.",
          "See if you can work this one out, I'm a bit tired from all this thinking.",
        ],
      }
    ],
  ],
  stealth: [
    [// LEVEL ONE --------------------------------------
      {
        movement: [3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
        speed: 1000,
        direction: 0,
        key: 'man',
        convo: [
          "Hey you!",
        ],
      }, {
        movement: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3],
        speed: 1000,
        direction: 1,
        key: 'woman',
        convo: [
          "Hey you!",
        ],
      }
    ], [// LEVEL TWO --------------------------------------
      {
        movement: [1, 2],
        speed: 1000,
        direction: 2,
        key: 'man2',
        convo: [
          "Hey you!",
        ],
      }, {
        movement: [0, 1],
        speed: 1000,
        direction: 1,
        key: 'skull',
        convo: [
          "Hey you!",
        ],
      },{
        movement: [3, 2],
        speed: 1000,
        direction: 2,
        key: 'man3',
        convo: [
          "Hey you!",
        ],
      },{
        movement: [0, 1],
        speed: 1000,
        direction: 1,
        key: 'charon',
        convo: [
          "Hey you!",
        ],
      },{
        movement: [0, 1, 3],
        speed: 1000,
        direction: 3,
        key: 'man',
        convo: [
          "Hey you!",
        ],
      }
    ], [// LEVEL THREE --------------------------------------
      {
        movement: [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 0, 0, 0],
        speed: 1000,
        direction: 2,
        key: 'skull',
        convo: [
          "Hey you!",
        ],
      }, {
        movement: [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 0, 0, 0],
        speed: 1000,
        direction: 2,
        key: 'charon',
        convo: [
          "Hey you!",
        ],
      }, {
        movement: [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 0, 0, 0],
        speed: 1000,
        direction: 2,
        key: 'man',
        convo: [
          "Hey you!",
        ],
      }, {
        movement: [1, 1, 1, 0, 0, 0, 0, 3, 3, 3, 2, 2, 2, 2],
        speed: 1000,
        direction: 2,
        key: 'woman',
        convo: [
          "Hey you!",
        ],
      },
    ]
  ],
  trivia: [
    [// LEVEL ONE --------------------------------------
      {
        movement: [],
        direction: 2,
        key: 'skull',
        convo: [
          "Riddle me this!",
          "This or that?",
          {
            text: "What do you think?",
            choiceA: { text: 'This', value: 1, response: "Right!" },
            choiceB: { text: 'That', value: 2, response: 'Wrong!' }
          },
        ],
      }, {
        movement: [],
        direction: 2,
        key: 'skull',
        convo: [
          "Riddle me this!",
          "This or that?",
          {
            text: "What do you think?",
            choiceA: { text: 'This', value: 1, response: "Right!" },
            choiceB: { text: 'That', value: 2, response: 'Wrong!' }
          },
        ],
      }, {
        movement: [],
        direction: 2,
        key: 'skull',
        convo: [
          "Riddle me this!",
          "If you could do anything at all would you do this thing or that thing?",
          {
            text: "What do you think?",
            choiceA: { text: 'This', value: 1, response: "Right!" },
            choiceB: { text: 'That', value: 2, response: 'Wrong!' }
          },
        ],
      },
    ], [// LEVEL TWO --------------------------------------
      {
        movement: [],
        direction: 2,
        key: 'skull',
        convo: [
          "Riddle me this!",
          "This or that?",
          {
            text: "What do you think?",
            choiceA: { text: 'This', value: 1, response: "Right!" },
            choiceB: { text: 'That', value: 2, response: 'Wrong!' }
          },
        ],
      }, {
        movement: [],
        direction: 2,
        key: 'skull',
        convo: [
          "Riddle me this!",
          "This or that?",
          {
            text: "What do you think?",
            choiceA: { text: 'This', value: 1, response: "Right!" },
            choiceB: { text: 'That', value: 2, response: 'Wrong!' }
          },
        ],
      }, {
        movement: [],
        direction: 2,
        key: 'skull',
        convo: [
          "Riddle me this!",
          "If you could do anything at all would you do this thing or that thing?",
          {
            text: "What do you think?",
            choiceA: { text: 'This', value: 1, response: "Right!" },
            choiceB: { text: 'That', value: 2, response: 'Wrong!' }
          },
        ],
      },
    ], [// LEVEL THREE --------------------------------------
      {
        movement: [],
        direction: 2,
        key: 'skull',
        convo: [
          "Riddle me this!",
          "This or that?",
          {
            text: "What do you think?",
            choiceA: { text: 'This', value: 1, response: "Right!" },
            choiceB: { text: 'That', value: 2, response: 'Wrong!' }
          },
        ],
      }, {
        movement: [],
        direction: 2,
        key: 'skull',
        convo: [
          "Riddle me this!",
          "This or that?",
          {
            text: "What do you think?",
            choiceA: { text: 'This', value: 1, response: "Right!" },
            choiceB: { text: 'That', value: 2, response: 'Wrong!' }
          },
        ],
      }, {
        movement: [],
        direction: 2,
        key: 'skull',
        convo: [
          "Riddle me this!",
          "If you could do anything at all would you do this thing or that thing?",
          {
            text: "What do you think?",
            choiceA: { text: 'This', value: 1, response: "Right!" },
            choiceB: { text: 'That', value: 2, response: 'Wrong!' }
          },
        ],
      },
    ]
  ]
}
