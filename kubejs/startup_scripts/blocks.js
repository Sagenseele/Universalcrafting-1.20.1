StartupEvents.registry('block', event => {

    function kubejs_ore(name) {
        event.create(name + '_ore')
            .stoneSoundType()
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .tagBoth('forge:ores/' + name)
            .requiresTool(true)
    }

    event.create('overgrown_wood_log')
    event.create('coil_tier1').textureAll('kubejs:block/coil_tier1')
    event.create('coil_tier2').textureAll('kubejs:block/coil_tier2')
    event.create('heat_resistant_glass').textureAll('kubejs:block/heat_resistant_glass').defaultCutout()
    event.create('frame_tier1').textureAll('kubejs:block/frame_tier1').defaultCutout()
    event.create('frame_tier2').textureAll('kubejs:block/frame_tier2').defaultCutout()
    event.create('frame_tier3').textureAll('kubejs:block/frame_tier3').defaultCutout()
    event.create('multiblock_tier1').textureAll('kubejs:block/multiblock_tier1')
    event.create('multiblock_tier2').textureAll('kubejs:block/multiblock_tier2')
    event.create('multiblock_tier3').textureAll('kubejs:block/multiblock_tier3')
    event.create('electrical_machine_casing').textureAll('kubejs:block/electrical_machine_casing')
    event.create('steel_bore_head')
    kubejs_ore('milothium')
    kubejs_ore('catericite')
    kubejs_ore('darthium')
    kubejs_ore('ecolinit')
})