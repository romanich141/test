fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    const deleteNesting = data => {
      const newData = data.filter(item => {
        if (Array.isArray(item.children)) {
          item.children = [];
        }
        return data;
      });
      return newData;
    };
    return deleteNesting(data);
  })
  .then(data => {
    const isActiveTrue = data.filter(item => {
      return item.isActive;
    });
    console.log(isActiveTrue);
    return isActiveTrue;
  });
