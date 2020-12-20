function resetcolor()
    {
        document.documentElement.style.setProperty('--main-color'," #b60761");
        document.documentElement.style.setProperty('--second-color', "#b43cc4");
    }
    
document.getElementById('first-color').addEventListener('input', function()
    {
        let newcolor1 = document.getElementById('first-color').value;
        let newcolor2 = document.getElementById('second-color').value;
        document.documentElement.style.setProperty('--main-color',newcolor1);
        document.documentElement.style.setProperty('--second-color',newcolor2);
    })
    
    document.getElementById('second-color').addEventListener('input', function()
    {
        let newcolor1 = document.getElementById('first-color').value;
        let newcolor2 = document.getElementById('second-color').value;
        document.documentElement.style.setProperty('--main-color',newcolor1);
        document.documentElement.style.setProperty('--second-color',newcolor2);
    })

    