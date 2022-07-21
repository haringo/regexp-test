let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://loacalhost:1234
동해물과 백두산이 마르고 닳도록
`

const h = `   the hello   world   !`

// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// console.log(str.match(regexp))

// const regexp = /fox/gi
// console.log(regexp.test(str))

// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// const regexp = /the/gi
// console.log(str.match(regexp))

// console.log(str.match(/\.$/gim))

// console.log(str.match(/d$/gm))
// console.log(str.match(/^t/gim))

// console.log(str.match(/fox|dog/))
// console.log(str.match(/https?/g))

// console.log(str.match(/d{2,3}/g))
// console.log(str.match(/\b\w{2,3}\b/g))

// console.log(str.match(/[가-힣]{1,}/g))
// console.log(str.match(/\bf\w{1,}\b/g)) // frozen, fox
// console.log(str.match(/\d{1,}/g))
// console.log(h.replace(/\s/g, '')) // thehelloworld

// console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))