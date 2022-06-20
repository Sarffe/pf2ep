const MAGIC_SCHOOLS = new Set([
    "abjuration",
    "conjuration",
    "divination",
    "enchantment",
    "evocation",
    "illusion",
    "necromancy",
    "transmutation",
	"clairsentience",
	"metacreativity",
	"psychokinesis",
	"psychometabolism",
	"psychoportation",
	"telepathy",
] as const);

const MAGIC_TRADITIONS = new Set(["arcane", "divine", "occult", "primal", "psionic"] as const);

const SPELL_COMPONENTS = ["focus", "material", "somatic", "verbal", "mental focus", "thought", "memory"] as const;

export { MAGIC_SCHOOLS, MAGIC_TRADITIONS, SPELL_COMPONENTS };
