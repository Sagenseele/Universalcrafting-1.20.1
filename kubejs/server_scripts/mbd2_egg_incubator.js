const $LootParams$Builder = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams$Builder")
const $LootContextParams = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParams")
const $LootContextParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets")


MBDMachineEvents.onStructureFormed('mbd2:egg_incubator', event => {
    let mbdEvent = event.getEvent();
    let machine = mbdEvent.getMachine();
    let level = machine.getLevel();
    let data = machine.getCustomData();

    let sacrificeRune = 0;
    let altarCapacityRune = 0;
    let betterCapacityRune = 0;
    //console.log("CACHE: " + machine.getMultiblockState().getCache())
    let cache = machine.getMultiblockState().getCache()
    for (let i = 0; i < cache.length; i++) {
        let block = level.getBlockState(cache[i]).getBlock().getId()
        if (block === 'bloodmagic:sacrificerune') sacrificeRune++;
        if (block === 'bloodmagic:altarcapacityrune') altarCapacityRune++;
        if (block === 'bloodmagic:bettercapacityrune') betterCapacityRune++;
    };

    let blood = (20 * sacrificeRune + 20 * altarCapacityRune * (1 + altarCapacityRune * 0.1)) * Math.pow(1.2, betterCapacityRune);
    let power = (512 * sacrificeRune + 512 * altarCapacityRune * (1 + altarCapacityRune * 0.1)) * Math.pow(1.2, betterCapacityRune);
    data.putInt('sacrificeRune', sacrificeRune);
    data.putInt('power', power);
    data.putInt('blood', blood);
});

MBDMachineEvents.onBeforeRecipeModify('mbd2:egg_incubator', (event) => {
    const mbdEvent = event.getEvent()
    const { machine, recipe } = mbdEvent;
    let level = machine.getLevel();
    let data = machine.getCustomData();

    let itemInputTrait = machine.getTraitByName("item_slot");
    if (itemInputTrait == null) return;
    let input = itemInputTrait.storage;
    let eggItem = input.getStackInSlot(0);
    if (eggItem.isEmpty()) return;

    let world = machine.getLevel();
    if (world == null) return;
    let entityType = eggItem.getItem().getType(eggItem.nbt);
    let lootParamsBuilder = new $LootParams$Builder(world)
        .withParameter($LootContextParams.THIS_ENTITY, entityType.create(world))
        .withParameter($LootContextParams.ORIGIN, machine.getPos().getCenter())
        .withParameter($LootContextParams.DAMAGE_SOURCE, world.damageSources().generic())
    const lootParams = lootParamsBuilder.create($LootContextParamSets.ENTITY)
    let lootTableId = entityType.getDefaultLootTable();
    let lootTable = world.getServer().getLootData().getLootTable(lootTableId);
    let loot = lootTable.getRandomItems(lootParams);




    let builder = recipe.toBuilder();
    builder.id("mbd2:spawn_egg")
    builder.outputItems(loot)
    builder.perTick(builder => builder
        .inputFE(Math.ceil(data.getInt('power')))
    )

    let blood = "bloodmagic:life_essence_fluid " + Math.ceil(data.getInt('blood'))
    if (data.getInt('sacrificeRune') > 0) {
        builder.outputFluids(blood)
    }

    let newRecipe = builder.buildMBDRecipe();
    mbdEvent.setRecipe(newRecipe);
})