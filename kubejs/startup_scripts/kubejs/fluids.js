StartupEvents.registry('fluid', event => {

    function thickFluid(name, color) {
        event.create(name).thickTexture(color).tag("forge:fluid/" + name)
    }
    function thinFluid(name, color) {
        event.create(name).thinTexture(color).tag("forge:fluid/" + name)
    }
    const liquid_metal = [
        { material: "iron", color: 0xffffff },
        { material: "copper", color: 0xffffff },
        { material: "gold", color: 0xffffff },
        { material: "netherite", color: 0xffffff },
        { material: "dash", color: 0xffffff },
        { material: "ostrum", color: 0xffffff },
        { material: "calorite", color: 0xffffff },
        { material: "neptunium", color: 0xffffff },
        { material: "hellforged", color: 0xffffff },
        { material: "manasteel", color: 0xffffff },
        { material: "terrasteel", color: 0xffffff },
        { material: "elementium", color: 0xffffff },
        { material: "zinc", color: 0xffffff },
        { material: "brass", color: 0xffffff },
        { material: "awakened_draconium", color: 0xffffff },
        { material: "draconium", color: 0xffffff },
        { material: "blutonium", color: 0xffffff },
        { material: "cyanite", color: 0xffffff },
        { material: "magentite", color: 0xffffff },
        { material: "graphite", color: 0xffffff },
        { material: "ludicrite", color: 0xffffff },
        { material: "ridiculite", color: 0xffffff },
        { material: "inanite", color: 0xffffff },
        { material: "insanite", color: 0xffffff },
        { material: "deorum", color: 0xffffff },
        { material: "obsidian", color: 0xffffff },
        { material: "refined_obsidian", color: 0xffffff },
        { material: "refined_glowstone", color: 0xffffff },
        { material: "osmium", color: 0xffffff },
        { material: "iesnium", color: 0xffffff },
        { material: "steel_energized", color: 0xffffff },
        { material: "ironwood", color: 0xffffff },
        { material: "steeleaf", color: 0xffffff },
        { material: "knightmetal", color: 0xffffff },
        { material: "fiery", color: 0xffffff },
        { material: "tin", color: 0xffffff },
        { material: "lead", color: 0xffffff },
        { material: "silver", color: 0xffffff },
        { material: "nickel", color: 0xffffff },
        { material: "steel", color: 0xffffff },
        { material: "rose_gold", color: 0xffffff },
        { material: "bronze", color: 0xffffff },
        { material: "electrum", color: 0xffffff },
        { material: "invar", color: 0xffffff },
        { material: "constantan", color: 0xffffff },
        { material: "signalum", color: 0xffffff },
        { material: "lumium", color: 0xffffff },
        { material: "enderium", color: 0xffffff },
        { material: "midnight_iron", color: 0xffffff },
        { material: "dark_chocolate", color: 0xffffff },
        { material: "sculk_alloy", color: 0xffffff },
        { material: "bunny_steel", color: 0xffffff },
        { material: "capsid_alloy", color: 0xffffff },
        { material: "plasteel", color: 0xffffff },
        { material: "source_steel", color: 0xffffff },
        { material: "arcmetal", color: 0xffffff },
        { material: "solarmetal", color: 0xffffff },
        { material: "voidmetal", color: 0xffffff },
        { material: "crimson_iron", color: 0xffffff },
        { material: "crimson_steel", color: 0xffffff },
        { material: "blaze_gold", color: 0xffffff },
        { material: "azure_silver", color: 0xffffff },
        { material: "azure_electrum", color: 0xffffff },
        { material: "tyrian_steel", color: 0xffffff },
        { material: "black_iron", color: 0xffffff },
        { material: "redstone", color: 0xffffff },
        { material: "enhanced_redstone", color: 0xffffff },
        { material: "ender", color: 0xffffff },
        { material: "enhanced_ender", color: 0xffffff },
        { material: "crystaltine", color: 0xffffff },
        { material: "the_ultimate", color: 0xffffff },
        { material: "copper_alloy", color: 0xffffff },
        { material: "energetic_alloy", color: 0xffffff },
        { material: "vibrant_alloy", color: 0xffffff },
        { material: "redstone_alloy", color: 0xffffff },
        { material: "conductive_alloy", color: 0xffffff },
        { material: "pulsating_alloy", color: 0xffffff },
        { material: "dark_steel", color: 0xffffff },
        { material: "soularium", color: 0xffffff },
        { material: "end_steel", color: 0xffffff },
        { material: "blue", color: 0xffffff },
        { material: "lapiron", color: 0xffffff },
        { material: "galvanized", color: 0xffffff },
        { material: "orangeish", color: 0xffffff },
        { material: "pale_green", color: 0xffffff },
        { material: "pale_yellow", color: 0xffffff },
        { material: "red", color: 0xffffff },
        { material: "redish", color: 0xffffff },
        { material: "soilent", color: 0xffffff },
        { material: "turquoise", color: 0xffffff },
        { material: "sulfeel", color: 0xffffff },
        { material: "titanium", color: 0xffffff },
        { material: "mangan", color: 0xffffff },
        { material: "cobalt", color: 0xffffff },
        { material: "platinum", color: 0xffffff },
    ]
    liquid_metal.forEach(element => {
        event.create('molten_' + element.material).thickTexture(element.color).tag('forge:molten/' + element.material)

    });

    thickFluid('liquid_chaos', 0x1f1f1f)
    thickFluid('liquid_glass', 0xbdbdbd)
    thickFluid('inferium_sludge', 0x4f8001)
    thickFluid('tertium_sludge', 0x705401)
    thickFluid('impertium_concentrate', 0x0270b5)
    thinFluid('inferium_enriched_water', 0x75bd02)
    thinFluid('prudentium_enriched_water', 0x32a852)
    thinFluid('tertium_enriched_water', 0xb58802)
    thinFluid('imperium_enriched_water', 0x0000ff)
    thinFluid('prudentium_solution', 0x00c965)
    thinFluid('prudiferium_solution', 0x224811)
    thinFluid('impertium_solution', 0x5b4481)
    thinFluid('prosperity_enriched_water', 0xcfcfcf)
    thinFluid('nitric_prosperity_solution', 0xf5b0b0)
    thinFluid('acidic_imperium_solution', 0x306bc9)
})