const api = () : {
    Sym1 : () => number,
    Sym2 : () => boolean
} => {
    return null
}

/**
 * Important constant
 */
export const {
    /**
     * Docs for Sym1
     */
    Sym1,

    /**
     * Docs for Sym2
     */
    Sym2
} = api()
