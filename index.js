function submittedfromtheuser(event) {
    event.preventDefault(); 
  
    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
  
    window.location.href = `second.html?name=${encodeURIComponent(name)}&color=${encodeURIComponent(color)}`;

    localStorage.setItem('name', name)
    localStorage.setItem( 'color', color )
  }
  
  
  