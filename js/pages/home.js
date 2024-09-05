// IMPORTS
import { servicesData } from '../../data/servicesData.js';
import { socialMetricsData } from '../../data/socialMetricsData.js';
import { services } from '../components/services.js';
import { socialMetrics } from '../components/socialMetrics.js';

// EXECUTION

/* SOCIAL METRICS: start */

const res = socialMetrics('#metrics_block', socialMetricsData);
const [isError, msg] = res;

if (isError) {
    console.error(msg);
} else {
    console.log(msg);
}
/* SOCIAL METRICS: end */

/* HEADER: start */ 
/* HEADER: end */ 

/* HERO: start */ 
/* HERO: end */ 

/* ABOUT ME: start */ 
/* ABOUT ME: end */ 

/* SERVICES: start */ 

const homeServicesData = [
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

// services('', homeServicesData);

// services('services_block', [5, 'asd', true, [], services, null, undefined]);
// services('services_block', [5, 'asd', true, [], services]);
services('services_block', [
    {
        icon: 'desktop',
    },
]);

/* SERVICES: end */ 

/* RESUME: start */ 
/* RESUME: end */ 

/* FREELANCE US: start */ 
/* FREELANCE US: end */ 

/* PORTFOLIO: start */ 
/* PORTFOLIO: end */ 

/* TESTIMONIALS: start */ 
/* TESTIMONIALS: end */ 

/* BLOGS: start */ 
/* BLOGS: end */ 

/* CONTACT: start */ 
/* CONTACT: end */ 

/* FOOTER: start */ 
/* FOOTER: end */ 
