var call
var balans
var arr_cards_hend
var bank
var how_much_in_game
var arr_cards_hend
var arr_cards_on_table
var arr_cards_hand_table
var mast_1
var mast_2
var val_1
var val_2
var table_cards
var BB = 20
// var count_BB = setInterval(count_BB_func, 100)
// function count_BB_func() {
//     if (document.querySelectorAll('.playersSeats .playerSeat')) {
//         var players_all = document.querySelectorAll('.playersSeats .playerSeat')
//         var is_who_no_say = false
//         for (var i=0; i<players_all.length; i++) {
//             if ( document.querySelectorAll('.playersSeats .playerSeat .profileCash')[i].children.length === 1
//                 && document.querySelectorAll('.playersSeats .playerSeat .player')[i].classList.contains('active') 
//             ) {
//                 is_who_no_say = true
//             }
//         }

//         if ( is_who_no_say && document.querySelectorAll('#table-cards .card').length === 0 ) {
//             var min_pref = 0
//             var plaaaa = document.querySelectorAll('.playersSeats .playerBetValue')
//             for (var zzz=0; zzz<plaaaa.length; zzz++) {
//                 if (min_pref === 0) {
//                     min_pref = Number(plaaaa[zzz].textContent)
//                 } else {
//                     if (min_pref > Number(plaaaa[zzz].textContent)) {
//                         min_pref = Number(plaaaa[zzz].textContent)
//                     }
//                 }
//             }
//             BB = min_pref*2
//             // BB = Number(document.querySelectorAll('.playersSeats .playerSeat.playerSeat_2 .chipValue')[0].getAttribute('title'))
//         }
//     }
// }
function before_12_BB() {
    var is_go = false
    
    if ( (val_1 === 14 || val_2 === 14 ) && document.querySelectorAll('.playersSeats .player').length <= 6 ) {
        is_go = true
    }
    if ( ((val_1 === 13 && Number(val_2) >= 9 ) || (val_2 === 13 && Number(val_1) >= 9 ) ) && document.querySelectorAll('.playersSeats .player').length <= 4) {
        is_go = true
    }
    if ((val_1 === 13 || val_2 === 13) && document.querySelectorAll('.playersSeats .player').length <= 3) {
        is_go = true
    }
    if ((val_1 === 12 || val_2 === 12)  && document.querySelectorAll('.playersSeats .player').length === 2) {
        is_go = true
    }
    if (val_1 === val_2 || is_go === true) {
        if (document.querySelector('.rangeButtons div')) {
            document.querySelector('.rangeButtons div').children[3].click()
            document.querySelector('.actionButtonsContainer .button-success').click()
        } else {
            document.querySelector('.actionButtonsContainer .button-secondary').click()
        }
    } else {
        if (document.querySelector('.actionButtonsContainer .button-secondary').textContent === "Чек" ) {
            document.querySelector('.actionButtonsContainer .button-secondary').click()
        } else {
            document.querySelector('.actionButtonsContainer .button-error').click()
        }
    }
}


