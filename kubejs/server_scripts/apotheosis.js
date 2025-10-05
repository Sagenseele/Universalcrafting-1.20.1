ServerEvents.recipes(event => {
    // Infused Seashelf
    event.custom({
        type: "botania:elven_trade",
        ingredients: [{ item: "apotheosis:seashelf" }],
        output: [{ item: "apotheosis:infused_seashelf" }]
    })

    // Infused Hellshelf
    event.custom({
        type: "botania:elven_trade",
        ingredients: [{ item: "apotheosis:hellshelf" }],
        output: [{ item: "apotheosis:infused_hellshelf" }]
    })
})
