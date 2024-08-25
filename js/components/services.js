function services() {
    let HTML = '';

    const servicesData = [
        {
            icon: 'desktop',
            title: 'Search Optimization',
            desc:'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading',
        },
        {
            icon: 'gg',
            title: 'Logo &amp; Identity',
            desc:'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading',
        },
        {
            icon: 'puzzle-piece',
            title: 'Graphics Design',
            desc:'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading',
        },
        {
            icon: 'globe',
            title: 'Fully Responsive',
            desc:'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading',
        },
        {
            icon: 'wrench',
            title: 'Advanced options',
            desc:'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading',
        },
        {
            icon: 'money',
            title: 'Reasonable pricing',
            desc:'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading',
        },
    ];

    for (const service of servicesData) {
        HTML += `<div class="service">
                    <i class="fa fa-${service.icon}" aria-hidden="true"></i>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.desc}</p>
                 </div>
                 `;
}

    const servicesDOM = document.getElementById('services_block');
    
    servicesDOM.innerHTML = HTML;

    return;
}

export { services };
