

// Dirt Essence

BlockEvents.rightClicked('minecraft:dirt', event => {
    if(event.hand == 'main_hand' && event.player.getMainHandItem().id == 'minecraft:air') {
        event.player.swing(event.hand, true)
        event.player.give('mysticalagriculture:dirt_essence')
    }
})

// Stone Essence // Wood Splinter
BlockEvents.rightClicked('kubejs:overgrown_wood_log', event => {
    if(Item.of(event.item.id).hasTag('forge:pickaxes') && event.hand == 'main_hand') {
        event.player.swing(event.hand, true)
        event.player.damageHeldItem('main_hand', 1)
        event.player.give('mysticalagriculture:stone_essence')
    } else if (Item.of(event.item.id).hasTag('forge:axes') && event.hand == 'main_hand') {
        if(Item.of(event.item.id).hasTag('forge:axes') && event.hand == 'main_hand') {
            event.player.swing(event.hand, true)
            event.player.damageHeldItem('main_hand', 1)
            event.player.give('kubejs:wood_splinter')
        
        }
    }
})

// Nether Quartz Essence
BlockEvents.rightClicked('minecraft:stone', event => {
    if(event.hand == 'main_hand' && event.player.getMainHandItem().id == 'minecraft:flint') {
        event.player.swing(event.hand, true)
        event.item.count--
        event.item.count--
        event.player.give('mysticalagriculture:nether_quartz_essence')
    }
})

// Water Essence
BlockEvents.rightClicked('kubejs:overgrown_wood_log', event => {
    if(event.hand == 'main_hand' && event.player.getMainHandItem().id == 'minecraft:bucket') {
        event.player.swing(event.hand, true)
        event.player.give('mysticalagriculture:water_essence')
    }
})

// Polished data card substrate
BlockEvents.rightClicked('minecraft:grindstone', event => {
    if(event.hand == 'main_hand' && event.player.getMainHandItem().id == 'kubejs:rough_data_card_substrate') {
        event.player.swing(event.hand, true)
        event.item.count--
        event.player.give('kubejs:polished_data_card_substrate')
    }
})