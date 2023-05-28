const template = (variables, { tpl }) => {
	return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => {

  return (
    ${variables.jsx}
  )
};

${variables.exports};
`
}

module.exports = template
