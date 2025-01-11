JEIEvents.removeCategories(event => {
    event.remove('twilightforest:uncrafting') //hide uncrafting tab
  })

ItemEvents.tooltip(event => {
    event.add(['kubejs:rough_data_card_substrate'], 'Right Click on a grindstone to get polished data card substrate')
})