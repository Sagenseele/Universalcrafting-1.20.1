JEIEvents.removeCategories(event => {
  event.remove('twilightforest:uncrafting') //hide uncrafting tab
})

ItemEvents.tooltip(event => {
  event.add(['mbd2:multiplex_hatch_mark_1', 'mbd2:multiplex_hatch_mark_2', 'mbd2:multiplex_hatch_mark_3'], Text.of('Place in Multiblock to add one parallel processing.').aqua())
  event.add(['kubejs:relic_level_up'], Text.of('Craft with a relic to upgrade the relic by one level.').gold())
  event.addAdvanced('mbd2:blast_furnace', (item, davanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    } else {
      text.add(1, Text.of('Smelts different materials under immense heat into new ones.').gray())
      text.add(2, [Text.of('[TBD]').gold(), Text.of(' Coals can be put into the controller slot to heat the machine. Each recipe needs heat to process items.').gray()])
      text.add(3, Text.of('Coal can be inserted into the controller from all available sites. Maximum heat is 1800 Kelvin').gray())
      text.add(4, Text.of('Coals have different heat increases. The heating up time is always 10 seconds. Heat using recipes have a higher priority than heat producing recipes.').gray())
      text.add(5, Text.of('Coal Coke - 400 Heat').gray())
    }
  })
  event.addAdvanced('mbd2:kinetic_crusher', (item, davanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    } else {
      text.add(1, Text.of('Crushes different materials for raw resources').gray())
    }
  })
  event.addAdvanced('mbd2:asteroid_catcher', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    } else {
      text.add(1, Text.of('Inspiration goes full circle.').gray())
      text.add(2, Text.of(''))
      text.add(3, Text.of('Only works in Orbit.').red())
    }
  })
  event.addAdvanced('mbd2:egg_incubator', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    } else {
      text.add(1, [Text.of('Creates random loot of the ').gray(), Text.of('spawn egg').aqua(), Text.of(' in the controller slot.').gray()])
      text.add(2, Text.of(''))
      text.add(3, [Text.of('White glass can be replaced by ').gray(), Text.of('Rune of Sacrifice').yellow(), Text.of(', ').gray(), Text.of('Rune of Capacity').yellow(), Text.of(' and ').gray(), Text.of('Rune of Augmented Capacity').yellow(), Text.of('').gray()])
      text.add(4, [Text.of('At least one Rune of Sacricife is needed for Life Essence output.').gray()])
      text.add(5, [Text.of('Each Rune of Sacrifice adds 20 mB of Life Essence per Process.').gray()])
      text.add(6, [Text.of('Each Rune of Capacity adds 20 mB times a flat 10% additional Life Essence.').gray()])
      text.add(7, [Text.of('Each Rune of Superior Capacity increases the amount from Rune of Sacrifice and Capacity by 20% multiplicatively.').gray()])
      text.add(8, Text.of(''))
      text.add(9, [Text.of('The formula for Life essence is:').gray()])
      text.add(10, [Text.of('20 mB * ').gray(), Text.of('Rune of Sacrifice').yellow(), Text.of(' + 20 mB * ').gray(), Text.of('Rune of Capacity').yellow(), Text.of(' * (1 + ').gray(), Text.of('Capacity Rune').yellow(), Text.of(' * 0.1)) * 1.2^').gray(), Text.of('Rune of Augmented Capacity').yellow()])
    }
  })
  event.addAdvanced('mbd2:matter_replicator', (item, davanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    } else {
      text.add(1, Text.of('Can replicate different materials. Consult JEI for more information.').gray())
    }
  })
  event.addAdvanced('mbd2:gods_forge', (item, davanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    } else {
      text.add(1, Text.of('[TBD] The recipes in this machine have a base energy cost and a base recipe time seen in JEI. The energy cost increases by 0.5% per tick. If the consumption reaches 2^31 FE/tick, the recipe will be canceled. For every Factor of 10 above 100.000.000 RF in the Energy Storage, the time will be divided by the Factor + 1 at the start of the recipe. E.g. 1.000.000.000 Energy halves the time required for the recipe, 10.000.000.000 cut it into thirds, etc..').gray())
    }
  })
  event.addAdvanced('mbd2:crystal_chamber', (item, davanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    } else {
      text.add(1, Text.of('Change the middle block to get different results. Consult JEI for more information.').gray())
      text.add(2, Text.of(''))
      text.add(3, Text.of('Flawless Budding Certus Quartz').aqua())
      text.add(4, Text.of('Water').blue())
      text.add(5, Text.of('Budding Amethyst').lightPurple())
    }
  })
  event.addAdvanced('mbd2:crystal_cutter', (item, davanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    } else {
      text.add(1, Text.of('Craft different kind of circuits. Consult JEI for more information.').gray())
    }
  })
  event.addAdvanced('mbd2:infuser', (item, davanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    } else {
      text.add(1, Text.of("Each 'INFUSED' recipe needs one of five random Bloodmagic Will Crystals:").gray())
      text.add(2, Text.of(""))
      text.add(3, Text.of("Demon").aqua())
      text.add(4, Text.of("Corrosive").darkGreen())
      text.add(5, Text.of("Vengeful").red())
      text.add(6, Text.of("Destructive").yellow())
      text.add(7, Text.of("Steadfast").darkAqua())
      text.add(8, Text.of(""))
      text.add(9, Text.of("If the recipe can't find the crystals in the input, the recipe will be skipped.").gray())
    }
  })
  event.addAdvanced('kubejs:carbon_asteroid', (item, advanced, text) => {
    text.add(1, Text.of("More ore less a placeholder. Keep in there for more recipes!").gray())

  })
})