function after_12_BB() {
    var is_go = false

    if ( document.querySelectorAll('.playersSeats .player').length === 6 ) {
        if ( (val_1 === 14 || val_1 === 13 || val_1 === 12 || val_1 === 11 || val_1 === 10 || val_1 === 9 ) 
          && (val_2 === 14 || val_2 === 13 || val_2 === 12 || val_2 === 11 || val_2 === 10 || val_1 === 9 ) ) {
            is_go = true
        }
        if ( val_1 === 14 || val_2 === 14 ) {
            is_go = true
        }
    }

    if ( document.querySelectorAll('.playersSeats .player').length === 5 ) {
        if ( (val_1 === 14 || val_1 === 13 || val_1 === 12 || val_1 === 11 || val_1 === 10 || val_1 === 9 || val_1 === 8 ) 
          && (val_2 === 14 || val_2 === 13 || val_2 === 12 || val_2 === 11 || val_2 === 10 || val_2 === 9 || val_1 === 8 ) ) {
            is_go = true
        }
        if ( val_1 === 14 || val_2 === 14 ) {
            is_go = true
        }
    }

    if ( document.querySelectorAll('.playersSeats .player').length === 4 ) {
        if ( ((val_1 === 14 || val_1 === 13 || val_1 === 12 || val_1 === 11 || val_1 === 10 || val_1 === 9 || val_1 === 8 || val_1 === 7 ) 
          && (val_2 === 14 || val_2 === 13 || val_2 === 12 || val_2 === 11 || val_2 === 10 || val_2 === 9 || val_1 === 8 || val_1 === 7 )) 
          || ( val_1 === val_2 && val_1 === 8 )  
        ) {
            is_go = true
        }
        if ( val_1 === 14 || val_2 === 14 || val_1 === 13 || val_2 === 13 ) {
            is_go = true
        }
    }
    
    if ( document.querySelectorAll('.playersSeats .player').length === 3 ) {
        if ( (val_1 === 14 || val_1 === 13 || val_1 === 12 || val_1 === 11 || val_1 === 10 || val_1 === 9 || val_1 === 8 || val_1 === 7 || val_1 === 6 ) 
          && (val_2 === 14 || val_2 === 13 || val_2 === 12 || val_2 === 11 || val_2 === 10 || val_2 === 9 || val_2 === 8 || val_1 === 7 || val_1 === 6 ) ) {
            is_go = true
        }
        if ( val_1 === 14 || val_2 === 14 || val_1 === 13 || val_2 === 13 ) {
            is_go = true
        }
    }
    
    if ( document.querySelectorAll('.playersSeats .player').length === 2 ) {
        if ( (val_1 === 14 || val_1 === 13 || val_1 === 12 || val_1 === 11 || val_1 === 10 || val_1 === 9 || val_1 === 8 || val_1 === 7 || val_1 === 6 || val_1 === 5 ) 
          && (val_2 === 14 || val_2 === 13 || val_2 === 12 || val_2 === 11 || val_2 === 10 || val_2 === 9 || val_2 === 8 || val_2 === 7 || val_1 === 6 || val_1 === 5 ) ) {
            is_go = true
        }
        if ( val_1 === 14 || val_2 === 14 || val_1 === 13 || val_2 === 13 || val_1 === 12 || val_2 === 12 ) {
            is_go = true
        }
    }

    if (val_1 === val_2 ) {
        is_go = true
    }

    // if ( document.querySelectorAll('.playersSeats .player').length === 6 ) {
    //     if ( (val_1 === 10 && val_2 >= 9) || ( val_2 === 10 && val_1 >= 9 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 11 && val_2 >= 9) || ( val_2 === 11 && val_1 >= 9 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 12 && val_2 >= 9) || ( val_2 === 12 && val_1 >= 9 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 13 && val_2 >= 8) || ( val_2 === 13 && val_1 >= 8 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 14 && val_2 >= 4) || ( val_2 === 14 && val_1 >= 4 ) ) {
    //         is_go = true
    //     }
    //     if (mast_1 === mast_2) {
    //         if ( (val_1 === 7 && val_2 >= 6) || ( val_2 === 7 && val_1 >= 6 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 8 && val_2 >= 6) || ( val_2 === 8 && val_1 >= 6 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 9 && val_2 >= 6) || ( val_2 === 9 && val_1 >= 6 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 10 && val_2 >= 6) || ( val_2 === 10 && val_1 >= 6 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 11 && val_2 >= 6) || ( val_2 === 11 && val_1 >= 6 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 12 && val_2 >= 3) || ( val_2 === 12 && val_1 >= 3 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 13 && val_2 >= 2) || ( val_2 === 13 && val_1 >= 2 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 14 && val_2 >= 2) || ( val_2 === 14 && val_1 >= 2 ) ) {
    //             is_go = true
    //         }
    //     }
    //     if ( val_1 === val_2 && val_1 >= 4 ) {
    //         is_go = true
    //     }
    // }
    // if ( document.querySelectorAll('.playersSeats .player').length === 5 ) {
    //     if ( (val_1 === 10 && val_2 >= 9) || ( val_2 === 10 && val_1 >= 9 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 11 && val_2 >= 8) || ( val_2 === 11 && val_1 >= 8 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 12 && val_2 >= 8) || ( val_2 === 12 && val_1 >= 8 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 13 && val_2 >= 8) || ( val_2 === 13 && val_1 >= 8 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 14 && val_2 >= 4) || ( val_2 === 14 && val_1 >= 4 ) ) {
    //         is_go = true
    //     }
    //     if (mast_1 === mast_2) {
    //         if ( (val_1 === 7 && val_2 >= 6) || ( val_2 === 7 && val_1 >= 6 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 8 && val_2 >= 6) || ( val_2 === 8 && val_1 >= 6 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 9 && val_2 >= 6) || ( val_2 === 9 && val_1 >= 6 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 10 && val_2 >= 6) || ( val_2 === 10 && val_1 >= 6 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 11 && val_2 >= 6) || ( val_2 === 11 && val_1 >= 6 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 12 && val_2 >= 4) || ( val_2 === 12 && val_1 >= 4 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 13 && val_2 >= 2) || ( val_2 === 13 && val_1 >= 2 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 14 && val_2 >= 2) || ( val_2 === 14 && val_1 >= 2 ) ) {
    //             is_go = true
    //         }
    //     }
    //     if ( val_1 === val_2 && val_1 >= 4 ) {
    //         is_go = true
    //     }
    // }
    // if ( document.querySelectorAll('.playersSeats .player').length === 4 ) {
    //     if ( (val_1 === 10 && val_2 >= 9) || ( val_2 === 10 && val_1 >= 9 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 11 && val_2 >= 8) || ( val_2 === 11 && val_1 >= 8 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 12 && val_2 >= 8) || ( val_2 === 12 && val_1 >= 8 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 13 && val_2 >= 7) || ( val_2 === 13 && val_1 >= 7 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 14 && val_2 >= 3) || ( val_2 === 14 && val_1 >= 3 ) ) {
    //         is_go = true
    //     }
    //     if (mast_1 === mast_2) {
    //         if ( (val_1 === 8 && val_2 >= 7) || ( val_2 === 8 && val_1 >= 7 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 9 && val_2 >= 7) || ( val_2 === 9 && val_1 >= 7 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 10 && val_2 >= 7) || ( val_2 === 10 && val_1 >= 7 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 11 && val_2 >= 7) || ( val_2 === 11 && val_1 >= 7 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 12 && val_2 >= 4) || ( val_2 === 12 && val_1 >= 4 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 13 && val_2 >= 2) || ( val_2 === 13 && val_1 >= 2 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 14 && val_2 >= 2) || ( val_2 === 14 && val_1 >= 2 ) ) {
    //             is_go = true
    //         }
    //     }
    //     if ( val_1 === val_2 && val_1 >= 4 ) {
    //         is_go = true
    //     }
    // }
    // if ( document.querySelectorAll('.playersSeats .player').length === 3 ) {
    //     if ( (val_1 === 10 && val_2 >= 9) || ( val_2 === 10 && val_1 >= 9 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 11 && val_2 >= 8) || ( val_2 === 11 && val_1 >= 8 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 12 && val_2 >= 8) || ( val_2 === 12 && val_1 >= 8 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 13 && val_2 >= 5) || ( val_2 === 13 && val_1 >= 5 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 14 && val_2 >= 2) || ( val_2 === 14 && val_1 >= 2 ) ) {
    //         is_go = true
    //     }
    //     if (mast_1 === mast_2) {
    //         if ( (val_1 === 8 && val_2 >= 7) || ( val_2 === 8 && val_1 >= 7 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 9 && val_2 >= 7) || ( val_2 === 9 && val_1 >= 7 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 10 && val_2 >= 7) || ( val_2 === 10 && val_1 >= 7 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 11 && val_2 >= 7) || ( val_2 === 11 && val_1 >= 7 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 12 && val_2 >= 4) || ( val_2 === 12 && val_1 >= 4 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 13 && val_2 >= 2) || ( val_2 === 13 && val_1 >= 2 ) ) {
    //             is_go = true
    //         }
    //     }
    //     if ( val_1 === val_2 && val_1 >= 3 ) {
    //         is_go = true
    //     }
    // }
    // if ( document.querySelectorAll('.playersSeats .player').length === 2 ) {
    //     if ( (val_1 === 10 && val_2 >= 9) || ( val_2 === 10 && val_1 >= 9 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 11 && val_2 >= 8) || ( val_2 === 11 && val_1 >= 8 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 12 && val_2 >= 8) || ( val_2 === 12 && val_1 >= 8 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 13 && val_2 >= 5) || ( val_2 === 13 && val_1 >= 5 ) ) {
    //         is_go = true
    //     }
    //     if ( (val_1 === 14 && val_2 >= 2) || ( val_2 === 14 && val_1 >= 2 ) ) {
    //         is_go = true
    //     }
    //     if (mast_1 === mast_2) {
    //         if ( (val_1 === 9 && val_2 >= 8) || ( val_2 === 9 && val_1 >= 8 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 10 && val_2 >= 7) || ( val_2 === 10 && val_1 >= 7 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 11 && val_2 >= 7) || ( val_2 === 11 && val_1 >= 7 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 12 && val_2 >= 4) || ( val_2 === 12 && val_1 >= 4 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 13 && val_2 >= 2) || ( val_2 === 13 && val_1 >= 2 ) ) {
    //             is_go = true
    //         }
    //         if ( (val_1 === 14 && val_2 >= 2) || ( val_2 === 14 && val_1 >= 2 ) ) {
    //             is_go = true
    //         }
    //     }
    //     if ( val_1 === val_2 && val_1 >= 4 ) {
    //         is_go = true
    //     }
    // }


    // if (val_1 === 14 || val_2 === 14 ) {
    //     is_go = true
    // }
    // if ( ((val_1 === 13 && val_2 >= 9 ) || (val_2 === 13 && val_1 >= 9 ) ) && document.querySelectorAll('.playersSeats .player').length <= 4) {
    //     is_go = true
    // }
    // if ((val_1 === 13 || val_2 === 13) && document.querySelectorAll('.playersSeats .player').length <= 3) {
    //     is_go = true
    // }
    // if ((val_1 === 12 || val_2 === 12)  && document.querySelectorAll('.playersSeats .player').length === 2) {
    //     is_go = true
    // }

    if (table_cards.length === 0) {
        if ( is_go === true ) {
            // if ( ((val_1 === 14 || val_1 === 13 || val_1 === 12 ) && (val_2 === 14 || val_2 === 13 || val_2 === 12 )) 
            //   || (val_1 === val_2 && val_1 >= 8 )
            // ) {
                // if (document.querySelectorAll('.rangeButtons div button')[3]) {
                //     document.querySelectorAll('.rangeButtons div button')[3].click()
                //     document.querySelector('.actionButtonsContainer .button-success').click()
                // } else {
                //     document.querySelector('.actionButtonsContainer .button-secondary').click()
                // }
            // } else {
                // if ( balans/BB < 12 ) {
                //     if (document.querySelectorAll('.rangeButtons div button')[3]) {
                //         document.querySelectorAll('.rangeButtons div button')[3].click()
                //         document.querySelector('.actionButtonsContainer .button-success').click()
                //     } else {
                        // if (document.querySelector('.actionButtonsContainer .button-secondary').textContent === "Чек" ) {
                        //     document.querySelector('.actionButtonsContainer .button-secondary').click()
                        // } else {
                            var is_call = document.querySelector('.actionButtonsContainer .button-secondary').textContent.split(' ')
                            if ( Number(is_call[is_call.length-1]) <= 2*BB) {
                                if (document.querySelectorAll('.rangeButtons div button')[3]) {
                                    document.querySelectorAll('.rangeButtons div button')[3].click()
                                    document.querySelector('.actionButtonsContainer .button-success').click()
                                } else {
                                    document.querySelector('.actionButtonsContainer .button-secondary').click()
                                }
                                // document.querySelector('.actionButtonsContainer .button-secondary').click()
                            } else {
                                document.querySelector('.actionButtonsContainer .button-error').click()
                            }
                        // }
                //     }
                // } else {
                    // document.querySelector('.actionButtonsContainer .button-secondary').click()
                // }
            // }
        } else {
            if (document.querySelector('.actionButtonsContainer .button-secondary').textContent === "Чек" ) {
                document.querySelector('.actionButtonsContainer .button-secondary').click()
            } else {
                document.querySelector('.actionButtonsContainer .button-error').click()
            }
        }
    } else {
        var is_need_bet = bet_check()
        if ( is_need_bet === true ) {
            // if (!document.querySelectorAll('.rangeButtons div button')[0].classList.contains('disabled')) {
            //     document.querySelectorAll('.rangeButtons div button')[0].click()
            //     document.querySelector('.actionButtonsContainer .button-success').click()
            // } else {
            //     if (!document.querySelectorAll('.rangeButtons div button')[1].classList.contains('disabled')) {
            //         document.querySelectorAll('.rangeButtons div button')[1].click()
            //         document.querySelector('.actionButtonsContainer .button-success').click()
            //     } else {
                if (document.querySelectorAll('.rangeButtons div button')[3]) {
                    document.querySelectorAll('.rangeButtons div button')[3].click()
                    document.querySelector('.actionButtonsContainer .button-success').click()
                } else {
                    document.querySelector('.actionButtonsContainer .button-secondary').click()
                }
        
            //     }
            // }
        } else {
            if (document.querySelector('.actionButtonsContainer .button-secondary').textContent === "Чек" ) {
                // document.querySelector('.actionButtonsContainer .button-success').click()
                document.querySelector('.actionButtonsContainer .button-secondary').click()
            } else {
                // var is_call = document.querySelector('.actionButtonsContainer .button-secondary').textContent.split(' ')
                // if ( Number(is_call[1]) <= BB) {
                //     document.querySelector('.actionButtonsContainer .button-secondary').click()
                // } else {
                    document.querySelector('.actionButtonsContainer .button-error').click()
                // }
            }
        }
    }
    
}
function bet_check() {
    var is_may = false
    
    var best_combin = find_best_combination_in_hand( arr_cards_hand_table )
    // alert(JSON.stringify(best_combin))

    if ( best_combin.combination === 'straight_flush' ) {
        var exist_hend_card_in_comb = false
        for (var n=0 in arr_cards_hend) {
            for (var nn=0 in best_combin.cards) {
                if ( arr_cards_hend[n].val === best_combin.cards[nn].val && arr_cards_hend[n].mast === best_combin.cards[nn].mast ) {
                    exist_hend_card_in_comb = true
                }
            }
        }
        if (exist_hend_card_in_comb === true) {
            return true
        }
    }

    if ( best_combin.combination === 'four_of_a_kind' ) {
        var four = best_combin.cards.slice(0,4)
        var one = best_combin.cards.slice(-1)
        var exist_hend_card_in_comb = false
        for (var n=0 in arr_cards_hend) {
            for (var nn=0 in four) {
                if ( arr_cards_hend[n].val === four[nn].val && arr_cards_hend[n].mast === four[nn].mast ) {
                    exist_hend_card_in_comb = true
                }
            }
        }
        if (exist_hend_card_in_comb === true) {
            return true
        } else {
            if (one[0].val === 14 || arr_cards_hend[0].val === 14 || arr_cards_hend[1].val === 14 ) {
                return true
            } else {
                if (  how_much_in_game <= 6 && (arr_cards_hend[1].val === 13) && one[0].val < 13 ) {
                    return true
                } else {
                    if ( how_much_in_game === 2 && (arr_cards_hend[1].val === 12) && one[0].val < 12 ) {
                        return true
                    } else {
                        return false
                    }
                }
            }
            
        }
    }

    if ( best_combin.combination === 'full_house' ) {
        var three = best_combin.cards.slice(0,3)
        var two = best_combin.cards.slice(-2)
        if ( three[0].val === arr_cards_hend[0].val || three[0].val === arr_cards_hend[1].val ) {
            return true
        } else {
            if ( (two[1].val === arr_cards_hend[0].val || two[1].val === arr_cards_hend[1].val) && how_much_in_game <= 5 ) {
                return true
            } else {
                return false
            }
        }
    }

    if ( best_combin.combination === 'flush' ) {
        var exist_1_card = false
        var exist_2_card = false
        for (var nn=0 in best_combin.cards) {
            if ( arr_cards_hend[0].val === best_combin.cards[nn].val && arr_cards_hend[0].mast === best_combin.cards[nn].mast ) {
                exist_1_card = true
            }
        }
        for (var nn=0 in best_combin.cards) {
            if ( arr_cards_hend[1].val === best_combin.cards[nn].val && arr_cards_hend[1].mast === best_combin.cards[nn].mast ) {
                exist_2_card = true
            }
        }

        if ( exist_1_card === true && exist_2_card === true ) {
            return true
        } else {
            if ( (exist_1_card === true || exist_2_card === true) && how_much_in_game <= 4 ) {
                return true
            } else {
                return false
            }
        }
    }

    var is_flash_dro_on_table = false
    var count_mast = {
        "bu":[],
        "ch":[],
        "pi":[],
        "kr":[]
    }
    for ( var mast in count_mast) {
        for ( var a = 0 in arr_cards_on_table) {
            if ( arr_cards_on_table[a].mast === mast ) {
                count_mast[mast].push( arr_cards_on_table[a] )
            }
        }
    }
    var arr_best_count_mast = []
    for ( var mast in count_mast) {
        if ( count_mast[mast].length > arr_best_count_mast.length ) {
            arr_best_count_mast = count_mast[mast]
        }
    }
    if ( arr_best_count_mast.length >= 4 ) {
        is_flash_dro_on_table = true
    }
    
    if ( best_combin.combination === 'straight' ) {
        var exist_1_card = false
        var exist_2_card = false
        for (var nn=0 in best_combin.cards) {
            if ( arr_cards_hend[0].val === best_combin.cards[nn].val && arr_cards_hend[0].mast === best_combin.cards[nn].mast ) {
                exist_1_card = true
            }
        }
        for (var nn=0 in best_combin.cards) {
            if ( arr_cards_hend[1].val === best_combin.cards[nn].val && arr_cards_hend[1].mast === best_combin.cards[nn].mast ) {
                exist_2_card = true
            }
        }
        
        if ( exist_1_card === true && exist_2_card === true && is_flash_dro_on_table === false ) {
            return true
        } else {
            if ( exist_1_card === true && exist_2_card === true && how_much_in_game === 2 && is_flash_dro_on_table === true ) {
                return true
            } else {
                if ( (exist_1_card === true || exist_2_card === true) && is_flash_dro_on_table === false ) {
                    return true
                } else {
                    return false
                }
            }
        }
    }


    // check straight dro 2 side
    var is_straight_dro_2_side_on_table = false
    var arr_modifed = arr_cards_on_table.sort((a, b) => a.val > b.val ? 1 : -1)
    var arr_straight = []
    for ( var a = 0 in arr_modifed) {
        if ( arr_straight.length === 0) { 
            arr_straight.push( { "val": arr_modifed[a].val, "mast": arr_modifed[a].mast } )
        } else {
            if ( arr_modifed[a].val !== arr_modifed[a-1].val ) {
                if ( arr_modifed[a].val - arr_modifed[a-1].val === 1  ) {
                    arr_straight.push( { "val": arr_modifed[a].val, "mast": arr_modifed[a].mast } )
                } else {
                    if ( arr_straight.length < 4 ) {
                        arr_straight = []
                        arr_straight.push( { "val": arr_modifed[a].val, "mast": arr_modifed[a].mast } )
                    }
                }
            }
        }
    }
    if ( arr_straight.length >= 4 ) {
        is_straight_dro_2_side_on_table = true
    }


    // check gatshot
    var is_gatshot_on_table = false
    arr_cards_on_table = arr_cards_on_table.sort((a, b) => a.val > b.val ? 1 : -1)
    if ( arr_cards_on_table.length === 5 ) {
        if ( 
            ( arr_cards_on_table[4].val - arr_cards_on_table[2].val === 2
                && arr_cards_on_table[4].val - arr_cards_on_table[3].val !== 1
                && arr_cards_on_table[3].val - arr_cards_on_table[2].val !== 1
                && arr_cards_on_table[2].val - arr_cards_on_table[1].val === 1
                && arr_cards_on_table[1].val - arr_cards_on_table[0].val === 1 )
            || ( arr_cards_on_table[4].val - arr_cards_on_table[3].val === 1
                && arr_cards_on_table[3].val - arr_cards_on_table[1].val === 2
                && arr_cards_on_table[3].val - arr_cards_on_table[2].val !== 1
                && arr_cards_on_table[2].val - arr_cards_on_table[1].val !== 1
                && arr_cards_on_table[1].val - arr_cards_on_table[0].val === 1 )
            || ( arr_cards_on_table[4].val - arr_cards_on_table[3].val === 1
                && arr_cards_on_table[3].val - arr_cards_on_table[2].val === 1
                && arr_cards_on_table[2].val - arr_cards_on_table[0].val === 2
                && arr_cards_on_table[2].val - arr_cards_on_table[1].val !== 1
                && arr_cards_on_table[1].val - arr_cards_on_table[0].val !== 1 )
        ) {
            is_gatshot_on_table = true
        }
    }


    if ( !(is_flash_dro_on_table === true && ( is_straight_dro_2_side_on_table === true || is_gatshot_on_table === true )) ) {

        
        if ( best_combin.combination === 'three_of_a_kind' ) {
            var three = best_combin.cards.slice(0,3)
            var two_high_cards = best_combin.cards.slice(-2)

            var exist_hend_card_in_comb = false
            for (var n=0 in arr_cards_hend) {
                for (var nn=0 in three) {
                    if ( arr_cards_hend[n].val === three[nn].val && arr_cards_hend[n].mast === three[nn].mast ) {
                        exist_hend_card_in_comb = true
                    }
                }
            }

            if ( how_much_in_game === 2 && exist_hend_card_in_comb === true) {
                return true
            }
            if ( how_much_in_game === 2 && exist_hend_card_in_comb === false 
                && arr_cards_hend[1].val === 14 
                && arr_cards_hend[0].val === 13 
                && arr_cards_hend[1].val > two_high_cards[1].val
                && arr_cards_hend[0].val > two_high_cards[0].val
            ) {
                return true
            }

            if ( exist_hend_card_in_comb === true 
                && is_flash_dro_on_table === false
                && is_straight_dro_2_side_on_table === false
                && is_gatshot_on_table === false
            ) {
                return true
            }
        }

        
        
        if ( best_combin.combination === 'two_pair' ) {
            var two_1 = best_combin.cards.slice(0,2)
            var two_2 = best_combin.cards.slice(2,4)
            var last_card = best_combin.cards.slice(-1)

            var exist_in_two_1 = false
            for (var n=0 in arr_cards_hend) {
                for (var nn=0 in two_1) {
                    if ( arr_cards_hend[n].val === two_1[nn].val && arr_cards_hend[n].mast === two_1[nn].mast ) {
                        exist_in_two_1 = true
                    }
                }
            }
            var exist_in_two_2 = false
            for (var n=0 in arr_cards_hend) {
                for (var nn=0 in two_2) {
                    if ( arr_cards_hend[n].val === two_2[nn].val && arr_cards_hend[n].mast === two_2[nn].mast ) {
                        exist_in_two_2 = true
                    }
                }
            }

            if ( how_much_in_game <= 4 && exist_in_two_1 === true && exist_in_two_2 === true 
                && is_flash_dro_on_table === false
                && is_straight_dro_2_side_on_table === false
            ) {
                return true
            }

            if ( is_flash_dro_on_table === false ) {
                if ( exist_in_two_1 === true && exist_in_two_2 === false ) {
                    if ( two_1[0].val === 14 ) {
                        if ( is_straight_dro_2_side_on_table === false && is_gatshot_on_table === false ) {
                            return true
                        } else {
                            if ( how_much_in_game <= 3 ) {
                                return true
                            }
                        }
                    }
                    if ( is_straight_dro_2_side_on_table === false && is_gatshot_on_table === false ) {
                        if ( two_1[0].val === 13 ) {
                                if ( arr_cards_on_table[arr_cards_on_table.length-1].val !== 14 && how_much_in_game <= 6 ) {
                                    return true
                                }
                                if ( arr_cards_on_table[arr_cards_on_table.length-1].val === 14 && how_much_in_game <= 3 ) {
                                    return true
                                }
                        }
                    }
                    if ( is_straight_dro_2_side_on_table === false && is_gatshot_on_table === true ) {
                        if ( two_1[0].val === 13 ) {
                            if ( arr_cards_on_table[arr_cards_on_table.length-1].val !== 14 && how_much_in_game <= 3 ) {
                                return true
                            }
                        }
                    }
                    if ( is_straight_dro_2_side_on_table === false && is_gatshot_on_table === false ) {
                        if ( two_1[0].val === 12 ) {

                            if ( arr_cards_on_table[arr_cards_on_table.length-2].val === 12 && how_much_in_game <= 3
                            ) {
                                return true
                            }
                            if ( arr_cards_on_table[arr_cards_on_table.length-1].val === 12 && how_much_in_game <= 4 ) {
                                return true
                            }
                        }
                    }
                }
                if ( exist_in_two_1 === false && exist_in_two_2 === true ) {
                    if ( is_straight_dro_2_side_on_table === false && is_gatshot_on_table === false ) {
                        if ( arr_cards_on_table[arr_cards_on_table.length-3].val === two_2[0].val && how_much_in_game <= 4 ) {
                            return true
                        }
                    }
                }
                if ( exist_in_two_1 === true || exist_in_two_2 === true ) {
                    if ( is_straight_dro_2_side_on_table === false && is_gatshot_on_table === false ) {
                        if ( how_much_in_game === 2 ) {
                            return true
                        }
                    }
                }
            }
        }


        

    }

        
    if ( best_combin.combination === 'one_pair' ) {
        var is_3_mast_on_table = false
        var count_mast = {
            "bu":[],
            "ch":[],
            "pi":[],
            "kr":[]
        }
        for ( var mast in count_mast) {
            for ( var a = 0 in arr_cards_on_table) {
                if ( arr_cards_on_table[a].mast === mast ) {
                    count_mast[mast].push( arr_cards_on_table[a] )
                }
            }
        }
        var arr_best_count_mast = []
        for ( var mast in count_mast) {
            if ( count_mast[mast].length > arr_best_count_mast.length ) {
                arr_best_count_mast = count_mast[mast]
            }
        }
        if ( arr_best_count_mast.length >= 3 ) {
            is_3_mast_on_table = true
        }

        // check straight dro 2 side
        var is_3_goUp_on_table = false
        var arr_modifed = arr_cards_on_table.sort((a, b) => a.val > b.val ? 1 : -1)
        var arr_straight = []
        for ( var a = 0 in arr_modifed) {
            if ( arr_straight.length === 0) { 
                arr_straight.push( { "val": arr_modifed[a].val, "mast": arr_modifed[a].mast } )
            } else {
                if ( arr_modifed[a].val !== arr_modifed[a-1].val ) {
                    if ( arr_modifed[a].val - arr_modifed[a-1].val === 1  ) {
                        arr_straight.push( { "val": arr_modifed[a].val, "mast": arr_modifed[a].mast } )
                    } else {
                        if ( arr_straight.length < 3 ) {
                            arr_straight = []
                            arr_straight.push( { "val": arr_modifed[a].val, "mast": arr_modifed[a].mast } )
                        }
                    }
                }
            }
        }
        if ( arr_straight.length >= 3 ) {
            is_3_goUp_on_table = true
        }

        
        var pair = best_combin.cards.slice(0,2)
        var three_high_cards = best_combin.cards.slice(-3)

        var exist_hend_card_in_comb = false
        for (var n=0 in arr_cards_hend) {
            for (var nn=0 in pair) {
                if ( arr_cards_hend[n].val === pair[nn].val && arr_cards_hend[n].mast === pair[nn].mast ) {
                    exist_hend_card_in_comb = true
                }
            }
        }

        if ( exist_hend_card_in_comb === true
            && is_flash_dro_on_table === false
            && is_straight_dro_2_side_on_table === false
            && is_gatshot_on_table === false
            && pair[0].val >= 10
        ) {
            return true
        }

        // if ( exist_hend_card_in_comb === true
        //     && is_3_mast_on_table === false
        //     && is_3_goUp_on_table === false
        //     && is_gatshot_on_table === false
        //     && pair[0].val === 14
        // ) {
        //     return true
        // }
        // if ( exist_hend_card_in_comb === true
        //     && is_3_mast_on_table === false
        //     && is_3_goUp_on_table === false
        //     && is_gatshot_on_table === false
        //     && pair[0].val === 13
        // ) {
        //     return true           
        // }
        // if ( exist_hend_card_in_comb === true
        //     && is_3_mast_on_table === false
        //     && is_3_goUp_on_table === false
        //     && is_gatshot_on_table === false
        //     && pair[0].val === 12
        // ) {
        //     return true
        // }
        // if ( exist_hend_card_in_comb === true
        //     && is_3_mast_on_table === false
        //     && is_3_goUp_on_table === false
        //     && is_gatshot_on_table === false
        //     && pair[0].val >= 10
        //     && pair[0].val <= 11
        // ) {
        //     if ( arr_cards_on_table[arr_cards_on_table.length-1].val <= pair[0].val ) {
        //         return true
        //     }
        // }
        
    }
    return false
}

