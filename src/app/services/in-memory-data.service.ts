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
        pictureId: 0,
        animationOrder: 9,
        title: 'Shale compaction modeling study in the South Caspian basin',
        date: '3 November 2017',
        author: 'eiLink',
        tag: 'Geoscience',
        areaId: 0,
        previewText: 'The South Caspian Basin (SCB) is a young basin with a sedimentary rock column up to 25 km thick. High sedimentation rates, combined with other factors, resulted in abnormally high pore...',
      },
      {
        id: 1,
        pictureId: 1,
        animationOrder: 8,
        title: 'Yasamal Outcrop Study',
        date: '20 May 2019',
        author: 'eiLink',
        tag: 'Oil & Gas Production Technology',
        areaId: 1,
        previewText: 'It is common during field development that certain areas of the structure, while containing appreciable oil and gas reserves, are complicated and negatively affected by certain geological...',
      },
      {
        id: 2,
        pictureId: 2,
        animationOrder: 7,
        title: 'Estimation of sweep efficiency: Analogous rocks of Yasamal valley to north flank DWG',
        date: '1 September 2019',
        author: 'eiLink',
        tag: 'Drilling & Well Interventions',
        areaId: 2,
        previewText: 'Estimation of the recovery factor from structurally deformed areas is a challenging process due to the high number of unknown parameters. These features are of subseismic scale...',
      },
      {
        id: 3,
        pictureId: 3,
        animationOrder: 6,
        title: 'Annuli monitoring',
        date: '5 December 2020',
        author: 'eiLink',
        tag: 'Digital Twin Development',
        areaId: 8,
        previewText: 'Sustained casing pressure (SCP), defined as excessive casing pressure that constantly rebuilds after bleed-down, is undesirable and sometimes potentially dangerous for producing wells...',
      },
      {
        id: 4,
        pictureId: 4,
        animationOrder: 5,
        title: 'Estimation of Pore Scale Efficiency using Integrated Lab Measurements and Numerical Techniques',
        date: '21 July 2021',
        author: 'eiLink',
        tag: 'Signal Processing',
        areaId: 5,
        previewText: 'Pore-scale displacement efficiency EPS also called displacement efficiency Ed, is a crucial parameter for the estimation of the ultimate oil recovery factor, accurate history matching...',
      },
      {
        id: 5,
        pictureId: 5,
        animationOrder: 4,
        title: 'Estimation of water salinity distribution for ShahDeniz field',
        date: '1 August 2021',
        author: 'eiLink',
        tag: 'Signal Processing',
        areaId: 5,
        previewText: 'Formation of water salinity is important for understanding the hydrodynamic system in a sedimentary basin, including areas of hydraulic communication and isolation, and has implications...',
      },
      {
        id: 6,
        pictureId: 6,
        animationOrder: 3,
        title: 'Prediction of Drilling risks (wellbore instability, losses, stuck pipes) using numerical techniques',
        date: '1 March 2022',
        author: 'eiLink',
        tag: 'Software & Web Solutions',
        areaId: 7,
        previewText: 'Several types of challenges take place during drilling that include wellbore instability, stuck pipe, fluid losses, etc. Reasons associated with these problems are understood to some degree...',
      },
      {
        id: 7,
        pictureId: 7,
        animationOrder: 2,
        title: 'Water supply for irrigation in Padarchol area: assessment of rainwater and groundwater potential',
        date: '10 April 2022',
        author: 'eiLink',
        tag: 'Fluid Mechanics & Applied Thermodynamics',
        areaId: 3,
        previewText: 'The framework of the project was to solve the problem of irrigation in the Hajigabul irrigation area by evaluating subsurface freshwater reserves potential and the use of runoff water...',
      },
      {
        id: 8,
        pictureId: 8,
        animationOrder: 1,
        title: 'Prediction of deformation bands and other features from MDT/RFT pressure data',
        date: '13 July 2022',
        author: 'eiLink',
        tag: 'Software & Web Solutions',
        areaId: 7,
        previewText: 'Deformed rock areas create challenges for fluid flow due to deteriorating rock properties and creating flow barriers, thus making the recovery factor difficult to predict. The mechanism of def...',
      },
      {
        id: 9,
        pictureId: 9,
        animationOrder: 0,
        title: 'MZI` s Internal Control Valve (ICV) Performance Monitoring',
        date: '14 December 2022',
        author: 'eiLink',
        tag: 'Software & Web Solutions',
        areaId: 7,
        previewText: 'Control valves may be the most important, but sometimes the most neglected, part of a control loop. A control valve is used to control the rate of flow in a line. The “controller” receives...',
      },
    ];

    let products = [
      {
        id: 0,
        pictureId: 0,
        animationOrder: 0,
        title: 'Sand Production Event Prediction Using Integrated Data Science Solutions',
        date: '10 January 2023',
        author: 'eiLink',
        tag: 'Geology & Geophysics',
        previewText: 'About 70% of the world’s hydrocarbon reserves are contained in weakly consolidated sandstone reservoirs, and hence they are prone to sand production. Sandstone degradation and detachment of...',
      }
    ]

    let publications = [
      {
        id: 3,
        title: 'Modeling of the cementation factor and hydraulic permeability using Mercury Injection Capillary Pressure (MICP) measurements.',
        date: '22 August 2018',
        authors: 'Izat Shahsenov, Gurban Orujov',
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S0920410518306910'
      },
      {
        id: 2,
        title: 'Wax precipitation modelling using Perturbed Chain Statistical Associating Fluid Theory (PC-SAFT).',
        date: '1 March 2021',
        authors: 'Izat Shahsenov, Ilgar Baghishov, Parviz Allahverdiyev, Ehtiram Azizov',
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S037838122030460X?via%3Dihub#!'
      },
      {
        id: 1,
        title: 'Prediction of Gamma Ray data from pre-stack seismic reflection partial angle stacks using Continuous Wavelet Transform and convolutional neural network approach.',
        date: '17 December 2021',
        authors: 'Izat Shahsenov, Ruslan Malikov, Peter Cook, Sara Grant, Nariman Ismayilov, Kamran Abbasov',
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S0926985121002718'
      },
      {
        id: 0,
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
      }/* ,
      {
        id: 2,
        title: 'Junior Applied Scientist on Image Processing',
        location: 'Baku, Azerbaijan',
        link: 'https://forms.clickup.com/31136212/f/xp6em-2363/I0ARXOVYB09LBDFIAM'
      } */
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
        imgSrc: 'assets/people/ramil.jpg',
        company: 'Waverity'
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
        description: 'Results are more precise when the subsurface is better understood. In addition to assisting customers with a clear understanding of the subsurface, eiLink also aims to help them make the necessary adjustments to new information.\n\nOur team is composed of multidisciplinary experts who utilize a wide range of tools and techniques, including seismic data analysis, remote sensing, and geological mapping, to investigate the Earth`s properties. With years of experience and a passion for innovation, our researchers are constantly pushing the boundaries of what is possible in Geoscience research.\n\nOur research has a wide range of applications, from natural hazards and climate change to the distribution of natural resources like minerals, water, and fossil fuels. We are committed to providing the highest quality research to our clients and partners, and we pride ourselves on our ability to deliver innovative solutions to complex problems.',
        imgSrc: 'assets/research-areas/area-'
      },
      {
        id: 1,
        title: 'Oil & Gas Production Technology',
        description: 'At eiLink, we understand the challenges faced by the oil and gas industry in today`s rapidly changing landscape. Our expert Oil and Gas Production Technology research team is here to help you optimize your production processes and overcome any challenges you may face.\n\nOur multidisciplinary team of experts has extensive experience in the field of oil and gas production technology. We specialize in developing and applying cutting-edge technologies and techniques to optimize production, reduce costs, and improve safety. We also have expertise in more traditional production methods.\n\nOur research has a wide range of applications, from improving drilling and completion practices to developing new methods for enhancing oil and gas recovery, including in challenging carbonate reservoirs. We utilize advanced techniques such as machine learning, artificial intelligence, and big data analytics to analyze and optimize production processes.',
        imgSrc: 'assets/research-areas/area-'
      },
      {
        id: 2,
        title: 'Development of Artificial Intelligence (ML & DL) frameworks',
        description: 'At eiLink R&D center, we are passionate about staying up-to-date with the latest research and development in the field of Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL). We take pride in developing custom solutions that are tailored to our clients` unique needs and requirements.\n\nOur team of researchers and developers has extensive experience in developing cutting-edge AI, ML, and DL solutions that help our clients optimize their operations, increase efficiency, and reduce costs. We work collaboratively with our clients to fully understand their specific needs and goals, and then leverage our expertise to develop solutions that meet and exceed their expectations.\n\nIn addition to custom application development, we also develop AI, ML, and DL frameworks that enable our clients to accelerate their AI initiatives. We believe in building highly scalable, flexible, and customizable frameworks that can be easily integrated into our clients` existing systems and workflows.\n\nOur goal is to help our clients unlock the full potential of AI, ML, and DL technologies in a way that is tailored to their unique needs and goals. We believe in building strong partnerships with our clients and are committed to providing exceptional service and support every step of the way.',
        imgSrc: 'assets/research-areas/area-'
      },
      {
        id: 3,
        title: 'Fluid Mechanics & Applied Thermodynamics',
        description: 'Fluid Mechanics and Applied Thermodynamics are two fundamental branches of engineering that deal with the study of fluids (liquids, gases, and plasmas) and their behavior in different environments, as well as the application of thermodynamic principles to practical engineering problems. These fields are crucial for designing and optimizing various industrial processes and systems such as turbines, engines, heat exchangers, pumps, and many others.\n\nOur research team specializes in the areas of Fluid Mechanics and Applied Thermodynamics and provides a wide range of services to clients from various industries such as energy, aerospace, automotive, and manufacturing. Our team of experts is dedicated to delivering high-quality solutions to complex problems using cutting-edge tools and techniques.\n\nAt eiLink, we work closely with our clients to understand their specific needs and develop customized solutions that meet their unique requirements. Our team is committed to providing timely, cost-effective, and reliable services to our clients.',
        imgSrc: 'assets/research-areas/area-'
      },
      {
        id: 4,
        title: 'Remote Sensing',
        description: 'Remote sensing is an essential tool for studying and understanding our planet. It involves gathering data from a distance, typically using satellites or aircraft, to provide valuable information about the Earth`s surface, atmosphere, and oceans.\n\nRemote sensing can be used for a wide range of applications, including monitoring weather patterns, tracking changes in land use, mapping natural resources, and detecting environmental hazards. The data collected through remote sensing is used by scientists, government agencies, and private companies to make informed decisions about issues that affect our planet.\n\nOne of the benefits of remote sensing is that it allows researchers to study areas that are difficult to access, such as remote or hazardous locations. This makes it an invaluable tool for studying areas like the polar regions, where data collection would be dangerous and costly without the use of remote sensing. By analyzing historical remote sensing data, scientists can track changes in the Earth`s surface, such as the effects of climate change or the impact of human activity on natural resources.\n\nAt eiLink, we specialize in remote sensing and offer a wide range of services to our clients. Our team of experts uses the latest technology and techniques to collect and analyze remote sensing data, providing our clients with accurate and detailed information about the environment. Our services include data acquisition, processing, and analysis, as well as data visualization and interpretation.\n\nOverall, remote sensing is a powerful tool that can provide valuable insights into our planet`s complex systems. At our research center, we are committed to advancing our understanding of the Earth through the use of remote sensing technology and providing our clients with the information they need to make informed decisions about the environment.',
        imgSrc: 'assets/research-areas/area-'
      },
      {
        id: 5,
        title: 'Signal Processing',
        description: 'Signal processing is a vital field of research that focuses on the analysis, manipulation, and interpretation of signals. Signals are everywhere in our modern world, from audio and video signals to signals transmitted by sensors and communication systems.\n\nSignal processing research involves developing new techniques and algorithms to extract useful information from signals, improving signal quality, and developing new applications that leverage the power of signals. This research is crucial in many areas, including telecommunications, medical imaging, audio and video processing, and control systems. In the oil and gas industry, signal processing is used in various applications, including seismic data processing, real-time monitoring of production operations, and analysis of sensor data from equipment.\n\nAt eiLink R&D Center, we specialize in signal processing and offer a wide range of services to our clients. Our team of experts uses the latest technology and techniques to analyze signals and extract valuable information from them. Our services include data acquisition, signal processing algorithm development, system design and implementation, and data visualization and interpretation.',
        imgSrc: 'assets/research-areas/area-'
      },
      {
        id: 6,
        title: 'Reservoir Modelling & Characterization',
        description: 'Whether it is digital reservoir characterization or macro-scale fluid simulations, eiLink helps customers to get a better grasp on their assets, as well as how to utilize them in the most optimal way.\n\nOur multidisciplinary team of experts utilizes advanced techniques such as machine learning and artificial intelligence algorithms to create accurate and detailed 3D models of reservoirs. These models help to optimize production and recovery of hydrocarbons or other fluids, while reducing uncertainty in reservoir models.\n\nWe have extensive experience in reservoir characterization, modeling and simulation, and access to state-of-the-art facilities and cutting-edge technology. Our team is dedicated to providing high-quality research that delivers innovative solutions to complex problems.',
        imgSrc: 'assets/research-areas/area-'
      },
      {
        id: 7,
        title: 'Software & Web Solutions',
        description: 'At eiLink, we understand that complex theories and solutions are worthless if they are not effectively applied to meet your specific business needs. That`s why we`re dedicated to providing top-of-the-line Software & Web Solutions services that can help streamline your workflow and boost productivity.\n\nWhether you`re looking to integrate the latest cutting-edge solutions into your existing systems, or you need specialized software developed from scratch, our team of experts has the skills and experience necessary to deliver the results you need. We pride ourselves on our ability to understand our clients` unique requirements and deliver customized solutions that are tailored to their exact needs.\n\nOur team of professionals utilizes the latest technologies and development methodologies to ensure that your software and web solutions are efficient, reliable, and user-friendly. From concept to deployment, we work closely with our clients to ensure that every step of the development process is transparent and meets their expectations./n/nAt eiLink, we`re committed to providing exceptional service that is cost-effective and reliable. We believe that your success is our success, and we`re always ready to go the extra mile to ensure that your business needs are met.',
        imgSrc: 'assets/research-areas/area-'
      },
      {
        id: 8,
        title: 'Digital Twin Development',
        description: 'A digital twin is a digital representation of a physical object, process, service or environment that behaves and looks like its counterpart in the real-world.\n\nA digital twin is, in essence, a computer program that uses real world data to create simulations that can predict how a product or process will perform. These programs can integrate the internet of things (Industry 4.0), artificial intelligence and software analytics to enhance the output.\n\nAt eiLink, we`re proud to offer cutting-edge digital twin development services to our clients. With our digital twin development service, you can gain valuable insights into the behavior and performance of your products in a virtual environment before implementing them in the physical world.\n\nOur digital twin development service can be applied to various industries, including manufacturing, engineering, healthcare, and transportation. Whether you`re looking to improve product performance, reduce downtime, or optimize your production process, our digital twin development service can help you achieve your objectives.',
        imgSrc: 'assets/research-areas/area-'
      },
      {
        id: 9,
        title: 'Drilling & Well Interventions',
        description: 'At eiLink, we specialize in providing comprehensive solutions for drilling and well interventions to our clients across various industries. Our team of experts leverages their extensive subsurface knowledge to deliver effective solutions to our clients, regardless of the complexity of the challenges they are facing.',
        imgSrc: 'assets/research-areas/area-'
      }
    ]

    let blog = [
      {
        id: 0,
        title: 'Finding Solutions to Technical Problems',
        tag: 'Blog Post',
        description: 'Initially created with the purpose of strengthening educational research capacity, eiLink is now a business unit offering value-added services addressing emerging technical and technological issues.\n\nWe strive to transform ideas, studies, and developments into innovative R&D products to expand our customers’ impact as well as solving challenges they face.\n\n',
        cover: 'assets/blog/blog-0.jpg',
        hashtags: '#research #business #eilink #eigroup'
      },
      {
        id: 1,
        title: 'Pursuing Excellence in Various Industries',
        tag: 'Blog Post',
        description: 'eiLink endeavors to achieve technical excellence by leveraging its vast expertise across multiple domains. Through the integration of a multidisciplinary approach, we aim to provide effective solutions that cater to diverse areas of application.\n\nSuch an approach allows for the optimal utilization of knowledge and resources, enabling us to provide cutting-edge solutions that meet the complex demands in various areas:',
        cover: 'assets/blog/blog-1.jpg',
        hashtags: '#technology #development #artificialintelligence #gas #oil #software #remotesensing #signalprocessing #fluidmechanics #websolutions #characterization #drilling'
      },
      {
        id: 2,
        title: 'Annuli Monitoring',
        tag: 'Blog Post',
        description: 'We developed a tool to improve monitoring of #annulus pressures and detection of build-ups with minimum input by engineers.\n\nThis tool minimizes the work done by engineers by giving information about potential build-ups for different time periods and increases success for well integrity with improved monitoring and detection. It reduces analysis time and makes it possible to track and analyse around 200 well annulus pressure measurements simultaneously.',
        cover: 'assets/blog/blog-2.jpg',
        hashtags: '#work #success #engineers #annulus #well'
      },
      {
        id: 3,
        title: 'Integrated Data Science Solutions For Sand Production',
        tag: 'Blog Post',
        description: 'Producing sand is a very complex challenge in the oil and gas industry as it can create serious problems. This creates both safety and economic concerns by harming the integrity of the well and reducing hydrocarbon reduction.\n\n💡 To solve this complex and multidimensional problem, we take a physics-based, data-driven approach using machine learning techniques.\n\n 📈 The project is currently in its third phase, and until now, we have been able to differentiate between wells that are at risk of sand production and non-concerning ones. The next stage intends to predict the approximate time and conditions at which sand will be produced for each well during its lifetime.',
        cover: 'assets/blog/blog-3.jpg',
        hashtags: '#safety #machinelearning #project #data #oilandgas #stage'
      }
    ]

    return { projects, products, publications, careers, team, blog, researchAreas };
  }
}
