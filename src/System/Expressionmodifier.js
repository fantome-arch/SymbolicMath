var matchRecursive = function () {
	var	formatParts = /^([\S\s]+?)\.\.\.([\S\s]+)/,
		metaChar = /[-[\]{}()*+?.\\^$|,]/g,
		escape = function (str) {
			return str.replace(metaChar, "\\$&");
		};

	return function (str, format) {
		var p = formatParts.exec(format);
		if (!p) throw new Error("format must include start and end tokens separated by '...'");
		if (p[1] === p[2]) throw new Error("start and end format tokens cannot be identical");

		var	opener = p[1],
			closer = p[2],
			/* Use an optimized regex when opener and closer are one character each */
			iterator = new RegExp(format.length === 5 ? "["+escape(opener+closer)+"]" : escape(opener)+"|"+escape(closer), "g"),
			results = [],
			openTokens, matchStartIndex, match;

		do {
			openTokens = 0;
			// eslint-disable-next-line
			while (match = iterator.exec(str)) {
				if (match[0] === opener) {
					if (!openTokens)
						matchStartIndex = iterator.lastIndex;
					openTokens++;
				} else if (openTokens) {
					openTokens--;
					if (!openTokens)
						results.push(str.slice(matchStartIndex, match.index));
				}
			}
		} while (openTokens && (iterator.lastIndex = matchStartIndex));

		return results;
	};
}();


