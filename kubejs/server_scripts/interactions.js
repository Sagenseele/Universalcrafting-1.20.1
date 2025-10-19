

// Dirt Essence

BlockEvents.rightClicked('minecraft:dirt', event => {
    if (event.hand == 'main_hand' && event.player.getMainHandItem().id == 'kubejs:simple_matter_extraction_device' && event.player.crouching) {
        event.player.swing(event.hand, true)
        event.player.give(Item.of('mysticalagriculture:dirt_essence'))
    }
})

// Stone Essence // Wood Splinter
BlockEvents.rightClicked('kubejs:overgrown_wood_log', event => {
    if (Item.of(event.item.id).hasTag('forge:pickaxes') && event.hand == 'main_hand' && event.player.crouching) {
        event.player.swing(event.hand, true)
        event.player.damageHeldItem('main_hand', 1)
        event.player.give('mysticalagriculture:stone_essence')
    } else if (Item.of(event.item.id).hasTag('forge:axes') && event.hand == 'main_hand' && event.player.crouching) {
        if (Item.of(event.item.id).hasTag('forge:axes') && event.hand == 'main_hand') {
            event.player.swing(event.hand, true)
            event.player.damageHeldItem('main_hand', 1)
            event.player.give('kubejs:wood_splinter')
        }
    } else if (event.hand == 'main_hand' && event.player.getMainHandItem().id == 'kubejs:simple_matter_extraction_device' && event.player.crouching) {
        event.player.swing(event.hand, true)
        event.player.give('mysticalagriculture:water_essence')
    }
})

// Nether Quartz Essence
BlockEvents.rightClicked('minecraft:stone', event => {
    if (event.hand == 'main_hand' && event.player.getMainHandItem().id == 'minecraft:flint' && event.player.crouching && event.item.count >= 2) {
        event.player.swing(event.hand, true)
        event.item.count--
        event.item.count--
        event.player.give('mysticalagriculture:nether_quartz_essence')
    }
})

ItemEvents.entityInteracted('botania:black_lotus', event => {
  if(event.target.type != 'minecraft:cow') return
  event.player.swing(event.hand, true)
  event.item.count--
  event.player.giveInHand('botania:blacker_lotus')
  event.target.playSound('minecraft:entity.cow.milk')
})

