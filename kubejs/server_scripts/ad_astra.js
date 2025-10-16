ServerEvents.recipes(event => {
    // Fuel Refinery
    event.replaceInput(
        { output: 'ad_astra:fuel_refinery' },
        'minecraft:furnace',
        'kubejs:electrical_machine_casing'
    )
    // Oxygen Loader
    event.replaceInput(
        { output: 'ad_astra:oxygen_loader' },
        'minecraft:lightning_rod',
        'kubejs:electrical_machine_casing'
    )
    // NASA Workbench
    event.replaceInput(
        { output: 'ad_astra:nasa_workbench' },
        'minecraft:redstone_torch',
        '#forge:plates/copper'
    )
    event.replaceInput(
        { output: 'ad_astra:nasa_workbench' },
        'minecraft:crafting_table',
        'kubejs:electrical_machine_casing'
    )
    // Etrium Ingot
    event.shaped(
        Item.of('ad_astra:etrium_factory_block', 64),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ad_astra:etrium_plate',
            B: 'ad_astra:etrium_ingot'
        }
    )
    event.shaped(
        Item.of('ad_astra:encased_etrium_block', 64),
        [
            'BBB',
            'AAA',
            'BBB'
        ],
        {
            A: 'ad_astra:etrium_plate',
            B: '#forge:ingots/steel'
        }
    )
    event.shaped(
        Item.of('ad_astra:etrium_plateblock', 64),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ad_astra:etrium_plate',
            B: '#forge:rods/steel'
        }
    )
    event.shaped(
        Item.of('ad_astra:etrium_panel', 64),
        [
            'ABA',
            'BBB',
            'ABA'
        ],
        {
            A: 'ad_astra:etrium_plate',
            B: 'ad_astra:etrium_ingot'
        }
    )
    event.shaped(
        Item.of('ad_astra:etrium_block', 1),
        [
            'BBB',
            'BBB',
            'BBB'
        ],
        {
            B: 'ad_astra:etrium_ingot'
        }
    )
})






















































































