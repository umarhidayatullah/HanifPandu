for (var x = 12; x < 12 + 8 * 6; x += 8) {
    // For each x iterate y cordinates from 12 to 68 with step 8.
    for (var y = 12; y < 12 + 8 * 7; y += 8) {
        // For each point build "fire-trap" there.
        hero.buildXY("fire-trap", x, y);
    }
    // After each column, it's better to move right to avoid own traps.
    hero.moveXY(hero.pos.x + 8, hero.pos.y);
}