// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020101010101010101010101010101010000000005010100000000000000010100000000000001010101000001000101010000000100000000000000010001010100000001010101000001000104010100000100000000010100010001010101000101000100000000000100010001010001000001010000000401010000010100010000000101010101010100000301000101010000000000000000010001010001000000000000000000000100010100010500000001010101050101000101000101010100000000010101000001010000000001010100000000010100010100000000000401000000000000000101010101010101010101010101010101`, img`
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 2 . . . . . . . 2 
2 . . . . . . 2 2 2 2 . . 2 . 2 
2 2 . . . 2 . . . . . . . 2 . 2 
2 2 . . . 2 2 2 2 . . 2 . 2 . 2 
2 . . 2 . . . . 2 2 . 2 . 2 2 2 
2 . 2 2 . 2 . . . . . 2 . 2 . 2 
2 . 2 . . 2 2 . . . . 2 2 . . 2 
2 . 2 . . . 2 2 2 2 2 2 2 . . . 
2 . 2 2 2 . . . . . . . . 2 . 2 
2 . 2 . . . . . . . . . . 2 . 2 
2 . 2 . . . . 2 2 2 2 . 2 2 . 2 
2 . 2 2 2 2 . . . . 2 2 2 . . 2 
2 . . . . 2 2 2 . . . . 2 2 . 2 
2 . . . . . . 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.stairNorth,sprites.dungeon.stairWest,sprites.dungeon.chestOpen,sprites.swamp.swampTile0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
