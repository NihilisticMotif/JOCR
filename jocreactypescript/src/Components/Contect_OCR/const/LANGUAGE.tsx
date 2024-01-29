// convert this
const uLANG: string[][] = [
  ['afr', 'Afrikaans'],
  ['amh', 'Amharic'],
  ['ara', 'Arabic'],
  ['asm', 'Assamese'],
  ['aze', 'Azerbaijani'],
  ['aze_cyrl', 'Azerbaijani (Cyrillic)'],
  ['bel', 'Belarusian'],
  ['ben', 'Bengali'],
  ['bod', 'Tibetan'],
  ['bos', 'Bosnian'],
  ['bre', 'Breton'],
  ['bul', 'Bulgarian'],
  ['cat', 'Catalan'],
  ['ceb', 'Cebuano'],
  ['ces', 'Czech'],
  ['chi_sim', 'Chinese (Simplified)'],
  ['chi_sim_vert', 'Chinese (Simplified, vertical)'],
  ['chi_tra', 'Chinese (Traditional)'],
  ['chi_tra_vert', 'Chinese (Traditional, vertical)'],
  ['chr', 'Cherokee'],
  ['cos', 'Corsican'],
  ['cym', 'Welsh'],
  ['dan', 'Danish'],
  ['deu', 'German'],
  ['div', 'Divehi'],
  ['dzo', 'Dzongkha'],
  ['ell', 'Greek'],
  ['eng', 'English'],
  ['enm', 'Middle English'],
  ['epo', 'Esperanto'],
  ['equ', 'Math / equation detection mode'],
  ['est', 'Estonian'],
  ['eus', 'Basque'],
  ['fao', 'Faroese'],
  ['fas', 'Persian'],
  ['fil', 'Filipino'],
  ['fin', 'Finnish'],
  ['fra', 'French'],
  ['frk', 'Frankish'],
  ['frm', 'Middle French'],
  ['fry', 'Frisian'],
  ['gla', 'Scottish Gaelic'],
  ['gle', 'Irish'],
  ['glg', 'Galician'],
  ['grc', 'Ancient Greek'],
  ['guj', 'Gujarati'],
  ['hat', 'Haitian Creole'],
  ['heb', 'Hebrew'],
  ['hin', 'Hindi'],
  ['hrv', 'Croatian'],
  ['hun', 'Hungarian'],
  ['hye', 'Armenian'],
  ['iku', 'Inuktitut'],
  ['ind', 'Indonesian'],
  ['isl', 'Icelandic'],
  ['ita', 'Italian'],
  ['ita_old', 'Old Italian'],
  ['jav', 'Javanese'],
  ['jpn', 'Japanese'],
  ['jpn_vert', 'Japanese (vertical)'],
  ['kan', 'Kannada'],
  ['kat', 'Georgian'],
  ['kat_old', 'Old Georgian'],
  ['kaz', 'Kazakh'],
  ['khm', 'Khmer'],
  ['kir', 'Kyrgyz'],
  ['kmr', 'Kurdish (Kurmanji)'],
  ['kor', 'Korean'],
  ['kor_vert', 'Korean (vertical)'],
  ['lao', 'Lao'],
  ['lat', 'Latin'],
  ['lav', 'Latvian'],
  ['lit', 'Lithuanian'],
  ['ltz', 'Luxembourgish'],
  ['mal', 'Malayalam'],
  ['mar', 'Marathi'],
  ['mkd', 'Macedonian'],
  ['mlt', 'Maltese'],
  ['mon', 'Mongolian'],
  ['mri', 'Maori'],
  ['msa', 'Malay'],
  ['mya', 'Burmese'],
  ['nep', 'Nepali'],
  ['nld', 'Dutch'],
  ['nor', 'Norwegian'],
  ['oci', 'Occitan'],
  ['ori', 'Oriya'],
  ['osd', 'Orientation and script detection'],
  ['pan', 'Punjabi'],
  ['pol', 'Polish'],
  ['por', 'Portuguese'],
  ['pus', 'Pashto'],
  ['que', 'Quechua'],
  ['ron', 'Romanian'],
  ['rus', 'Russian'],
  ['san', 'Sanskrit'],
  ['sin', 'Sinhala'],
  ['slk', 'Slovak'],
  ['slv', 'Slovenian'],
  ['snd', 'Sindhi'],
  ['snum', 'Sumi Naga'],
  ['spa', 'Spanish'],
  ['spa_old', 'Old Spanish'],
  ['sqi', 'Albanian'],
  ['srp', 'Serbian'],
  ['srp_latn', 'Serbian (Latin)'],
  ['sun', 'Sundanese'],
  ['swa', 'Swahili'],
  ['swe', 'Swedish'],
  ['syr', 'Syriac'],
  ['tam', 'Tamil'],
  ['tat', 'Tatar'],
  ['tel', 'Telugu'],
  ['tgk', 'Tajik'],
  ['tha', 'Thai'],
  ['tir', 'Tigrinya'],
  ['ton', 'Tongan'],
  ['tur', 'Turkish'],
  ['uig', 'Uighur'],
  ['ukr', 'Ukrainian'],
  ['urd', 'Urdu'],
  ['uzb', 'Uzbek'],
  ['uzb_cyrl', 'Uzbek (Cyrillic)'],
  ['vie', 'Vietnamese'],
  ['yid', 'Yiddish'],
  ['yor', 'Yoruba']]

//const formattedLanguages = uLANG.map(([code, name]) => [`${code}__(${name})`]);

let formattedLanguages:string[]=[]
for(let i=0;i<uLANG.length;i++){
    formattedLanguages.push(uLANG[i][0]+'__'+uLANG[i][1])
}

export const LANGUAGE: string[] = formattedLanguages;