function getallclosedparen(str,recurse_list=undefined,parentoken=undefined){
	let token;
	parentoken===undefined ? token="\\left(...\\right)" : token=parentoken
	let returning_list= recurse_list || []
	let initial_list=matchRecursive(str,token)
	returning_list=[...returning_list,...initial_list]
	let new_str=initial_list.toString()
	new_str=new_str.replace(',','')

	if(new_str){
		return getallclosedparen(new_str,returning_list)}
		
	return returning_list
	

}
// log2 log7 log4 log6
//['5+log_7\\left(10\\right)', '5+\\sin\\left(log_6\\left(4\\right)+a\\right)', 'y', '10', 'log_6\\left(4\\right)+a', '4']
function formatlogequation(str){
	let regex=/log_{?([a-zA-Z0-9]*)}?\\left\(/gm
	let match=regex.exec(str)
	let paren_list=getallclosedparen(str)
	paren_list.forEach(element=>{
		while(match!==null){
			if(str.includes(`${match[0]}${element}\\right)`)){
				let replacer=`${match[0]}${element}\\right)`
				str=str.replace(replacer,`\\frac{log\\left(${element}\\right)}{log\\left(${match[1]}\\right)}`)
				break
			}
			match=regex.exec(str)
		};
		regex.lastIndex=0
		match=regex.exec(str)
	})
	return str
}

export function formatlimits(str){
	let regex=/lim_{([a-zA-Z]{1})\\rightarrow ?([^ ])}\\left\(/gm
	let match=regex.exec(str)
	let paren_list=getallclosedparen(str)
	paren_list.forEach(element=>{
		while(match!==null){
			if(str.includes(`${match[0]}${element}\\right)`)){
				let replacer=`${match[0]}${element}\\right)`
				str=str.replace(replacer,`limit(${element},${match[1]},${match[2]})`)
				break
			}
			match=regex.exec(str)
		};
		regex.lastIndex=0
		match=regex.exec(str)
	})
	return str
}
export function formatcomplexfactorial(str){
	let paren_list=getallclosedparen(str)
	paren_list.forEach(element=>{
		if(str.includes(`\\left(${element}\\right)!`)){
			let replacer=`\\left(${element}\\right)!`
			str=str.replace(replacer,`fact(${element})`)
		}
	})
	return str

}
function simplefactorial(str){
	let factregex=/([A-Z0-9a-z]+)!/gm
	let match=factregex.exec(str)
	while(match!==null){
		str=str.replace(match[0],`fact(${match[1]})`)
		match=factregex.exec(str)
	}
	return str
}


export function summationformat(str){
	let regex=/\\sum ?_{([a-zA-Z]){1}=([0-9]*)}\^{?([a-zA-Z0-9]*)}?\\left\(/gm
	let match=regex.exec(str)
	let paren_list=getallclosedparen(str)

	paren_list.forEach(element=>{
		while(match!==null){
			if(str.includes(`${match[0]}${element}\\right)`)){

				let replacer=`${match[0]}${element}\\right)`
				str=str.replace(replacer,`sum(${element},${match[1]},${match[2]},${match[3]})`)
				break
			}
			match=regex.exec(str)
		};
		regex.lastIndex=0
		match=regex.exec(str)
	})
	
	return str

}
export function productformat(str){
	let regex=/\\prod ?_{([a-zA-Z]){1}=([0-9]*)}\^{?([a-zA-Z0-9]*)}?\\left\(/gm
	let match=regex.exec(str)
	let paren_list=getallclosedparen(str)

	paren_list.forEach(element=>{
		while(match!==null){
			if(str.includes(`${match[0]}${element}\\right)`)){
				
				let replacer=`${match[0]}${element}\\right)`
				str=str.replace(replacer,`product(${element},${match[1]},${match[2]},${match[3]})`)

				break
			}
			match=regex.exec(str)
		};
		regex.lastIndex=0
		match=regex.exec(str)
	})
	
	return str

}
export function differentialformat(str){
	let regex=/\\frac{d}{d\\left\(([a-zA-Z]{1})\\right\)\^?{?([0-9]*)}?}\\left\(/gm
	let match=regex.exec(str)
	let paren_list=getallclosedparen(str)
	paren_list.forEach(element=>{
		while(match!==null){
			if(str.includes(`${match[0]}${element}\\right)`)){
				let replacer=`${match[0]}${element}\\right)`
				str=str.replace(replacer,`diff(${element},${match[1]},${match[2] ? match[2]: 1})`)
				break
			}
			match=regex.exec(str)
		};
		regex.lastIndex=0
		match=regex.exec(str)
	})
	
	return str
}

export function fixformatting(str){
	let comboregex=/\^{?([0-9a-zA-Z]+)}?C_{?([0-9A-Za-z]+)}?/gm
	let permuregex=/\^{?([0-9a-zA-Z]+)}?P_{?([0-9A-Za-z]+)}?/gm
	let differentialregex=/\\frac{d}{d\\left\(([a-zA-Z]{1})\\right\)\^?{?([0-9]*)}?}\\left\(/gm
	if(str.includes('log\\left(')){
		str=str.replaceAll('log\\left(','log10\\left(')
	}
	if(str.includes('ln\\left(')){
		str=str.replaceAll('ln\\left(','log\\left(')
	}
	str=formatlogequation(str)
	if(str.includes('!')){
		str=simplefactorial(str)
		str=formatcomplexfactorial(str)

	}
	if(str.includes('\\sum')){
		
		str=summationformat(str)
	}
	if(str.includes('\\prod')){
		str=productformat(str)
	}
	if(differentialregex.test(str)){
		str=differentialformat(str)
	}
	if(comboregex.test(str)){
		comboregex.lastIndex=0
		let match=comboregex.exec(str)
		while(match!==null){
			str=str.replace(match[0],`\\frac{fact\\left(${match[1]}\\right)}{fact\\left(${match[1]}-${match[2]}\\right)*fact\\left(${match[2]}\\right)}`)
			match=comboregex.exec(str)
		}

	}
	if(permuregex.test(str)){
		permuregex.lastIndex=0
		let match=permuregex.exec(str)
		while(match!==null){
			str=str.replace(match[0],`\\frac{fact\\left(${match[1]}\\right)}{fact\\left(${match[1]}-${match[2]}\\right)}`)
			match=permuregex.exec(str)
		}

	}
	// if(str.includes('log')){
	// 	str=str.replaceAll('log','log10')
	// }
	// if(str.includes('ln')){
	// 	str=str.replaceAll('ln','log')
	// }
	

	return str
}

export default formatlogequation 

