let SpawnEggItem = Java.loadClass("net.minecraft.world.item.SpawnEggItem");
let LootContext = Java.loadClass("net.minecraft.world.level.storage.loot.LootContext");
let LootParams = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams");
let LootContextParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets");
let LootContextParams = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParams");


/*MBDMachineEvents.onBeforeRecipeModify('mbd2:egg_incubator', (event) => {
    const mbdEvent = event.getEvent()
    const { machine, recipe } = mbdEvent;

    let itemInputTrait = machine.getTraitByName("item_slot");
    let itemOutputTrait = machine.getTraitByName("item_slot_0");
    if (itemInputTrait == null || itemOutputTrait == null) return;
    let input = itemInputTrait.storage;
    let output = itemOutputTrait.storage;
    let eggItem = input.getStackInSlot(0);
    if (eggItem.isEmpty()) return;
    let builder = recipe.toBuilder();
    builder.duration(20)

    let level = machine.getLevel();
    if (level == null) return;

    let entityType = eggItem.getItem().getType(eggItem.nbt);
    let lootTable = entityType.getDefaultLootTable();
    new LootParams.Builder(level)
        .withParameter(LootContextParams.THIS_ENTITY, entityType)
        .withParameter(LootContextParams.ORIGIN, machine.getPos())
        .create(lootTable)



    lootTable.forEach((itemStack) => {
        for (let i = 0; i < output.getSlots(); i++) {
            if (output.insertItem(i, itemStack, false).isEmpty()) break;
        }
    });

    builder.outputItems("minecraft:iron_ingot"); //for debug
    let newRecipe = builder.buildMBDRecipe();
    mbdEvent.setRecipe(newRecipe);
})*/