import services from '../services';

function OfferList() {
    return (
        <div>
            <h1>Strona w budowie</h1>
            <h1>W naszej ofercie:</h1>
            <ul>
                {services.map(service => (
                    <li key={service.id}>
                        <a href={service.url}>
                        <h2>{service.name}</h2>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OfferList;