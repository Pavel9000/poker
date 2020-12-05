

function is_straight_flush( arr_modifed ) {
    var arr_modifed = arr_modifed.sort((a, b) => a.val > b.val ? 1 : -1)
    // check flush
    var count_mast = {
        "bu":[],
        "ch":[],
        "pi":[],
        "kr":[]
    }
    for ( var mast in count_mast) {
        for ( var a = 0 in arr_modifed) {
            if ( arr_modifed[a].mast === mast ) {
                count_mast[mast].push( arr_modifed[a] )
            }
        }
    }
    var arr_best_count_mast = []
    for ( var mast in count_mast) {
        if ( count_mast[mast].length > arr_best_count_mast.length ) {
            arr_best_count_mast = count_mast[mast]
        }
    }

    if ( arr_best_count_mast.length < 5 ) {
        return []
    }
    arr_modifed = arr_best_count_mast.sort((a, b) => a.val > b.val ? 1 : -1)
    // check straight
    var straight = false
    var arr_straight = []
    for ( var a = 0 in arr_modifed) {
        if ( arr_straight.length === 0) { 
            arr_straight.push( { "val": arr_modifed[a].val, "mast": arr_modifed[a].mast } )
        } else {
            if ( arr_modifed[a].val !== arr_modifed[a-1].val ) {
                if ( arr_modifed[a].val - arr_modifed[a-1].val === 1  ) {
                    arr_straight.push( { "val": arr_modifed[a].val, "mast": arr_modifed[a].mast } )
                } else {
                    if ( arr_straight.length < 5 ) {
                        arr_straight = []
                        arr_straight.push( { "val": arr_modifed[a].val, "mast": arr_modifed[a].mast } )
                    }
                }
            }
        }
    }
    if ( arr_straight.length < 5 ) {
        return []
    }
    arr_straight = arr_straight.sort((a, b) => a.val > b.val ? 1 : -1)
    arr_straight = arr_straight.slice(-5)
    return arr_straight
}

function is_four_of_a_kind( arr_modifed ) {
    var arr_modifed = arr_modifed.sort((a, b) => a.val > b.val ? 1 : -1)
    var count_val = {
        "2":[],
        "3":[],
        "4":[],
        "5":[],
        "6":[],
        "7":[],
        "8":[],
        "9":[],
        "10":[],
        "11":[],
        "12":[],
        "13":[],
        "14":[]
    }
    for ( var val in count_val) {
        for ( var a = 0 in arr_modifed) {
            if ( arr_modifed[a].val === Number(val) ) {
                count_val[val].push( arr_modifed[a] )
            }
        }
    }
    var arr_best_count_val = []
    for ( var val in count_val) {
        if ( count_val[val].length > arr_best_count_val.length ) {
            arr_best_count_val = count_val[val]
        }
    }
    if ( arr_best_count_val.length < 4 ) {
        return []
    }
    var card_leave = arr_modifed.filter(obj => {
        var x = true
        for ( var a = 0 in arr_best_count_val) {
            if ( obj.val === arr_best_count_val[a].val && obj.mast === arr_best_count_val[a].mast ) { x = false }
        }
        return x
    } )
    card_leave = card_leave.sort((a, b) => a.val > b.val ? 1 : -1)
    card_leave = card_leave.slice(-1)
    arr_best_count_val.push( card_leave[0] )
    return arr_best_count_val
}

function is_full_house( arr_modifed ) {
    var arr_modifed = arr_modifed.sort((a, b) => a.val > b.val ? 1 : -1)
    var count_val = {
        "2":[],
        "3":[],
        "4":[],
        "5":[],
        "6":[],
        "7":[],
        "8":[],
        "9":[],
        "10":[],
        "11":[],
        "12":[],
        "13":[],
        "14":[]
    }
    for ( var val in count_val) {
        for ( var a = 0 in arr_modifed) {
            if ( arr_modifed[a].val === Number(val) ) {
                count_val[val].push( arr_modifed[a] )
            }
        }
    }
    var three_of_a_kind = []
    for ( var val in count_val) {
        if ( count_val[val].length === 3 ) {
            if ( three_of_a_kind.length === 0 ) {
                three_of_a_kind = count_val[val]
            } else {
                if ( three_of_a_kind[0].val < Number(val) ) {
                    three_of_a_kind = count_val[val]
                }
            }
        }
    }
    if ( three_of_a_kind.length < 3 ) {
        return []
    }
    var two_of_a_kind = []
    for ( var val in count_val) {
        if ( count_val[val].length >= 2 && Number(val) !== three_of_a_kind[0].val ) {
            if ( two_of_a_kind.length === 0 ) {
                two_of_a_kind = count_val[val]
            } else {
                if ( two_of_a_kind[0].val < Number(val) ) {
                    two_of_a_kind = count_val[val]
                }
            }
        }
    }
    if ( two_of_a_kind.length < 2 ) {
        return []
    }
    two_of_a_kind = two_of_a_kind.slice(0,2)
    var result = three_of_a_kind.concat(two_of_a_kind)
    return result
}

