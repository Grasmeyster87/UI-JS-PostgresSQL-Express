fetch('http://localhost:8081/api/user', {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json;odata=verbose",
    }, 
    body: JSON.stringify({
      "__metadata": { "type": "SP.Data.List4.ListItem" },
    })
  });