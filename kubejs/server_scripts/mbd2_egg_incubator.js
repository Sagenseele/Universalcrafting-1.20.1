const $LootParams$Builder = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams$Builder")
const $LootContextParams = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParams")
const $LootContextParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets")

MBDMachineEvents.onBeforeRecipeModify('mbd2:egg_incubator', (event) => {
    const mbdEvent = event.getEvent()
    const { machine, recipe } = mbdEvent;

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
    builder.outputItems(loot)
    let newRecipe = builder.buildMBDRecipe();
    mbdEvent.setRecipe(newRecipe);
})