function is_flush( arr_modifed ) {
    var arr_modifed = arr_modifed.sort((a, b) => a.val > b.val ? 1 : -1)
    // check flush
    var count_mast = {
        "bu":[],
        "ch":[],
        "pi":[],
        "kr":[]
    }
    for ( var mast in count_mast) {
        for ( var a = 0 in arr_modifed) {
            if ( arr_modifed[a].mast === mast ) {
                count_mast[mast].push( arr_modifed[a] )
            }
        }
    }
    var arr_best_count_mast = []
    for ( var mast in count_mast) {
        if ( count_mast[mast].length > arr_best_count_mast.length ) {
            arr_best_count_mast = count_mast[mast]
        }
    }
    if ( arr_best_count_mast.length < 5 ) {
        return []
    }
    arr_best_count_mast = arr_best_count_mast.sort((a, b) => a.val > b.val ? 1 : -1)
    arr_best_count_mast = arr_best_count_mast.slice(-5)
    return arr_best_count_mast
}

function is_straight( arr_modifed ) {
    var arr_modifed = arr_modifed.sort((a, b) => a.val > b.val ? 1 : -1)
    // check straight
    var arr_straight = []
    for ( var a = 0 in arr_modifed) {
        if ( arr_straight.length === 0) { 
            arr_straight.push( { "val": arr_modifed[a].val, "mast": arr_modifed[a].mast } )
        } else {
            if ( arr_modifed[a].val !== arr_modifed[a-1].val ) {
                if ( arr_modifed[a].val - arr_modifed[a-1].val === 1  ) {
                    arr_straight.push( { "val": arr_modifed[a].val, "mast": arr_modifed[a].mast } )
                } else {
                    if ( arr_straight.length < 5 ) {
                        arr_straight = []
                        arr_straight.push( { "val": arr_modifed[a].val, "mast": arr_modifed[a].mast } )
                    }
                }
            }
        }
    }
    if ( arr_straight.length >= 5 ) {
        arr_straight = arr_straight.sort((a, b) => a.val > b.val ? 1 : -1)
        arr_straight = arr_straight.slice(-5)
        return arr_straight
    } else {
        return []
    }
}

function is_three_of_a_kind( arr_modifed ) {
    var arr_modifed = arr_modifed.sort((a, b) => a.val > b.val ? 1 : -1)
    var count_val = {
        "2":[],
        "3":[],
        "4":[],
        "5":[],
        "6":[],
        "7":[],
        "8":[],
        "9":[],
        "10":[],
        "11":[],
        "12":[],
        "13":[],
        "14":[]
    }
    for ( var val in count_val) {
        for ( var a = 0 in arr_modifed) {
            if ( arr_modifed[a].val === Number(val) ) {
                count_val[val].push( arr_modifed[a] )
            }
        }
    }
    var arr_best_count_val = []
    for ( var val in count_val) {
        if ( count_val[val].length > arr_best_count_val.length ) {
            arr_best_count_val = count_val[val]
        }
    }
    if ( arr_best_count_val.length < 3 ) {
        return []
    }
    var card_leave = arr_modifed.filter(obj => {
        var x = true
        for ( var a = 0 in arr_best_count_val) {
            if ( obj.val === arr_best_count_val[a].val && obj.mast === arr_best_count_val[a].mast ) { x = false }
        }
        return x
    } )
    card_leave = card_leave.sort((a, b) => a.val > b.val ? 1 : -1)
    card_leave = card_leave.slice(-2)
    var result = arr_best_count_val.concat(card_leave)
    return result
}

