export const GET_ALL_DECKS = "GET_ALL_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const RESET_NEW_DECK_ID = "RESET_NEW_DECK_ID";

export function getAllDecks(decks) {
    return {
      type: GET_ALL_DECKS,
      decks
    };
  }
  
  export function adddDeck(deck) {
    return {
      type: ADD_DECK,
      deck
    };
  }
  
  export function addCardToDeck(deckId, card) {
    return {
      type: ADD_CARD_TO_DECK,
      deckId,
      card
    };
  }
  
  export function deleteDeck(deckId) {
    return {
      type: DELETE_DECK,
      deckId
    };
  }
  
  export function resetNewDeckId() {
    return {
      type: RESET_NEW_DECK_ID
    };
  }