function runPlugin() {
    let selectedElements = figma.currentPage.selection.length;
    if (selectedElements === 0) {
      figma.closePlugin("no element selected");
      return
    }
    if (selectedElements > 1) {
      figma.closePlugin('please select single element')
      return
    }
    let selectedName = figma.currentPage.selection[0].name
    function hasSameName (node){
      return node.name === selectedName
    }
  //   console.log(selectedName );
  let withSameName = figma.currentPage.findAll(hasSameName)
  figma.currentPage.selection = withSameName
    figma.closePlugin(withSameName.length + ' elements selected');
  }
  runPlugin();
  
  function handleSelection(){
      const nodes = figma.currentPage.selection
      nodes.forEach(element => {
          console.log('element', element.type);
      });
      if (nodes[0].type === 'TEXT') {
          const textNode = nodes[0] ;
          const text = textNode.characters;
          console.log(`
          fontSize: ${(textNode.fontSize)},
          fontName: ${(JSON.stringify(textNode.fontName))},
          text: ${text},
      `);
      figma.closePlugin()
        }
  }
  handleSelection();