function is_two_pair( arr_modifed ) {
    var arr_modifed = arr_modifed.sort((a, b) => a.val > b.val ? 1 : -1)
    var count_val = {
        "2":[],
        "3":[],
        "4":[],
        "5":[],
        "6":[],
        "7":[],
        "8":[],
        "9":[],
        "10":[],
        "11":[],
        "12":[],
        "13":[],
        "14":[]
    }
    for ( var val in count_val) {
        for ( var a = 0 in arr_modifed) {
            if ( arr_modifed[a].val === Number(val) ) {
                count_val[val].push( arr_modifed[a] )
            }
        }
    }
    var two_of_a_kind_1 = []
    for ( var val in count_val) {
        if ( count_val[val].length === 2 ) {
            if ( two_of_a_kind_1.length === 0 ) {
                two_of_a_kind_1 = count_val[val]
            } else {
                if ( two_of_a_kind_1[0].val < Number(val) ) {
                    two_of_a_kind_1 = count_val[val]
                }
            }
        }
    }
    if ( two_of_a_kind_1.length < 2 ) {
        return []
    }
    var two_of_a_kind = []
    for ( var val in count_val) {
        if ( count_val[val].length === 2 && Number(val) !== two_of_a_kind_1[0].val ) {
            if ( two_of_a_kind.length === 0 ) {
                two_of_a_kind = count_val[val]
            } else {
                if ( two_of_a_kind[0].val < Number(val) ) {
                    two_of_a_kind = count_val[val]
                }
            }
        }
    }
    if ( two_of_a_kind.length < 2 ) {
        return []
    }
    var two_pair = two_of_a_kind_1.concat(two_of_a_kind)
    var card_leave = arr_modifed.filter(obj => {
        var x = true
        for ( var a = 0 in two_pair) {
            if ( obj.val === two_pair[a].val && obj.mast === two_pair[a].mast ) { x = false }
        }
        return x
    } )
    card_leave = card_leave.sort((a, b) => a.val > b.val ? 1 : -1)
    card_leave = card_leave.slice(-1)
    two_pair = two_pair.concat(card_leave)
    return two_pair
}

function is_one_pair( arr_modifed ) {
    var arr_modifed = arr_modifed.sort((a, b) => a.val > b.val ? 1 : -1)
    var count_val = {
        "2":[],
        "3":[],
        "4":[],
        "5":[],
        "6":[],
        "7":[],
        "8":[],
        "9":[],
        "10":[],
        "11":[],
        "12":[],
        "13":[],
        "14":[]
    }
    for ( var val in count_val) {
        for ( var a = 0 in arr_modifed) {
            if ( arr_modifed[a].val === Number(val) ) {
                count_val[val].push( arr_modifed[a] )
            }
        }
    }
    var two_of_a_kind_1 = []
    for ( var val in count_val) {
        if ( count_val[val].length > two_of_a_kind_1.length ) {
            two_of_a_kind_1 = count_val[val]
        }
    }
    if ( two_of_a_kind_1.length < 2 ) {
        return []
    }
    var card_leave = arr_modifed.filter(obj => {
        var x = true
        for ( var a = 0 in two_of_a_kind_1) {
            if ( obj.val === two_of_a_kind_1[a].val && obj.mast === two_of_a_kind_1[a].mast ) { x = false }
        }
        return x
    } )
    card_leave = card_leave.sort((a, b) => a.val > b.val ? 1 : -1)
    card_leave = card_leave.slice(-3)
    two_of_a_kind_1 = two_of_a_kind_1.concat(card_leave)
    return two_of_a_kind_1
}

function is_high_card( arr_modifed ) {
    var arr_modifed = arr_modifed.sort((a, b) => a.val > b.val ? 1 : -1)
    arr_modifed = arr_modifed.slice(-5)
    return arr_modifed
}





function find_best_combination_in_hand( arr_cards_in_hand ) {
    // var arr_cards_in_hand = []
    
    var best_combination = {}
    var arr_combination = [
        { combination: 'straight_flush', "cards": is_straight_flush },
        { combination: 'four_of_a_kind', "cards": is_four_of_a_kind },
        { combination: 'full_house', "cards": is_full_house },
        { combination: 'flush', "cards": is_flush },
        { combination: 'straight', "cards": is_straight },
        { combination: 'three_of_a_kind', "cards": is_three_of_a_kind },
        { combination: 'two_pair', "cards": is_two_pair },
        { combination: 'one_pair', "cards": is_one_pair },
        { combination: 'high_card', "cards": is_high_card }
    ]
    
    for ( var i = 0 in arr_combination) {
        var cards_comb = arr_combination[i].cards( arr_cards_in_hand )
        if ( cards_comb.length > 0 ) {
            best_combination = { combination: arr_combination[i].combination, cards: cards_comb }
            break
        }
    }
    return best_combination
}