function go() {

    if (document.querySelector('.ui-dialog-buttonset')) {
        document.querySelector('.ui-dialog-buttonset').children[0].click()
        if (document.querySelector('.menu-buttons').children[2]) {
            document.querySelector('.menu-buttons').children[2].click()
        }
        // if (document.querySelector('.tournament_preview-button-1fA5H')) {
        //     document.querySelector('.tournament_preview-button-1fA5H').click()
        // }
    }
    if (document.querySelector('.tournament_preview-button-1fA5H')) {
        if (document.querySelectorAll('.tournament_preview-button-1fA5H')[document.querySelectorAll('.tournament_preview-button-1fA5H').length-1].textContent === "Зарегистрироваться") {
            document.querySelectorAll('.tournament_preview-button-1fA5H')[document.querySelectorAll('.tournament_preview-button-1fA5H').length-1].click()
        }
    }
    if (document.querySelector('.btnLeaveGameOk.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')) {
        document.querySelector('.btnLeaveGameOk.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only').click();
        if (document.querySelector('.menu-buttons').children[2]) {
            document.querySelector('.menu-buttons').children[2].click()
        }
    }

    if (document.querySelector('.actionButtonsContainer .button-error') !== null) {

        
        if (document.querySelector('.actionButtonsContainer .button-secondary span')) {
            call = Number(document.querySelector('.actionButtonsContainer .button-secondary span').textContent)
        }

        bank = 0
        var money_in_table = document.querySelectorAll('.playersSeats .player .playerBetValue')
        for (var i=0; i<money_in_table.length; i++) {
            bank = bank + Number(money_in_table[i].textContent)
        }

        how_much_in_game = document.querySelectorAll('.playersSeats .player.active').length

        mast_1 = document.querySelectorAll('.playersSeats .player  .card.fourColors.opened')[0].getAttribute('data-suit')
        mast_2 = document.querySelectorAll('.playersSeats .player  .card.fourColors.opened')[1].getAttribute('data-suit')
        val_1 = Number(document.querySelectorAll('.playersSeats .player  .card.fourColors.opened')[0].getAttribute('data-value'))
        val_2 = Number(document.querySelectorAll('.playersSeats .player  .card.fourColors.opened')[1].getAttribute('data-value'))
        arr_cards_hend = []
        arr_cards_hend.push( { "val": val_1, "mast": mast_1 } )
        arr_cards_hend.push( { "val": val_2, "mast": mast_2 } )
        arr_cards_hend = arr_cards_hend.sort((a, b) => a.val > b.val ? 1 : -1)

        table_cards = document.querySelectorAll('#table-cards .card')
        arr_cards_on_table = []
        for (var i=0; i<table_cards.length; i++) {
            var mast = table_cards[i].getAttribute('data-suit')
            var val = Number(table_cards[i].getAttribute('data-value'))
            arr_cards_on_table.push( { "val": val, "mast": mast } )
        }
        arr_cards_on_table = arr_cards_on_table.sort((a, b) => a.val > b.val ? 1 : -1)

        arr_cards_hand_table = []
        arr_cards_hand_table = arr_cards_on_table.concat(arr_cards_hend)
        arr_cards_hand_table = arr_cards_hand_table.sort((a, b) => a.val > b.val ? 1 : -1)
        
        balans = Number(document.querySelector('.profileCash span').textContent)

        

        // if ( table_cards.length === 0 && balans/BB < 12 ) {
            before_12_BB()
        // } else {
            // after_12_BB()
        // }

    }
}



var si = setInterval(go,3000)
    
    
    
    
    // clearInterval(si)
    