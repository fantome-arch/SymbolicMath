const nerdamer = require('nerdamer');
require('nerdamer/Algebra');
require('nerdamer/Calculus');
require('nerdamer/Solve');
require('nerdamer/Extra');

export function solveProblem(str, iseqs) {

    if (!iseqs) {
        try {
            let unlatex = nerdamer.convertFromLaTeX(str)
            let evaluation = nerdamer(unlatex).evaluate()
            let simplification = nerdamer(unlatex).simplify()
            try {
                // eslint-disable-next-line
                let tempnum = eval(evaluation.toString())

                if (String(tempnum).length <= 5) {
                    let sol = nerdamer.convertToLaTeX(evaluation.toString())
                    return sol.toString()

                } else {
                    if(String(tempnum).includes('.000')||String(tempnum).includes('.999')){tempnum=Math.round(tempnum)}

                    return String(tempnum)
                }
            } catch (error) {
                try {
                    // eslint-disable-next-line
                    let tempnum = eval(simplification.toString())
                    if (String(tempnum).length <= 5) {
                        let sol = nerdamer.convertToLaTeX(simplification.toString())
                        return sol.toString()

                    } else {
                        if(String(tempnum).includes('.000')||String(tempnum).includes('.999')){tempnum=Math.round(tempnum)}
                        return String(tempnum)
                    }
                } catch (error) {
                    let regex = /(?:\\left\))?\\frac\{([0-9]+)\}\{([0-9]+)\}(?:\\right\))?/gm
                    let sol = evaluation.toString().length < simplification.toString().length && evaluation.toString() !== unlatex ? evaluation.toString() : simplification.toString()
                    let sollatex = nerdamer.convertToLaTeX(sol).toString()
                    let match = regex.exec(sollatex)
                    while (match !== null) {
                        if (match[1].length > 5 && match[2].length > 5) {
                            sollatex = sollatex.replace(match[0], `${match[1] / match[2]}`)
                        }
                        match = regex.exec(sollatex)
                    }
                    if(sollatex.includes('log')){
                        sollatex=sollatex.replaceAll('log','ln')
                    }
                    if(sollatex.includes('log10')){
                        sollatex=sollatex.replaceAll('log10','log')
                    }
                    return sollatex

                }
            }
        } catch (error) {

            return 'Error'
        }

    } else {

        let unlatex = nerdamer.convertFromLaTeX(str)

        let variableextractor = /((?:beta)|[abcdfghjklmnopqrstuvwxyz]{1,6})/gm
        let eqsol;
        let realsol;
        if (checkdublicate(unlatex, variableextractor) === 1 && !str.includes(',')) {
            variableextractor.lastIndex = 0
            let match = variableextractor.exec(unlatex)
            eqsol = nerdamer.solveEquations(unlatex.toString(), match[1])
            realsol = eqsol.toString()
            realsol=String(correctsolution(realsol.split(','),unlatex))

        } else if(!str.includes(',')) {
            eqsol = nerdamer.solveEquations(unlatex.toString())
            realsol = eqsol.toString()
        }else{
            let eqlist=unlatex.toString().split(',')
            eqlist[0]=eqlist[0].replace(eqlist[0][0],'')
            eqlist[eqlist.length-1]=eqlist[eqlist.length-1].replace(eqlist[eqlist.length-1][eqlist[eqlist.length-1].length-1],'')
            eqsol = nerdamer.solveEquations(eqlist)
            realsol = eqsol.toString()
            let equalsignreg=/([a-zA-Z]+),/gm
            let match=equalsignreg.exec(realsol)
            while(match!==null){
                realsol=realsol.replace(match[0],`${match[1]}=`)
                match=equalsignreg.exec(realsol)
            }
        }

        let solutionsarr = realsol.split(',')
        let evaluationarr = []
        let solstr = ''
        solutionsarr.forEach(sol => {
            try {
                // eslint-disable-next-line
                let tempnum = eval(sol)
                if (String(tempnum).length < 5) {
                    let latexform = nerdamer.convertToLaTeX(sol)
                    evaluationarr.push(latexform.toString())
                } else {
                    if (String(tempnum).includes('.999') || String(tempnum).includes('.000')) {
                        evaluationarr.push(String(Math.round(tempnum)))
                    } else {
                        evaluationarr.push(String(tempnum))
                    }

                }
            } catch (error) {
                let latexform = nerdamer.convertToLaTeX(sol).toString()
                let regex = /(?:\\left\))?\\frac\{([0-9]+)\}\{([0-9]+)\}(?:\\right\))?/gm
                let match = regex.exec(latexform)
                while (match !== null) {
                    if (match[1].length > 5 && match[2].length > 5) {
                        latexform = latexform.replace(match[0], `${match[1] / match[2]}`)
                    }
                    match = regex.exec(latexform)
                }
                evaluationarr.push(latexform)

            }
        })
        evaluationarr=new Set(evaluationarr)
        let curval=0
        evaluationarr.forEach((solnext) => {
                solstr += solnext + `${curval === evaluationarr.size - 1 ? '' : ', '}`
                curval+=1


        })
        if(solstr.includes('log')){
            solstr=solstr.replaceAll('log','ln')
        }
        if(solstr.includes('log10')){
            solstr=solstr.replaceAll('log10','log')
        }
        return solstr

    }


}
function checkdublicate(str, regex) {
    let match = regex.exec(str)
    let dublist = []
    while (match !== null) {
        dublist.push(match[1])
        match = regex.exec(str)
    }
    return new Set(dublist).size
}
function correctsolution(sollist,unlatex){
    let finalsolution=[]
    let varex=/((?:beta)|[abcdfghjklmnopqrstuvwxyz]{1,6})/gm
    let variable=varex.exec(unlatex)[1]
    let varobj={}
    let eqpart=unlatex.toString().split('=')
    sollist.forEach(sol=>{
        varobj[variable]=sol
        try {
            let sol1=nerdamer(eqpart[0],varobj)
            try {
                let sol2=nerdamer(eqpart[1],varobj)
                let iscorr=nerdamer(sol1).eq(sol2)
                if(iscorr){
                    finalsolution.push(sol)
                }
                
            } catch (error) {
                
            }
        } catch (error) {
            
        }
    })
    return finalsolution


}
