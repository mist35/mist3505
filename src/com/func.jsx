function Func(start,end,step){
    const sizes = []
    for(let size = start; size<=end; step+=step){
        sizes.push(size)
    }
    return sizes
}
export {Func}