document.addEventListener(DOMContentLoaded function () 
    var input = document.getElementById(villeInput);
    var dropdownContent = document.getElementById(dropdownContent);
    var villeLink = document.getElementById(villeLink);

     Tableau de liens de villes
    var cityLinks = 
        Lagny
       
        
        
        
        
        
        
         
        
         
         
        
         
         
         
         
        
         
       
        
        
         
       
        
         
         
         
         
         
        
        
         
         
        
        
         
         
        
        
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
        
        
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
        
         
         
         
         
        
         
         
         
         
         
        
                         
         Ajoutez dautres villes ici
    ];

     Initialisation des liens de ville
    for (var i = 0; i < cityLinks.length; i++) 
        var link = document.createElement(a);
        link.href = cityLinks[i].url;
        link.textContent = cityLinks[i].;
        dropdownContent.appendChild(link);
    }

    input.addEventListener(input function () 
        var filter = input.value.toLowerCase();
        var links = dropdownContent.getElementsByTag(a);

        for (var i = 0; i < links.length; i++) 
            var city = links[i].textContent.toLowerCase();
            links[i].style.display = city.includes(filter) ? none;
        }
    });

    dropdownContent.addEventListener(click function (event) 
        var target = event.target;
        if (target.tag === A) 
            villeLink.innerHTML =  &emsp;&emsp; + target.textContent + <i class="fas fa-caret-down"><i>;
            window.location.href = target.href;
        }
    });
});

