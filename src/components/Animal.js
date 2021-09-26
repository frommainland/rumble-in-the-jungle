import './Animal.css'

const Animal = () => {
    return (
        <div className='animal-wrap'>
            <h1 className='animal-title'>
                ELEPHANT
            </h1>
            <p className='animal-quotes'>
                “It’s great to be an elephant. All big and fat and round, and wander through the jungle just elephing around.”
            </p>
            <div className='animal-sound'></div>

            <div className='animal-illustration'>
            </div>

            <section className='animal-metrics'>
                <div className='animal-metrics-item'>
                    <div className='animal-metric-item-number'>
                        <div>2-5</div>
                        <div>tons</div>
                    </div>
                    <p>weight</p>
                </div>
                <div className='animal-metrics-item'>
                    <div className='animal-metric-item-number'>
                        <div>8-10</div>
                        <div>feet</div>
                    </div>
                    <p>height</p>
                </div>
                <div className='animal-metrics-item'>
                    <div className='animal-metric-item-number'>
                        <div>60-70</div>
                        <div>years</div>
                    </div>
                    <p>life span</p>
                </div>
            </section>

            <section className='animal-essay'>
                African forest elephants live in family groups of up to 20 individuals and forage on leaves, grasses, seeds, fruit, and tree bark.
            </section>

            <div className='animal-images'></div>
        </div>
    )
}

export default Animal