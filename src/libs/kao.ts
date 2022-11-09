import { IKaoEmotions, IKaoPortions } from '../types';

export const kaoEmotions: IKaoEmotions = {
  greeting: ['(○´･д･)', '○(￣￣￣￣o￣￣￣￣)○', '(p≧w≦q)', '(oﾟ▽ﾟ)o', '(^〇^)'],
  fun: [
    '(・∀・)',
    '(´∀｀)',
    '(´・ω・｀)',
    '(´・∀・｀)',
    '(´・ω・)',
    '(￣∇￣)',
    '(≧∇≦)',
    '(=∩_∩=)',
    '（〃＾∇＾）',
    '(≧∪≦*)',
    '(^〇^)',
  ],
  happy: ['(≧▽≦*)', '(^〇^)', '(●ˇ∀ˇ●)', '(❁´◡`❁)', '(˘⌣˘)', '(^▽^)', '(〃￣︶￣)'],
  cute: ['(✿◠‿◠)', '(✿◕‿◕✿)', '(ಥ _ ಥ)', '(￣﹃￣)', '(❤ ω ❤)', '(★ ω ★)'],
  sad: ['︶^︶', '￣︿￣', '(ಥ _ ಥ)', '艹皿艹', '(´＿｀。)', '(´Д｀。)', '(´ω｀。)', '(T-T )', '( T-T)', 'o(TヘTo)'],
  angry: [
    '（╬ಠ益ಠ)',
    '（‵□′）',
    '（╬0∀0）',
    '┌┤´д`├┐',
    '(＃｀Д´)',
    '(#`Д´)',
    '(# ﾟДﾟ)',
    '[○･｀Д´･○]',
    '(‡▼益▼)',
    '(◣囲◢╬)',
    '( ╬◣ 益◢）',
    '(╬｡_｡)',
    '(╯▔皿▔)',
    '(╯°□°）',
    'ಠ_ಠ',
    '（‵□′）',
  ],
  hurt: ['（;≧皿≦）', '(o´Д`)', '（╬0∀0）', '┌┤´д`├┐', '（◔ฺo◔ฺ）', '（；￣д￣）', '（)´д`(）', '(▼皿▼メ;)'],
  surprised: [
    '（ ﾟ ● ﾟ＃）',
    '←_←',
    '→_→',
    '(ˉ▽ˉ；)',
    '(゜ロ゜;)',
    '⊙﹏⊙',
    'ԾㅂԾ',
    '（⊙＿⊙；）',
    '（⊙＿⊙）',
    '（⊙＿⊙?）',
    '(⊙o⊙)',
  ],
  love: [
    '(⌒・⌒)',
    "(*'-'*)",
    '(⌒▽⌒)',
    '（*＾～＾*）',
    '(〃∇〃)',
    '(*≧∀≦*)',
    '(〃ω〃)',
    '(⌒ω⌒)',
    '(⌒▽⌒)☆',
    '(⌒∇⌒)ﾉ',
    '(⌒∇⌒)ﾉ',
    '(〃￣︶￣)',
  ],
};

const anySide = ['//', '///', '～', '～～', '～～～', '凸', 'w', 'щ', '☞'];
const leftSide = anySide.concat(['q(', '○( ', '⌒(o', '(', '(〃', '╰（', '┗|', '(╯', '(ヘ', 'ε=(', '┌┤']);
const rightSide = anySide.concat([')p', ')っ', 'o)ノﾟ', ')', '〃)', '）╯', '|┛', ')╯︵┻━┻', ')ヘ┳━┳', ')○～', '／★', '├┐'])

export const kaoPortions: IKaoPortions = {
  eyes: [
    '・',
    '━┳━',
    "'",
    '"',
    '◣',
    '◢',
    '◤',
    '◥',
    '❤',
    'ಥ',
    'Ծ',
    '◕',
    '◑',
    '◐',
    '◒',
    '✿',
    'ˉ',
    'ゝ',
    '↓',
    '⌒',
    'o',
    '⊙',
    '→',
    '←',
    '￩',
    '＼',
    '／',
    'へ',
    '☉',
    'ಠಿ',
    '･',
    '。',
    '°',
    'ﾟ',
    '￢',
    '╰',
    'x',
    '◎',
    '@',
    '〃',
    '●',
    '≧',
    '≦',
    '☆',
    'ⓛ',
  ],
  mouth: [
    '_',
    'ヮ',
    'ω',
    'ൠ',
    'o',
    'O',
    'u',
    'U',
    '~',
    '-',
    'Ő',
    'ㅂ',
    '皿',
    '﹃',
    '∧',
    '︶',
    '∀',
    'ロ',
    '□',
    '目',
    '﹏',
    '┰',
    '><',
    '(ｪ)',
  ],
  anySide,
  leftSide,
  rightSide,
};
