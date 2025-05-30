StartupEvents.registry('block', event => {

    function kubejs_ore(name) {
        event.create(name + '_ore')
            .stoneSoundType()
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .tagBoth('forge:ores/' + name)
            .requiresTool(true)
    }
    event.create('quartz_alloy_block')
    event.create('overgrown_wood_log').tagBlock('minecraft:mineable/axe')
    event.create('coil_tier_1').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/coil_tier_1').displayName('Copper Coil')
    event.create('coil_tier_2').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/coil_tier_2').displayName('Electrum Coil')
    event.create('coil_tier_3').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/coil_tier_3').displayName('Astralite Coil')
    event.create('heat_resistant_glass').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/heat_resistant_glass').defaultCutout()
    event.create('frame_tier_1').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/frame_tier_1').defaultCutout().displayName('Frame Mark I')
    event.create('frame_tier_2').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/frame_tier_2').defaultCutout().displayName('Frame Mark II')
    event.create('frame_tier_3').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/frame_tier_3').defaultCutout().displayName('Frame Mark III')
    event.create('frame_tier_4').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/frame_tier_4').defaultCutout().displayName('Frame Mark IV')
    event.create('multiblock_tier_1').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/multiblock_tier_1').displayName('Multiblock Mark I')
    event.create('multiblock_tier_2').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/multiblock_tier_2').displayName('Multiblock Mark II')
    event.create('multiblock_tier_3').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/multiblock_tier_3').displayName('Multiblock Mark III')
    event.create('multiblock_tier_4').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/multiblock_tier_4').displayName('Multiblock Mark IV')
    event.create('electrical_machine_casing').tagBlock('minecraft:mineable/pickaxe').textureAll('kubejs:block/electrical_machine_casing')
    event.create('steel_bore_head').tagBlock('minecraft:mineable/pickaxe')
    kubejs_ore('milothium')
    kubejs_ore('catericite')
    kubejs_ore('darthium')
    kubejs_ore('ecolinit')
    kubejs_ore('platinum')
    kubejs_ore('titanium')
    kubejs_ore('mangan')
    kubejs_ore('cobalt')
})