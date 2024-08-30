 //import { faIconsData } from '../..data/faData.js';       // VG blogas

function isNonEmptyString(str) {   // jeigu esi stringas, esi tuscias stringas
    return typeof str === 'string' && str.trim() !== '';
    }

function containsAllowedSymbols(str) {
    const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ123456789`";
   
    for (const symbol of str) {
        if (!abc.includes(symbol)) {
            return false;
        }
}
return true;
}

function services(selector, data) {
    if ( selector !== 'string' || selector === '' ) {
        return false;
    }

    if (!Array.isArray(data) || data.lenght ===0) {
        return false;
    }

    const servicesDOM = document.getElementById(selector); // null, kas buna nesekmes atveju

    if (servicesDOM === null) {
        return false;
    }

    let HTML = '';

    for (const service of data) {
        if (
            typeof service !== 'object' ||
            service === null ||
            Array.isArray(service)
        ) { 
            continue;
        }
        const keys = Object.keys(service);
        
        if (
            keys.length !== 3 || 
            !isNonEmptyString(service.icon) || // kada praskipinti? kada taip nera
            !isNonEmptyString(service.title) ||
            !isNonEmptyString(service.desc)
            // !faIconsData.includes(service.icon) // VG
        ) {
            continue;
        }


        HTML += `<div class="service">
                    <i class="fa fa-${service.icon}" aria-hidden="true"></i>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.desc}</p>
                 </div> `;
}
    
    servicesDOM.innerHTML = HTML; // ispesimas vyksta sitoje eiluteje

    return true;
}

export { services };
