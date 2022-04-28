# Ruby Text (Furigana) Converter
A tool for converting RubyText (aka Furigana, Phonetic Guide Text) between different formats. Useful for languages like Japanese, Cantonese, Mandarin, Egyptian Heiroglyphs etc.

## View the [online demo](https://ruby-text-furigana-converter.glitch.me/).

## Examples:

### 1 - Write text in this format (called RubyBackColon):

```text = 日本語`にほんご;の;\n先生`せんせい;は;若`わか;いです。```

### 2 - Convert it into other formats (RubyHTML, RubyJsonMatrix):

```RubyTextConverter.backColonToHtml( text )```

<ruby>
日本語 <rp>(</rp><rt>にほんご</rt><rp>)</rp>
の <rp>(</rp><rt></rt><rp>)</rp>
先生 <rp>(</rp><rt>せんせい</rt><rp>)</rp>
</ruby>
<br>
<ruby>
は <rp>(</rp><rt></rt><rp>)</rp>
若 <rp>(</rp><rt>わか</rt><rp>)</rp>
いです。 <rp>(</rp><rt></rt><rp>)</rp>
</ruby>
<br>
<br>


```RubyTextConverter.backColonToJsonMatrix( text )```

[[{"ruby":"日本語","rt":"にほんご"},{"ruby":"の","rt":""},{"ruby":"先生","rt":"せんせい"}],[{"ruby":"は","rt":""},{"ruby":"若","rt":"わか"},{"ruby":"いです。","rt":""}]]
