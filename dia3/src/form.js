const textForm = document.querySelector('[data-js="textForm"]')
const textInput = document.querySelector('[data-js="textInput"]')
const result = document.querySelector('[data-js="result"]')

const formatName = (name) => {
  const notCapitalize = ['de', 'da', 'do', 'dos', 'das' ]
  const nameParts = name.split(" ")
  const processedNameParts = nameParts.map(
    (part) => {
      if (notCapitalize.includes(part.toLowerCase())) return part.toLowerCase()
      return part[0].toUpperCase() + part.slice(1).toLowerCase()
  })

  return processedNameParts.join(' ')
}

textForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  result.textContent = formatName(textInput.value)
  textInput.value = ''
}, false)


