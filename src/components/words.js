

const words = [
  "apple", "banana", "chocolate", "dinosaur", "elephant", "fireworks", "giraffe", "horizon", "illusion", "jungle",
  "kangaroo", "lighthouse", "mountain", "notebook", "ocean", "penguin", "quicksand", "rainbow", "sunflower", "tornado",
  "umbrella", "volcano", "whisper", "xylophone", "yesterday", "zeppelin", "avocado", "backpack", "caterpillar", "dragonfly",
  "enchanted", "frostbite", "galaxy", "hamburger", "icicle", "jukebox", "kaleidoscope", "lullaby", "moonlight", "nightmare",
  "orchestra", "parachute", "questionnaire", "rattlesnake", "silhouette", "trampoline", "underwater", "vortex", "waterfall",
  "yellowstone", "zigzag", "alchemy", "blueprint", "crescendo", "daydream", "echo", "festival", "gladiator", "harmony",
  "invisible", "jigsaw", "knuckle", "labyrinth", "mystery", "nostalgia", "obsidian", "phantom", "quirky", "revolver",
  "serendipity", "tsunami", "unicorn", "velocity", "wilderness", "xenon", "yawning", "zenith", "abracadabra", "bubble",
  "canyon", "delirium", "emerald", "flicker", "gazebo", "hypnotize", "jubilant", "kryptonite", "lightning", "marathon",
  "nebula", "orion", "puzzle", "quasar", "resonance", "symphony", "twilight", "utopia", "voyager", "whirlwind",
  "yodel", "zodiac", "aquarium", "blizzard", "cactus", "dagger", "eruption", "firefly", "goblin", "hurricane",
  "illusionist", "jackpot", "koala", "lunar", "miracle", "nebula", "oasis", "portal", "quiver", "runaway",
  "stardust", "talisman", "undertow", "venture", "warlock", "xray", "yeti", "zephyr", "adventure", "butterfly",
  "cascade", "dolphin", "exodus", "fountain", "glimmer", "hovercraft", "incantation", "journey", "keystone", "levitate",
  "memento", "nightingale", "oracle", "phoenix", "quintessential", "radiance", "sorcery", "treasure", "umbra", "vagabond",
  "wanderlust", "xenophobia", "yearning", "zeppelin", "aperture", "blackhole", "covalent", "dimension", "epiphany", "fractal",
  "grimoire", "halcyon", "invincible", "juxtapose", "kinetic", "labyrinthine", "mesmerize", "nocturnal", "ominous", "paradox",
  "quicksilver", "revelation", "supernova", "teleport", "unknown", "vanquish", "whimsical", "xylophonist", "yggdrasil", "zenlike", "skibidi", "LowTaperFade"
].map(word => word.toUpperCase());


  export const RandomWord = () => words[Math.floor(Math.random() * words.length)];



