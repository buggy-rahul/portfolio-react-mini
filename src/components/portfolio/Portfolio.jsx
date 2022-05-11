import React from 'react'
import './portfolio.css'



const portfolio = () => {
    const data = [
        {
            id: 1,
            image: "https://cdn.dribbble.com/users/7142728/screenshots/18190253/media/8fe7204ba613eceea0812657357cc7b4.png?compress=1&resize=1200x900&vertical=top",
            title: 'Video Editing App',
            github: 'https://github.com/buggy-rahul',
            demo: 'https://dribbble.com/shots/18190253-Video-Editor-App'
        },
        {
            id: 2,
            image: "https://cdn.dribbble.com/userupload/2678146/file/original-afe5a21051b8e9cdb6b0a71da2346026.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1200",
            title: 'Psyneca Mobile',
            github: 'https://github.com/buggy-rahul',
            demo: 'https://dribbble.com/shots/18190157-Psyneca-Mobile'
        },
        {
            id: 3,
            image: "https://cdn.dribbble.com/users/745177/screenshots/18191259/media/1d2e4a3e33dbf0755c8bbe345ed52e34.png?compress=1&resize=1200x900&vertical=top",
            title: 'Travel - Travel Journey Landing',
            github: 'https://github.com/buggy-rahul',
            demo: 'https://dribbble.com/shots/18191259-Travel-Travel-Journey-Landing'
        },
        {
            id: 4,
            image: "https://cdn.dribbble.com/users/5135626/screenshots/18191248/media/5731030bcb722c62769549e9f7557efa.png?compress=1&resize=1200x900&vertical=top",
            title: 'E-Learning Platform Landing Page',
            github: 'https://github.com/buggy-rahul',
            demo: 'https://dribbble.com/shots/18191248-E-Learning-Platform-Landing-Page'
        },
        {
            id: 5,
            image: "https://cdn.dribbble.com/userupload/2683163/file/original-c54f2f69e18789926bb549f7d921584b.jpeg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1200",
            title: 'Quiz Games Application',
            github: 'https://github.com/buggy-rahul',
            demo: 'https://dribbble.com/shots/18197105-Quiz-Games-Application'
        },
        {
            id: 6,
            image: "https://cdn.dribbble.com/userupload/2689162/file/original-d8e691fbe9b376c366735fa56e401e28.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1200",
            title: 'Workout Mobile App',
            github: 'https://github.com/buggy-rahul',
            demo: 'https://dribbble.com/shots/18200546-Workout-Mobile-App'
        }
    ]
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio_items">
                                <div className="portfolio_item-img">
                                    <img src={image} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }


            </div>
        </section>
    )
}

export default portfolio