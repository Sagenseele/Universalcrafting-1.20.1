LootJS.modifiers(event => {
    event
        .addBlockLootModifier("kubejs:milothium_ore").pool(p => {
            p.addLoot("kubejs:raw_milothium");
            p.applyOreBonus("minecraft:fortune")
        }).removeLoot("kubejs:milothium_ore")
        
    event
        .addBlockLootModifier("kubejs:darthium_ore").pool(p => {
            p.addLoot("kubejs:raw_darthium");
            p.applyOreBonus("minecraft:fortune")
        }).removeLoot("kubejs:darthium_ore")
        
    event
        .addBlockLootModifier("kubejs:catericite_ore").pool(p => {
            p.addLoot("kubejs:raw_catericite");
            p.applyOreBonus("minecraft:fortune")
        }).removeLoot("kubejs:catericite_ore")
        
    event
        .addBlockLootModifier("kubejs:ecolinit_ore").pool(p => {
            p.addLoot("kubejs:raw_ecolinit");
            p.applyOreBonus("minecraft:fortune")
        }).removeLoot("kubejs:ecolinit_ore")
})