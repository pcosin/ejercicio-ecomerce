export const filterProducts = (product, array) => {
    return array.filter((ele) => ele.talle === product)
}