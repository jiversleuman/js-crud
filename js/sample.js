var app = new function(){
    var country;
    var countries = [];
    var countries2;
    var countryTR = document.getElementById("countryTR");

    //Reset form
    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();
        app.Create();
        app.Read();
        document.getElementById("form").reset();
    });

    // Add country
    this.Create = function (){
        let storage = JSON.parse(localStorage.getItem("countries"));
        country = document.getElementById("country").value;

        if(storage == null){
            countries.push(country);

            localStorage.setItem("countries", JSON.stringify(countries));
        }else{
            countries = JSON.parse(localStorage.getItem("countries"));
            countries.push(country);

            localStorage.setItem("countries", JSON.stringify(countries));
        }
    }

    // Read from local storage
    this.Read = function (){
        countryTR.innerHTML = '';
        countries2 = JSON.parse(localStorage.getItem("countries"));

        if(countries2 != null){
            for(var i = 0; i < countries2.length; i++){
                countryTR.innerHTML += `
                    <div class="bg-dark border border-success text-white card mb-2">
                        <div class="card-body">
                            <p>${countries2[i]}</p>
                            <button class="col-5 text-white btn btn-warning" onclick="app.Edit(${i})">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                            <button class="col-5 text-white btn btn-danger" onclick="app.Delete(${i})">
                                <i class="fas fa-trash"></i> Delete
                            </button>
                        </div>
                    </div>
                `
            }
        }
        else{

        }
    }

    //Edit country
    this.Edit = function(i3){
        let countries4 = JSON.parse(localStorage.getItem("countries"));

        countryTR.innerHTML= "";

        for(var i = 0; i<countries4.length; i++){
            if(i == i3){
                countryTR.innerHTML +=`
                    <div class="bg-dark border border-danger text-white card mb-2">
                        <div class="card-body">
                            <p>${countries2[i]}</p>
                            <input class="mb-2 form-control" id="newcountry" placeholder="${countries4[i]}">
                            <button class="col-5 text-white btn btn-danger" onclick="app.Update(${i})">
                                <i class="fas fa-check-square"></i> Update
                            </button>
                            <button class="col-5 text-white btn btn-danger" onclick="app.Read()">
                                <i class="fas fa-ban"></i> Cancel
                            </button>
                        </div>
                    </div>  
                `
            }
            else{
                countryTR.innerHTML +=`
                    <div class="bg-dark border border-success text-white card mb-2">
                        <div class="card-body">
                            <p>${countries2[i]}</p>
                            <button disabled class="col-5 text-white btn btn-warning" onclick="app.Edit(${i})">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                            <button disabled class="col-5 text-white btn btn-danger" onclick="app.Delete(${i})">
                                <i class="fas fa-trash"></i> Delete
                            </button>
                        </div>
                    </div>        
                `
            }
        }
    }

    // Update country
    this.Update = function(i){
        let countries5 = JSON.parse(localStorage.getItem("countries"));
        countries5[i] = document.getElementById("newcountry").value;
        
        localStorage.setItem("countries", JSON.stringify(countries5));
        app.Read();
        
    }

    // Delete country
    this.Delete = function(i2){
        let countries3 = JSON.parse(localStorage.getItem("countries"));

        countries3.splice(i2, 1);

        localStorage.setItem("countries", JSON.stringify(countries3));
        app.Read();
    }
};
