



export const int_regex =/\\int {0,1}_{\\{0,1} {0,1}(.*?)}\^{\\{0,1} {0,1}(.*?)}\\left\(([^ ]*)\\right\)d\\left\((.){1}\\right\)|\\int {0,1}_{?([0-9a-z]+?)}?\^{?([0-9a-z]+?)}?\\left\(([^ ]*?)\\right\)d\\left\((.){1}\\right\)/gm
export const limit_regex=/lim_{([a-zA-Z]{1})\\rightarrow ?([^ ]+)}\\left\(/gm



export function fieldchecker(equation){
     int_regex.lastIndex=0; limit_regex.lastIndex=0;
    let check= int_regex.test(equation) || limit_regex.test(equation)
     int_regex.lastIndex=0; limit_regex.lastIndex=0;
    return check
}
export function inequality(eqs){
    let leiregex=/\\le [^ft]/gm
    let check= eqs.includes('\\ge') || eqs.includes('>') || eqs.includes('<') || leiregex.test(eqs)
    return check
}
export function findineq(str){
    let regexlist=[/([^ ]*)< ?([^ ]*)/gm,/([^ ]*)> ?([^ ]*)/gm,/([^ ]*)\\ge ?([^ ]*)/gm,/([^ ]*)\\le ?([^ ]*)/gm]
    let matched;
    regexlist.forEach(regex=>{
        let match=regex.exec(str)
        if(match!==null){
            matched=match
        }
    })
    return matched
}
