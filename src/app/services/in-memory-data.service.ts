import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let projects = [
        {
            id: 0,
            title: 'Shale compaction modeling study in the South Caspian basin',
            date: '3 November 2017',
            author: 'eiLink',
            tag: 'Geology & Geophysics'
        },
        {
            id: 1,
            title: 'Yasamal Outcrop Study',
            date: '20 May 2019',
            author: 'eiLink',
            tag: 'Oil & Gas'
        },
        {
            id: 2,
            title: 'Estimation of sweep efficiency: Analogous rocks of Yasamal valley to north flank DWG',
            date: '1 September 2019',
            author: 'eiLink',
            tag: 'Drilling & Well Integrity'
        },
        {
            id: 3,
            title: 'Water supply for irrigation in Padarchol area: assessment of rainwater and groundwater potential',
            date: '10 April 2022',
            author: 'eiLink',
            tag: 'Computational Fluid Dynamics'
        },
        {
            id: 4,
            title: 'Pre-Stack Seismic inversion based on Continuous Wavelet Transform Processing and Deep Neural Network',
            date: '28 June 2021',
            author: 'eiLink',
            tag: 'Thermodynamic Modelling'
        },
        {
            id: 5,
            title: 'Estimation of water salinity distribution for ShahDeniz field',
            date: '1 August 2021',
            author: 'eiLink',
            tag: 'Reservoir Modelling'
        },
        {
            id: 6,
            title: 'Prediction of Drilling risks (wellbore instability, losses, stuck pipes) using numerical techniques',
            date: '1 March 2022',
            author: 'eiLink',
            tag: 'Software Engineering'
        },
        {
            id: 7,
            title: 'Annuli monitoring',
            date: 'Ongoing',
            author: 'eiLink',
            tag: 'Data Science'
        }
    ];

    let publications = [
        {
            id: 0,
            title: 'Modeling of the cementation factor and hydraulic permeability using Mercury Injection Capillary Pressure (MICP) measurements.',
            date: '22 August 2018',
            authors: 'Izat Shahsenov, Gurban Orujov',
            link: 'https://www.sciencedirect.com/science/article/abs/pii/S0920410518306910'
        },
        {
            id: 1,
            title: 'Wax precipitation modelling using Perturbed Chain Statistical Associating Fluid Theory (PC-SAFT).',
            date: '1 March 2021',
            authors: 'Izat Shahsenov, Ilgar Baghishov, Parviz Allahverdiyev, Ehtiram Azizov',
            link: 'https://www.sciencedirect.com/science/article/abs/pii/S037838122030460X?via%3Dihub#!'
        },
        {
            id: 2,
            title: 'Prediction of Gamma Ray data from pre-stack seismic reflection partial angle stacks using Continuous Wavelet Transform and convolutional neural network approach.',
            date: '17 December 2021',
            authors: 'Izat Shahsenov, Ruslan Malikov, Peter Cook, Sara Grant, Nariman Ismayilov, Kamran Abbasov',
            link: 'https://www.sciencedirect.com/science/article/abs/pii/S0926985121002718'
        },
        {
            id: 3,
            title: 'Quantifying occurrence of deformation bands in sandstone as a function of structural and petrophysical factors and their impact on reservoir quality: an example from outcrop analog of Productive Series (Pliocene), South Caspian Basin.',
            date: '7 January 2022',
            authors: 'Shahriyar Alkhasli, Gasham Zeynalov, Aydin Shahtakhtinskiy',
            link: 'https://link.springer.com/article/10.1007/s13202-021-01448-z'
        }
    ];

    let careers = [
        {
            id: 0,
            title: 'Junior Data Scientist',
            location: 'Baku, Azerbaijan',
            link: 'https://forms.clickup.com/31136212/f/xp6em-2203/WC4TOGVZLPORSGZCR7'
        },
        {
            id: 1,
            title: 'Graduate Petroleum Engineer',
            location: 'Baku, Azerbaijan',
            link: 'https://forms.clickup.com/31136212/f/xp6em-2223/WEMFF72L67VTX7UFCK'
        },
        {
            id: 2,
            title: 'Junior Applied Scientist on Image Processing',
            location: 'Baku, Azerbaijan',
            link: 'https://forms.clickup.com/31136212/f/xp6em-2363/I0ARXOVYB09LBDFIAM'
        }
    ];

    let team = [
        {
            id: 0,
            name: 'Shahriyar Alkhasli',
            position: 'Director',
            linkedIn: '',
            imgSrc: ''
        },
        {
            id: 1,
            name: 'Rustam Rustamov',
            position: 'Senior Advisor',
            linkedIn: '',
            imgSrc: ''
        },
        {
            id: 2,
            name: 'Izat Shahsenov',
            position: 'Lead Researcher',
            linkedIn: '',
            imgSrc: ''
        },
        {
            id: 3,
            name: 'Vafa Dadashova',
            position: 'Researcher',
            linkedIn: '',
            imgSrc: ''
        },
        {
            id: 12,
            name: 'Kamran Mirzabeyli',
            position: 'Researcher',
            linkedIn: '',
            imgSrc: ''
        },
        {
            id: 4,
            name: 'Ruslan Malikov',
            position: 'Junior Researcher',
            linkedIn: '',
            imgSrc: ''
        },
        {
            id: 5,
            name: 'Ramil Mamishov',
            position: 'Junior Researcher',
            linkedIn: '',
            imgSrc: ''
        },
        {
            id: 6,
            name: 'Gunel Rzayeva',
            position: 'Junior Researcher',
            linkedIn: '',
            imgSrc: ''
        },
        {
            id: 7,
            name: 'Elmir Abilov',
            position: 'Junior Researcher',
            linkedIn: '',
            imgSrc: ''
        },
        {
            id: 8,
            name: 'Tatyana Yeleskina',
            position: 'Junior Researcher',
            linkedIn: '',
            imgSrc: ''
        },
        {
            id: 11,
            name: 'Javidan Karimli',
            position: 'Junior Researcher',
            linkedIn: '',
            imgSrc: ''
        },
        {
            id: 10,
            name: 'Orkhan Mammadov',
            position: 'Junior Researcher',
            linkedIn: '',
            imgSrc: ''
        },
        {
            id: 9,
            name: 'Fidan Karimova',
            position: 'Research Assistant',
            linkedIn: '',
            imgSrc: ''
        },
    ]

    let researchAreas = [
        {
            id: 0,
            title: 'Geology & Geophysics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 1,
            title: 'Oil & Gas Production Technology',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 2,
            title: 'Drilling & Well Integrity',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 3,
            title: 'Computational Fluid Dynamics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 4,
            title: 'Thermodynamic Modelling',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 5,
            title: 'Reservoir Modelling',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 6,
            title: 'Software Engineering',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 7,
            title: 'Data Science',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 8,
            title: 'Machine Learning',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        }
    ]

    let blog = [
        {
            id: 0,
            title: '',
            tag: '',
            description: '',
            cover: ''
        },
        {
            id: 1,
            title: '',
            tag: '',
            description: '',
            cover: ''
        },
        {
            id: 2,
            title: '',
            tag: '',
            description: '',
            cover: ''
        }
    ]

    return { projects, publications, careers, team, blog, researchAreas };
  }
}