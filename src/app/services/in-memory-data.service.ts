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
            tag: 'Geology & Geophysics',
            previewText: 'The South Caspian Basin (SCB) is a young basin with a sedimentary rock column up to 25 km thick. High sedimentation rates, combined with other factors, resulted in abnormally high pore...',
        },
        {
            id: 1,
            title: 'Yasamal Outcrop Study',
            date: '20 May 2019',
            author: 'eiLink',
            tag: 'Oil & Gas',
            previewText: 'It is common during field development that certain areas of the structure, while containing appreciable oil and gas reserves, are complicated and negatively affected by certain geological...',
            slug: 'yasamal-outcrop-study'
        },
        {
            id: 2,
            title: 'Estimation of sweep efficiency: Analogous rocks of Yasamal valley to north flank DWG',
            date: '1 September 2019',
            author: 'eiLink',
            tag: 'Drilling & Well Integrity',
            previewText: 'Estimation of the recovery factor from structurally deformed areas is a challenging process due to the high number of unknown parameters. These features are of subseismic scale...',
            slug: 'estimation-of-sweep-efficiency'
        },
        {
            id: 3,
            title: 'Water supply for irrigation in Padarchol area: assessment of rainwater and groundwater potential',
            date: '10 April 2022',
            author: 'eiLink',
            tag: 'Computational Fluid Dynamics',
            previewText: 'The framework of the project was to solve the problem of irrigation in the Hajigabul irrigation area by evaluating subsurface freshwater reserves potential and the use of runoff water...',
            slug: 'assessment-of-rainwater-and-groundwater-potential'
        },
        {
            id: 4,
            title: 'Pre-Stack Seismic inversion based on Continuous Wavelet Transform Processing and Deep Neural Network',
            date: '28 June 2021',
            author: 'eiLink',
            tag: 'Thermodynamic Modelling',
            previewText: 'The main purpose of this study was to develop a methodology to generate a 3D volume of Gamma Ray data for Azeri and Chirag with a resolution approaching the real GR tool readings...',
            slug: 'pre-stack-seismic-inversion'
        },
        {
            id: 5,
            title: 'Estimation of water salinity distribution for ShahDeniz field',
            date: '1 August 2021',
            author: 'eiLink',
            tag: 'Reservoir Modelling',
            previewText: 'Formation of water salinity is important for understanding the hydrodynamic system in a sedimentary basin, including areas of hydraulic communication and isolation, and has implications...',
            slug: 'estimation-of-water-salinity'
        },
        {
            id: 6,
            title: 'Prediction of Drilling risks (wellbore instability, losses, stuck pipes) using numerical techniques',
            date: '1 March 2022',
            author: 'eiLink',
            tag: 'Software Engineering',
            previewText: 'Several types of challenges take place during drilling that include wellbore instability, stuck pipe, fluid losses, etc. Reasons associated with these problems are understood to some degree...',
            slug: 'prediction-of-drilling-risks'
        },
        {
            id: 7,
            title: 'Annuli monitoring',
            date: 'Ongoing',
            author: 'eiLink',
            tag: 'Data Science',
            previewText: 'Sustained casing pressure (SCP), defined as excessive casing pressure that constantly rebuilds after bleed-down, is undesirable and sometimes potentially dangerous for producing wells...',
            slug: 'annuli-monitoring'
        }
    ];

    let products = [
      {
          id: 0,
          title: 'Shale compaction modeling study in the South Caspian basin',
          date: '3 November 2017',
          author: 'eiLink',
          tag: 'Geology & Geophysics',
          previewText: 'The South Caspian Basin (SCB) is a young basin with a sedimentary rock column up to 25 km thick. High sedimentation rates, combined with other factors, resulted in abnormally high pore...',
      },
      {
          id: 1,
          title: 'Yasamal Outcrop Study',
          date: '20 May 2019',
          author: 'eiLink',
          tag: 'Oil & Gas',
          previewText: 'It is common during field development that certain areas of the structure, while containing appreciable oil and gas reserves, are complicated and negatively affected by certain geological...',
          slug: 'yasamal-outcrop-study'
      }
    ]

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
            behance: '',
            github: '',
            imgSrc: 'assets/people/shahriyar.jpg'
        },
        {
            id: 1,
            name: 'Rustam Rustamov',
            position: 'Senior Advisor',
            linkedIn: '',
            behance: '',
            github: '',
            imgSrc: 'assets/people/rustam.jpg'
        },
        {
            id: 2,
            name: 'Izat Shahsenov',
            position: 'Lead Researcher',
            linkedIn: '',
            behance: '',
            github: '',
            imgSrc: 'assets/people/izat.jpg',
            company: 'Waverity'
        },
        {
            id: 3,
            name: 'Vafa Dadashova',
            position: 'Researcher',
            linkedIn: '',
            behance: '',
            github: '',
            imgSrc: 'assets/people/vafa.jpg'
        },
        {
            id: 4,
            name: 'Kamran Mirzabeyli',
            position: 'Researcher',
            linkedIn: '',
            behance: '',
            github: '',
            imgSrc: 'assets/people/kamran.jpg'
        },
        {
            id: 5,
            name: 'Ruslan Malikov',
            position: 'Junior Researcher',
            linkedIn: '',
            behance: '',
            github: '',
            imgSrc: 'assets/people/ruslan.jpg',
            company: 'Waverity'
        },
        {
            id: 6,
            name: 'Ramil Mamishov',
            position: 'Junior Researcher',
            linkedIn: '',
            behance: '',
            github: '',
            imgSrc: 'assets/people/ramil.jpg'
        },
        {
            id: 7,
            name: 'Gunel Rzayeva',
            position: 'Junior Researcher',
            linkedIn: '',
            behance: '',
            github: '',
            imgSrc: 'assets/people/gunel.jpg'
        },
        {
            id: 8,
            name: 'Elmir Abilov',
            position: 'Junior Researcher',
            linkedIn: '',
            behance: '',
            github: '',
            imgSrc: 'assets/people/elmir.jpg'
        },
        {
            id: 9,
            name: 'Tatyana Yeleskina',
            position: 'Junior Researcher',
            linkedIn: '',
            behance: '',
            github: '',
            imgSrc: 'assets/people/tatyana.jpg',
            company: 'Waverity'
        },
        {
            id: 10,
            name: 'Javidan Karimli',
            position: 'Junior Researcher',
            linkedIn: '',
            behance: '',
            github: '',
            imgSrc: 'assets/people/javidan.jpg',
            company: 'Waverity'
        },
        {
            id: 11,
            name: 'Orkhan Mammadov',
            position: 'Junior Researcher',
            linkedIn: '',
            behance: '',
            github: '',
            imgSrc: 'assets/people/orkhan.jpg',
            company: 'Waverity'
        },
        {
            id: 12,
            name: 'Fidan Karimova',
            position: 'Research Assistant',
            linkedIn: '',
            behance: '',
            github: '',
            imgSrc: 'assets/people/fidan.jpg'
        }
    ]

    let researchAreas = [
        {
            id: 0,
            title: 'Geoscience',
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
            title: 'Drilling & Well Interventions',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 3,
            title: 'Fluid Mechanics & Applied Thermodynamics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 4,
            title: 'Remote Sensing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 5,
            title: 'Signal Processing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 6,
            title: 'Reservoir Modelling & Characterization',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 7,
            title: 'Software & Web Solutions',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 8,
            title: 'Digital Twin Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
            imgSrc: 'assets/research-areas/area-'
        },
        {
            id: 8,
            title: 'Development of Artificial Intelligence (ML & DL) frameworks',
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

    return { projects, products, publications, careers, team, blog, researchAreas };
  }
}
