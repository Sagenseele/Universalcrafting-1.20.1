BlockEvents.rightClicked('minecraft:grindstone', event => {
    if(event.item != 'kubejs:rough_data_card_substrate') return
    event.item.count--
    event.player.giveInHand('kubejs:polished_data_card_substrate')
})