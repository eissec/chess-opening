export default {
	YouPlayAs: {
		Text: "You play as:",
		Answers: [
			{
				Text: "White",
				LeadsTo: "WhatKindOfOpenings",
			},
			{
				Text: "Black",
				LeadsTo: "YourOpponentPlayed",
			},
		],
	},
	/** white **/
	WhatKindOfOpenings: {
		Text: "What kind of openings do you prefer?",
		Answers: [
			{
				Text: "More guidelines and less memorisation",
				LeadsTo: "HowDoYouLikeToPlay",
			},
			{
				Text: "Lots of theory",
				LeadsTo: "LotsOfTheory",
			},
		],
	},
	HowDoYouLikeToPlay: {
		Text: "How do you like to play?",
		Answers: [
			{
				Text: "Solidly",
				LeadsTo: "Solidly",
			},
			{
				Text: "Provocatively",
				LeadsTo: "Provocatively",
			},
			{
				Text: "For a draw!",
				LeadsTo: "ForADraw",
			},
			{
				Text: "Aggressively",
				LeadsTo: "Aggressively",
			},
		],
	},
	Solidly: {
		Text: "Play subtle and obscure 1.d4 openings: the London System, Colle, or quieter main lines, such as the Catalan"
	},
	Provocatively: {
		Text: "Play the English, Reti, openings like 1.b3"
	},
	ForADraw: {
		Text: "Chess is not the game for you. Try Checkers!"
	},
	Aggressively: {
		Text: "Do you:",
		Answers: [
			{
				Text: "Prefer a slowly building attack",
				LeadsTo: "SlowlyBuildingAttack",
			},
			{
				Text: "Like to live on the edge?",
				LeadsTo: "Trompowski",
			},
		],
	},
	SlowlyBuildingAttack: {
		Text: "Play 1.e4 with less theoretical lines - the Closed Sicilian (or quieter lines of the Open), maybe the Vienna or Guioco Piano against 1...e5"
	},
	Trompowski: {
		Text: "Play the Trompowski!",
		Answers: [
			{
				Text: "Not for you?",
				LeadsTo: "PlayTheMorra",
			},
		],
	},
	PlayTheMorra: {
		Text: "Try out the Morra Gambit or 2.c3 against the Sicilian, the Italian game against 1...e5, and maybe 3.e5 against the French",
	},
	LotsOfTheory: {
		Text: "Are you a king hunter?",
		Answers: [
			{
				Text: "I like to attack the king directly",
				LeadsTo: "WhatIsYourFeelingOnGambits",
			},
			{
				Text: "I like to get an advantage in theory and torture you in a long game",
				LeadsTo: "PlayD4",
			},
		],
	},
	WhatIsYourFeelingOnGambits: {
		Text: "What is your feeling on gambits?",
		Answers: [
			{
				Text: "Give me a time machine, I want to live in Morphy's day!",
				LeadsTo: "PlayTheMorra",
			},
			{
				Text: "Crude and unrefined. I like modern theory",
				LeadsTo: "OpenSicilian",
			},
		],
	},
	OpenSicilian: {
		Text: "Play the Open Sicilian, the critical lines of the Ruy Lopez 3.Nc3 against the French, the Austrian attack against the Pirc",
	},
	PlayD4: {
		Text: "Play 1.d4 where you try to force an advantage! You are going to solve chess. Play the long Classical lines against the King's Indian, 4.Qc2 against the Nimzo-Indian, and so on",
	},
	/** black **/
	YourOpponentPlayed: {
		Text: "Your opponent played:",
		Answers: [
			{
				Text: "1.c4 or 1.Nf3",
				LeadsTo: "WhatDoYouPlayAgainstD4",
			},
			{
				Text: "Other",
				LeadsTo: "Lol",
			},
			{
				Text: "1.d4",
				LeadsTo: "HowDoYouLikeToPlayBlack",
			},
			{
				Text: "1.e4",
				LeadsTo: "DoYouLikeSharpTactics",
			}
		],
	},
	WhatDoYouPlayAgainstD4: {
		Text: "What do you play against 1.d4?",
		Answers: [
			{
				Text: "Openings on the dark squares like the King's Indian or Benoni",
				LeadsTo: "PlayG6",
			},
			{
				Text: "Nimzo-Indian, Queen's Indian, or Bogo-Indian",
				LeadsTo: "PlayNf6",
			},
			{
				Text: "Openings on the light squares like the Slav or Queen's Gambit Declined",
				LeadsTo: "PlayD5",
			},
		],
	},
	PlayG6: {
		Text: "Play 1...g6 against both, transposing to your 1.d4 opening. If they don't play d2-d4 ever, then you can play ...e5 and attack the kingside!",
	},
	PlayNf6: {
		Text: "Play ...Nf6 and ...e6, and if they don't let you get your 1.d4 opening then you can play ...c5 and ...b6, when they will feel the quills of the Hedgehog!"
	},
	PlayD5: {
		Text: "You can play 1...d5 against 1.Nf3 or 1...e6 or 1...c6 against 1.c4, and will probably reach your 1.d4 opening, a similar structure",
	},
	Lol: {
		Text: "Thank your opponent for giving you an easy day, and just follow classical principles. If your opponent was audacious enough to choose Grob, then you should have a good laugh!",
	},
	HowDoYouLikeToPlayBlack: {
		Text: "How do you like to play?",
		Answers: [
			{
				Text: "Solidly",
				LeadsTo: "SolidlyBlack",
			},
			{
				Text: "Aggressively",
				LeadsTo: "AggressivelyBlack",
			},
		],
	},
	SolidlyBlack: {
		Text: "How would you rather play?",
		Answers: [
			{
				Text: "Restrict my opponent's possibilities in a closed position",
				LeadsTo: "SharpPlay",
			},
			{
				Text: "Have free-flowing and open play!",
				LeadsTo: "PlayTheNimzoIndian",
			}
		],
	},
	SharpPlay: {
		Text: "What are your feelings on sharp play?",
		Answers: [
			{
				Text: "No! I want to equalise with sound and simple play, and slowly outplay my opponent (or make a draw)",
				LeadsTo: "PlayQueensGambitDeclined",
			},
			{
				Text: "I am okay with taking any dangers, as long as the foundation of my position is solid!",
				LeadsTo: "PlayTheSlav",
			},
		],
	},
	PlayQueensGambitDeclined: {
		Text: "Play Queen's Gambit Declined, Orthodox Defense",
	},
	PlayTheSlav: {
		Text: "Play the Slav Defense or the Ragozin Queen's Gambit",
	},
	PlayTheNimzoIndian: {
		Text: "Play the Nimzo-Indian and Queen's Indian or Bogo Indian Defenses, or the Queen's Gambit Accepted",
	},
	AggressivelyBlack: {
		Text: "Have a good memory?",
		Answers: [
			{
				Text: "Yes, and I love to learn sharp and forcing variations!",
				LeadsTo: "PlayTheGrunfeld",
			},
			{
				Text: "No, even though I like aggressive play, I prefer to think over the board and follow plans!",
				LeadsTo: "PlayTheKingsIndian",
			},
		],
	},
	PlayTheGrunfeld: {
		Text: "Play the Grünfeld defense!",
	},
	PlayTheKingsIndian: {
		Text: "Play the King's Indian, Benoni, or Dutch Defense!",
	},
	DoYouLikeSharpTactics: {
		Text: "Do you like sharp tactics?",
		Answers: [
			{
				Text: "No",
				LeadsTo: "PreferOpenOrClosed",
			},
			{
				Text: "Yes",
				LeadsTo: "YourOpinionOnTheory",
			},
		],
	},
	PreferOpenOrClosed: {
		Text: "Do you prefer open or closed positions?",
		Answers: [
			{
				Text: "Open positions with smooth piece play",
				LeadsTo: "TrompowskiBlack",
			},
			{
				Text: "Closed positions with lots of maneuvering!",
				LeadsTo: "PlayRuyLopez",
			}
		],
	},
	TrompowskiBlack: {
		Text: "Play the Trompowski!",
	},
	PlayRuyLopez: {
		Text: "Play the Ruy Lopez main lines",
	},
	YourOpinionOnTheory: {
		Text: "Your opinion on theory?",
		Answers: [
			{
				Text: "I don't like theory - I prefer to get my own way!",
				LeadsTo: "PlayPirc",
			},
			{
				Text: "Theory's okay, I don't mind hitting the books!",
				LeadsTo: "AfraidOfCheckmate",
			}
		],
	},
	PlayPirc: {
		Text: "Play Pirc, Modern, or Alekhine Defenses!",
	},
	AfraidOfCheckmate: {
		Text: "Are you afraid of getting checkmated?",
		Answers: [
			{
				Text: "Not as long as I have the chance to checkmate my opponent!",
				LeadsTo: "PlaySicilianDefense",
			},
			{
				Text: "Yes, it is just much easier to play aggressively when I don't have to worry about my king",
				LeadsTo: "PlayFrench",
			}
		],
	},
	PlaySicilianDefense: {
		Text: "Play the Sicilian Defense!",
	},
	PlayFrench: {
		Text: "Play the French Defense!",
	},
};
