import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li>
                    <Link to='/products/p1'>Books</Link>
                </li>
                <li>
                    <Link to='/products/p2'>Catalogs</Link>
                </li>
                <li>
                    <Link to='/products/p3'>Courses</Link>
                </li>
                <li>
                    <Link to='/products/p4'>Classes</Link>
                </li>
            </ul>
        </section>
    );
};

export default Products;