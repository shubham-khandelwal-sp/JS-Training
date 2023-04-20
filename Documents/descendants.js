for(let li of document.querySelectorAll('li')){
    let title=li.firstChild.data 
    let listOfDesc=li.getElementsByTagName('li')
    alert(`Title:${title}, Descendants:${listOfDesc.length}`)
}