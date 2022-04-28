class RubyTextConverterClass {
	// RubyBackColon Format: (new line chars allowed)
	// 日本語`にほんご;の;\n先生`せんせい;は;若`わか;いです。

	// RubyJsonMatrix Format:
	// [[{"ruby":"你", "rt":"nei5"},{"ruby":"好", "rt":"hou2"}],[{"ruby":"嗎", "rt":"maa1"}]]

	/*
	RubyHtml Format:
		<ruby>
		  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
		  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
		</ruby>
		<br>
		<ruby>
		  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
		  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
		</ruby>
	*/

	backColonToHtml(backColonText) { // outputs as String
		let lines = backColonText.split('\n');
		// let jsonArray = []; //...
		let multiline_content = '';
		for (var i=0; i<lines.length; i++) {
			let line = lines[i];

			let line_content = '';
			let units = line.split(';');
			for (var j=0; j<units.length; j++) {
				let parts = units[j].split('`');
				let rb =  parts[0];
				let rt = (parts.length > 1) ? parts[1] : '';
				line_content += [rb,' ','<rp>(</rp>','<rt>',rt,'</rt>','<rp>)</rp>'].join('') + '\n';
			}
			multiline_content += ['<ruby>',line_content.trimEnd(),'</ruby>'].join('\n') + '\n<br>\n';
		}
		return multiline_content.trimEnd();
	}

	backColonToJsonMatrix(backColonText) { // outputs as String
		let lines = backColonText.split('\n');
		let output_lines = [];
		for (var i=0; i<lines.length; i++) {
			let line = lines[i];

			let output_line = [];
			let units = line.split(';');
			for (var j=0; j<units.length; j++) {
				let parts = units[j].split('`');
				let rb =  parts[0];
				let rt = (parts.length > 1) ? parts[1] : '';

				let output_unit = {};
				output_unit.ruby = rb;
				output_unit.rt = rt;
				output_line.push(output_unit);
			}
			output_lines.push(output_line);
		}
		return JSON.stringify(output_lines);
	}
}

var RubyTextConverter = new RubyTextConverterClass();