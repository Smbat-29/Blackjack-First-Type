// const cards = [
//     { url: './card/Qyap2.png', value: 2 },
//     { url: './card/Sirt2.png', value: 2 },
//     { url: './card/Xar2.png', value: 2 },
//     { url: './card/Xach2.png', value: 2 },
//     { url: './card/SirtTuz.png', value: 11 }, // Տուզ՝ սկզբնական 11 արժեքով
//     { url: './card/QyapTuz.png', value: 11 },
//     { url: './card/XarTuz.png', value: 11 },
//     { url: './card/XachTuz.png', value: 11 },
//     // Այստեղ պետք է ավելացնել մնացած քարտերը՝ ըստ ձեր պահանջի
//   ];
  
//   // 1. Խառնել քարտերը
//   function shuffle(deck) {
//     return deck.sort(() => Math.random() - 0.5);
//   }
//   /*
//   **Բացատրություն**: 
//   Այս ֆունկցիան խառնում է քարտերը պատահական հերթականությամբ `sort` մեթոդի և պատահական թվի հիման վրա։
//   */
  
//   // Տախտակ և միավորների սկզբնական վիճակ
//   let deck = [];
//   let playerCards = [];
//   let dealerCards = [];
//   let playerScore = 0;
//   let dealerScore = 0;
  
//   // DOM տարրերի ընտրություն
//   const playerCardsDiv = document.querySelector('.myCards');
//   const dealerCardsDiv = document.querySelector('.cardsDiv');
//   const playerScoreSpan = document.querySelector('.myNumber span');
//   const dealerScoreSpan = document.querySelector('.number span');
//   const openCardsButton = document.getElementById('openCards');
//   const stopCardsButton = document.getElementById('stopCards');
//   const deleteCardsButton = document.getElementById('deleteCards');
  
//   // 2. Սկսել խաղը
//   function startGame() {
//     deck = shuffle([...cards]); // Խառնել քարտերը
//     playerCards = [];
//     dealerCards = [];
//     playerScore = 0;
//     dealerScore = 0;
  
//     // Մաքրել DOM-ը
//     playerCardsDiv.innerHTML = '';
//     dealerCardsDiv.innerHTML = '';
//     playerScoreSpan.textContent = playerScore;
//     dealerScoreSpan.textContent = dealerScore;
  
//     // Բաժանել նախնական քարտեր
//     drawCard(playerCards, playerCardsDiv);
//     drawCard(playerCards, playerCardsDiv);
//     drawCard(dealerCards, dealerCardsDiv);
//     drawCard(dealerCards, dealerCardsDiv);
  
//     // Ակտիվացնել կոճակները
//     openCardsButton.disabled = false;
//     stopCardsButton.disabled = false;
//   }
//   /*
//   **Բացատրություն**:
//   Այս ֆունկցիան նոր խաղ է սկսում՝ զրոյացնելով խաղացողի և դիլլերի միավորները, մաքրելով քարտերը էկրանին և բաժանելով երկուական քարտ։
//   */
  
//   // 3. Քարտ վերցնել
//   function drawCard(hand, handDiv) {
//     const card = deck.pop(); // Վերցնել վերջին քարտը տախտակից
//     hand.push(card); // Ավելացնել քարտը համապատասխան ցուցակում
//     renderCard(card, handDiv); // Ցուցադրել քարտը DOM-ում
//     updateScores();
//   }
//   /*
//   **Բացատրություն**:
//   Այս ֆունկցիան վերցնում է տախտակից քարտ, ավելացնում խաղացողի կամ դիլլերի ցուցակում, և այնուհետև թարմացնում DOM-ը։
//   */
  
//   // 4. Ցուցադրել քարտը DOM-ում
//   function renderCard(card, container) {
//     const img = document.createElement('img');
//     img.src = card.url;
//     container.appendChild(img);
//   }
//   /*
//   **Բացատրություն**:
//   Այս ֆունկցիան ստեղծում է քարտի պատկերն ու ավելացնում այն DOM-ում համապատասխան տարրի մեջ։
//   */
  
//   // 5. Միավորների հաշվարկ, ներառյալ Տուզի արժեքը (1 կամ 11)
//   function calculateScore(hand) {
//     let score = 0;
//     let aceCount = 0;
  
//     hand.forEach(card => {
//       score += card.value;
//       if (card.value === 11) aceCount++; // Գտնել Տուզերը
//     });
  
//     while (score > 21 && aceCount > 0) {
//       score -= 10; // Եթե միավորները գերազանցում են 21, Տուզը դառնում է 1
//       aceCount--;
//     }
  
//     return score;
//   }
//   /*
//   **Բացատրություն**:
//   Այս ֆունկցիան հաշվում է խաղացողի կամ դիլլերի միավորները՝ հաշվի առնելով Տուզի արժեքը, որը կարող է լինել 11 կամ 1՝ կախված իրավիճակից։
//   */
  
//   // 6. Թարմացնել միավորները
//   function updateScores() {
//     playerScore = calculateScore(playerCards);
//     dealerScore = calculateScore(dealerCards);
//     playerScoreSpan.textContent = playerScore;
//     dealerScoreSpan.textContent = dealerScore;
  
//     if (playerScore > 21) {
//       alert('Պարտություն'); // Խաղացողը գերազանցել է 21
//       endGame();
//     }
//   }
//   /*
//   **Բացատրություն**:
//   Այս ֆունկցիան թարմացնում է խաղացողի և դիլլերի միավորները և ստուգում է, արդյոք խաղացողը գերազանցել է 21-ը։
//   */
  
//   // 7. Դիլլերի քայլեր և խաղի ավարտ
//   function stopGame() {
//     while (dealerScore < 17) {
//       drawCard(dealerCards, dealerCardsDiv); // Դիլլերը քարտ է վերցնում, եթե միավորները փոքր են 17-ից
//     }
  
//     if (dealerScore > 21 || playerScore > dealerScore) {
//       alert('Հաղթանակ'); // Խաղացողը հաղթում է
//     } else if (playerScore === dealerScore) {
//       alert('Ոչ ոքի');
//     } else {
//       alert('Պարտություն'); // Դիլլերը հաղթում է
//     }
  
//     endGame();
//   }
//   /*
//   **Բացատրություն**:
//   Այս ֆունկցիան ավարտում է խաղը՝ դիլլերին թույլ տալով վերցնել քարտեր մինչև 17 միավոր, այնուհետև որոշում հաղթողին։
//   */
  
//   // 8. Խաղի ավարտ
//   function endGame() {
//     openCardsButton.disabled = true;
//     stopCardsButton.disabled = true;
//   }
//   /*
//   **Բացատրություն**:
//   Այս ֆունկցիան անջատում է կոճակները խաղի ավարտից հետո։
//   */
  
//   // 9. Սկսել նոր խաղ (կոճակների իրադարձություններ)
//   deleteCardsButton.addEventListener('click', startGame);
//   openCardsButton.addEventListener('click', () => drawCard(playerCards, playerCardsDiv));
//   stopCardsButton.addEventListener('click', stopGame);
  
//   /*
//   **Բացատրություն**:
//   Այս իրադարձությունները կապում են կոճակները համապատասխան ֆունկցիաների հետ՝ ապահովելով "Սկսել նորից", "Բացել Քարտ", և "Կանգ" գործողությունները։
//   */
  
//   // Խաղի սկիզբ
//   startGame();
//   /*
//   **Բացատրություն**:
//   Ավտոմատ սկսում է խաղը էջի բեռնվելուց հետո:







































