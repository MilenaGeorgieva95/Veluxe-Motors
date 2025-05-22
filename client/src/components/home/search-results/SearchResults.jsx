import { Link } from 'react-router';
import styles from './SearchResults.module.css'


export default function SearchResults({ results }) {
    console.log(results);
    
  return (<div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4">
        <h2>Search Results</h2>
          {results.map((car) => (
            <div
              key={car.objectId}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div className={styles.imgContainer}>
                  <img className={styles.img} src={car.img} alt="" />
                </div>
                <h4 className="mb-3">{car.brand} ${car.price} per day</h4>
            
                <p className="mb-3">{car.model}</p>
                <Link
                  to={`/catalog-cars/${car.objectId}/details`}
                  className={styles.detailsBtn}
                >
                  Details
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>)
}
