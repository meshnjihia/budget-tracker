export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "kes",
    style: "currency",
    minimumFractionDigits: 0,
})

export const getPercentage = (amount, max) => {
    if (amount === 0) return 0;
    const percentage = (amount / max) * 100
    return Math.round (percentage*100)/100
}

export const btnStyles = ' px-2 py-1 rounded-md text-gray-50 font-normal text-sm capitalize tracking-tighter hover:text-white'