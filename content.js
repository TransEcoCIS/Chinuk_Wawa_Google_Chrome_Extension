//Dictionary provided by the University of Washington
const dictionary = {
    // Demo Dictionary
    "acknowledge": "wawa nowitka",
    "easy": "halo kull",
    "plain": "kloshe",
    "as": "kahkwa",
    "one": "ikt",
    "begin": "chee mamook",
    "grow": "chako hyas",
    "is": "mitlite",
    "or": "pe",
    "in": "kopa",
    "language": "lalang",
    "afterwards": "kimtah",

    // Two Word Sextion
    "as if": "kahkwa spose",

    // Letter A Section
    "abase": "mamook keekwullie",
    "abdomen": "yakwahtin",
    "abed": "kopa bed",
    "abide": "mitlite",
    "abject": "cultus",
    "able": "skookum",
    "aboard": "kopa boat",
    "abolish": "mamook halo",
    "aborigine": "siwash",
    "abound": "hiyu mitlite",
    "about": "wake siah kopa",
    "above": "saghalie",
    "abscond": "kapswolla",
    "absent": "halo mitlite",
    "absolve": "mamook stoh",
    "accept": "iskum",
    "accident": "nika tumtum halo yaka chako kahkwa",
    "accompany": "klatawa kunamokst",
    "accomplish": "mamook",
    "according to": "kopa",
    "accumulate": "iskum hiyu",
    "accurate": "delate",
    "achieve": "mamook",
    "acknowledge": "wawa nowitka",
    "acorn": "kahnaway",
    "acorns": "kahnaway",
    "acquaint": "mamook kumtux",
    "acquire": "iskum",
    "across": "enati",
    "act": "mamook",
    "action": "mamook",
    "active": "delate halo lazy",
    "add": "mahsh kunamokst",
    "adjoin": "wake siah kopa",
    "admire": "mitlite kloshe tumtum kopa",
    "admonish": "potlatch kloshe wawa",
    "adore": "mitlite delate kloshe tumtum kopa",
    "adorn": "mamook kloshe",
    "adrift": "cultus mitlite kopa chuck",
    "adulterate": "mamook mesachie",
    "adulterer": "man yaka kumtux kapswolla klootchman",
    "adulteress": "klootchman yaka kumtux kapswolla man",
    "advice": "cultus potlatch tumtum",
    "advise": "cultus potlatch tumtum",
    "afar": "siah",
    "affirm": "wawa delate",
    "afflict": "mamook trouble",
    "afoot": "kopa lepee",
    "afraid": "kwass",
    "after": "kimtah",
    "afterwards": "kimtah",
    "afternoon": "kimtah sitkum sun",
    "again": "weght",
    "aged": "oleman",
    "agree": "tumtum kunamokst",
    "aground": "kopa illahee",
    "ague": "cole sick",
    "ah": "anah",
    "wow": "wah hah",
    "ahead": "elip",
    "aid": "elan",
    "help": "elahan",
    "aid": "mamook elan",
    "alarm": "mamook kwass",
    "alder": "isick stick",
    "alike": "kahkwa",
    "alive": "mitlite wind",
    "all": "konaway",
    "almighty": "saghalie tyee",
    "almost": "wake siah",
    "alms": "elan",
    "alms": "mamook klahowyum",
    "aloft": "kopa saghalie",
    "alone": "kopet ikt",
    "also": "weght",
    "alter": "mamook huloima",
    "although": "keschi",
    "always": "kwonesum",
    "am": "midite",
    "amen": "kloshe kahkwa",
    "american": "hoston man",
    "amid": "kunamokst",
    "among": "katsuk",
    "amount": "konaway",
    "amuse": "mamook hehe",
    "amusement": "hehe",
    "ancient": "hyas ahnkuttie",
    "and": "pe",
    "anger": "solleks",
    "angry": "solleks",
    "angler": "pish man",
    "annual": "ikt cole ikt cole",
    "another": "huloima",
    "answer": "killapi wawa",
    "anticipate": "mamook tumtum elip",
    "anus": "opoots",
    "anxious": "hyas ticky",
    "any": "klaksta",
    "apart": "ikt yahwa",
    "appeal": "wawa kopa elip hyas court",
    "appear": "chako kah nika nanitch",
    "apple": "lapome",
    "apply": "wawa",
    "approach": "chako wake siah",
    "approve": "nika tumtum kahkwa",
    "apron": "kissu",
    "arbutus menziesii": "uya ursi",
    "arctic": "kah delate hiyu cole mitlite",
    "ardent": "waum tumtum",
    "argue": "hiyu wawa",
    "argument": "mamook hiyu",
    "arise": "mitwhit",
    "arithmetic": "book yaka mamook kumtux nesika kopa kwunnum",
    "arm": "lamah",
    "arms": "iskum musket",
    "army": "hiyu sogahs",
    "around": "wake siah kopa",
    "arouse": "mamook get up",
    "arrest": "mamook haul",
    "arrive": "ko",
    "arrow": "kalitan",
    "as": "kahkwa",
    "ascend": "klatawa saghalie",
    "ash": "isick stick",
    "ask": "wawa",
    "asleep": "moosum",
    "assemble": "chako kunamokst",
    "assent": "wawa nowitka",
    "assess": "mamook tzum iktas",
};

function grammarRewrite(text) {
    text = text.replace(/\bI am\b/gi, "I"); // I am -> I    
    text = text.replace(/\byou are\b/gi, "you"); // you are -> you
    text = text.replace(/\b(a|an|the|to)\b/gi, ""); // a, an, the -> ""
    text = text.replace(/\b(came|will come)\b/gi, "come"); // came, will come -> come

    //Simplification
    text = text.replace(/\boriginating\b/gi, "begin"); // originating ~ begin
    text = text.replace(/\b(simply|plainly)\b/gi, "plain"); // simply, plainly ~ plain
    text = text.replace(/\ba\b/gi, "one"); // a ~ one
    text = text.replace(/\bknown\b/gi, "acknowledge"); // known ~ acknowledge
    text = text.replace(/\b(spread|expand|expanded)\b/gi, "grow");
    text = text.replace(/\b(then|next)\b/gi, "afterwards");
    return text;
}

function translate(text) {
    for (const [eng, chinuk] of Object.entries(dictionary)) {
        const regex = new RegExp(`\\b${eng}\\b`, "gi");
        text = text.replace(regex, chinuk);
    }
    return text;
}

function processTextNode(node) {
    let text = node.nodeValue;

    text = grammarRewrite(text);
    text = translate(text);

    node.nodeValue = text;
}

// Node is object inside of DOM tree, Nodetype 1 = element node = HTML tags, 3 = text inside elements
function walkDOM(node) {
    if (node.nodeType === 3) {
        processTextNode(node);
    } else if (node.nodeType === 1) {

        // Skip problematic elements
        const skipTags = ["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "CODE", "PRE", "TEXTAREA", "INPUT"];
        if (skipTags.includes(node.nodeName)) return;

        for (let child of node.childNodes) {
            walkDOM(child);
        }
    }
}

// Run after page loads, DOM is Document Object Model and is the HTML tree itself
walkDOM(document.body);