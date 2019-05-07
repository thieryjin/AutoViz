let current = null

function init () {
  const root = d3.hierarchy(dataset)
  // console.log(root)
  d3.select('img')
    .on('click', () => {
      console.log(current)
      if (current.parent) {
        setOptions(current.parent)
      }
    })
  setOptions(root)
}

function setOptions (root) {
  current = root
  if (root.depth > 0) {
    d3.select('img').style('display', 'block')
  } else {
    d3.select('img').style('display', 'none')
  }
  d3.select('#app').select('div.question').html(`
    <span>
      ${root.data.question || 'Result'}
    </span>  
  `)
  const optionsContainer = d3.select('#app').select('div.options-container')
  optionsContainer.selectAll('div.option').remove()
  const options = optionsContainer.selectAll('div.option')
    .data(root.children)
    .enter()
    .append('div')
    .classed('option', true)
    
  options.style('width', 100 / root.children.length + '%').html(d => {
    return d.data.desc
  }).on('click', (d) => {
    if (d.children) {
      setOptions(d)
    }
  })
}

window.onload = init